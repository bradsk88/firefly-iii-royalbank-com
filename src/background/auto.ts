import {AutoRunState} from "./auto_state";
import {autoRunStartURL, debugAutoRun, hubExtensionId} from "../extensionid";
import Tab = chrome.tabs.Tab;

setAutoRunState(AutoRunState.Unstarted);

let openedWindow: Tab | undefined;

export async function progressAutoRun(state = AutoRunState.Accounts) {
    await setAutoRunState(state)
    if (state === AutoRunState.Done) {
        if (!!openedWindow) {
            const id = openedWindow.id;
            openedWindow = undefined;
            if (debugAutoRun) {
                console.log('the auto run would have closed the bank tab. But debug is enabled.')
                return;
            } else {
                return chrome.tabs.remove(id!);
            }
        }
        return;
    }
    if (!openedWindow) {
        openedWindow = await chrome.tabs.create({
            url: autoRunStartURL,
            active: false,
        });
    }
}

export async function setAutoRunState(s: AutoRunState): Promise<void> {
    if (AutoRunState.Done === s) {
        const ls = await chrome.storage.local.get("ffiii_auto_run_start_timestamp_millis");
        const millis = new Date().getTime() - ls.ffiii_auto_run_start_timestamp_millis;
        const seconds = Number(millis / 1000).toFixed(0);
        console.log(`Auto run took ${seconds} seconds`);
        chrome.runtime.sendMessage(hubExtensionId, {
            action: "auto_run_duration_seconds",
            seconds: seconds,
        })
    }
    return setAutoRunLastTx("")
        .then(() => chrome.storage.local.set({
            "ffiii_auto_run_state": s,
            "ffiii_auto_run_start_timestamp_millis": AutoRunState.Accounts === s ? new Date().getTime() : undefined,
        }))
        .then(() => console.log('stored state', s))
        .then(() => chrome.runtime.sendMessage({
            action: "update_auto_run_progress",
        }, () => {
        }));
}

export function getAutoRunState(): Promise<AutoRunState> {
    return chrome.storage.local.get(["ffiii_auto_run_state"]).then(r => {
        return r.ffiii_auto_run_state || AutoRunState.Unstarted;
    });
}

export async function progressAutoTx(lastAccountName: string) {
    return setAutoRunLastTx(lastAccountName);
}

async function setAutoRunLastTx(accountName: string): Promise<void> {
    if (!accountName) {
        return chrome.storage.local.remove("ffiii_auto_run_last_transaction_account_name");
    }
    return chrome.storage.local.set({
        "ffiii_auto_run_last_transaction_account_name": accountName,
    })
}

export function getAutoRunLastTransaction(): Promise<string | undefined> {
    return chrome.storage.local.get(["ffiii_auto_run_last_transaction_account_name"]).then(r => {
        return r.ffiii_auto_run_last_transaction_account_name;
    });
}