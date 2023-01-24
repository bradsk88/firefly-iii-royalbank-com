import * as React from 'react'
import {useState} from 'react'
import AuthForm from "./AuthForm";

enum InitState {
    Loading = "loading",
    SelfAuth = "self auth",
    NeedPerms = "needperms",
    Complete = "complete",
}

const Initialize = () => {
    const redirectUri = `https://${chrome.runtime.id}.chromiumapp.org/`

    const [baseUrl, setBaseUrl] = useState<string>("")
    const [state, setState] = useState<InitState>(InitState.Loading)

    chrome.runtime.sendMessage({
        action: 'check_base_url',
    }).then(url => {
        if (!!url) {
            setBaseUrl(url);
            chrome.permissions.contains({
                origins: [`${url}/*`],
            }, (hasPerm) => {
                if (hasPerm) {
                    setState(InitState.Complete);
                    chrome.runtime.sendMessage({
                        action: 'try_resume_auto_run',
                    }, () => {})
                    setTimeout(() => window.close(), 3000);
                } else {
                    setState(InitState.NeedPerms);
                }
            })
        } else {
            setState(InitState.SelfAuth);
        }
    })

    return (
        <>
            {state === InitState.Loading &&
                <div>Loading</div>
            }
            {state === InitState.SelfAuth &&
                <AuthForm redirectUri={redirectUri} onSubmit={(params) => {
                    chrome.runtime.sendMessage(
                        {
                            action: "submit",
                            value: params,
                        },
                        () => {
                        }
                    );
                }}></AuthForm>
            }
            {state === InitState.NeedPerms &&
                <>
                    <div>We need some more permissions!</div>
                    <button onClick={() => {
                        chrome.permissions.request({
                            origins: [`${baseUrl}/*`]
                        }, (granted) => {
                            if (granted) {
                                setState(InitState.Complete);
                            }
                        })
                    }}>Grant Permissions</button>
                </>
            }
            {state === InitState.Complete &&
                <>
                    <div>Everything is set up!</div>
                    <div>This window will close automatically</div>
                </>
            }
        </>
    );
}

export default Initialize