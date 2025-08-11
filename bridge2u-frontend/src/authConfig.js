export const msalConfig = {
  auth: {
    clientId: "34c184a5-3034-475a-a3f5-63cb6a9d090d",
    authority: `https://login.microsoftonline.com/bcb7e647-9364-44c8-9543-3e67f39424b3`,
    redirectUri: "window.location.origin",
  }
};

export const loginRequest = {
  scopes: ["User.Read"]
};
