import * as React from 'react'
import { useEffect, useRef, useState } from 'react'

type Props = {
  config: AuthFormConfig
  redirectUri: string
  onSubmit: (params: AuthInputParams) => void
}

const AuthForm = (props: Props) => {
  const { config, redirectUri: defaultRedirectUri, onSubmit } = props;

  const [baseURL, setBaseURL] = useState<string>(config.baseURL ?? "");
  const [clientType, setClientType] = useState<ClientType>(config.clientTypesSupported[0]);
  const [clientId, setClientId] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [redirectUri, _] = useState<string>(defaultRedirectUri);
  const [tokenEndpointAuthMethod, setTokenEndpointAuthMethod] = useState<TokenEndPointAuthMethod>(config.tokenEndpointAuthMethodSupported[0]);

  const [copyButtonText, setCopyButtonText] = useState("copy");

  const redirectUriInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setCopyButtonText("copy");
    }, 1000);
  }, [copyButtonText]);

  return (
    <>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();

          const params = {
            authorizationEndpoint: `${(config.baseURL || baseURL)}/oauth/authorize`,
            tokenEndpoint: `${(config.baseURL || baseURL)}/oauth/token`,
            clientType,
            clientId,
            clientSecret,
            redirectUri,
            tokenEndpointAuthMethod,
          };
          onSubmit(params)
        }}
      >
        <fieldset>
          <legend>API Information</legend>
          <div>
            <label htmlFor="base_url">
              Firefly III URL
            </label>
            <input
              type="url"
              name="base_url"
              placeholder="https://firefly.local"
              size={40}
              form="form"
              required
              value={config.baseURL || baseURL}
              onChange={(e) => setBaseURL(e.target.value)}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Client Config</legend>
          <div>
            Client Type
            <input
              type="radio"
              id="client_type_public"
              name="client_type"
              value="public"
              checked={clientType === "public"}
              onChange={() => setClientType("public")}
              disabled={!config.clientTypesSupported.includes("public")}
            />
            <label htmlFor="client_type_public">Public</label>
            <input
              type="radio"
              id="client_type_confidential"
              name="client_type"
              value="confidential"
              checked={clientType === "confidential"}
              onChange={() => setClientType("confidential")}
              disabled={!config.clientTypesSupported.includes("confidential")}
            />
            <label htmlFor="client_type_confidential">Confidential</label>
          </div>

          <div>
            <label htmlFor="client_id">Client ID</label>
            <input
              type="text"
              name="client_id"
              size={30}
              value={clientId}
              onChange={(e) => {
                setClientId(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="client_secret">Client Secret</label>
            <input
              type="text"
              name="client_secret"
              size={30}
              value={clientSecret}
              onChange={(e) => {
                setClientSecret(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="redirect_uri">redirect_uri</label>
            <input
              ref={redirectUriInputRef}
              type="text"
              id="redirect_uri"
              name="redirect_uri"
              value={redirectUri}
              readOnly
              size={50}
            />
            <button
              id="copy_redirect_uri_button"
              type="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                redirectUriInputRef.current?.select();
                redirectUriInputRef.current?.setSelectionRange(0, 99999);
                document.execCommand("copy");

                setCopyButtonText("copied!");
              }}
            >
              {copyButtonText}
            </button>
          </div>
        </fieldset>

        <fieldset>

          <div>
            Auth Method
            <input
              type="radio"
              id="token_endpoint_auth_method_client_secret_basic"
              name="token_endpoint_auth_method"
              value="client_secret_basic"
              checked={tokenEndpointAuthMethod === "client_secret_basic"}
              onChange={() => setTokenEndpointAuthMethod("client_secret_basic")}
              disabled={!config.tokenEndpointAuthMethodSupported.includes("client_secret_basic")}
            />
            <label htmlFor="token_endpoint_auth_method_client_secret_basic">
              Client Secret Basic (Authorization Header)
            </label>
            <input
              type="radio"
              id="token_endpoint_auth_method_client_secret_post"
              name="token_endpoint_auth_method"
              value="client_secret_post"
              checked={tokenEndpointAuthMethod === "client_secret_post"}
              onChange={() => setTokenEndpointAuthMethod("client_secret_post")}
              disabled={!config.tokenEndpointAuthMethodSupported.includes("client_secret_post")}
            />
            <label htmlFor="token_endpoint_auth_method_client_secret_post">
              Client Secret Post (Body Parameter)
            </label>
          </div>

          {/* 
          <div>
            <input type="checkbox" id="use_curl" name="use_curl" disabled />
            <label htmlFor="use_curl">
              Show TokenRequest cURL command (not implemented yet...)
            </label>
          </div>
            */}
        </fieldset>

        <input type="submit" id="submit" value="Start Auth" />
      </form>
    </>
  );
};

export default AuthForm;