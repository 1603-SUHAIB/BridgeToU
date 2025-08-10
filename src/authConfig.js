export const msalConfig = {
  auth: {
    clientId: "<CLIENT_ID>",
    authority: `https://login.microsoftonline.com/<TENANT_ID>`,
    redirectUri: window.location.origin
  }
};
export const loginRequest = { scopes: ["openid","profile","email"] };
