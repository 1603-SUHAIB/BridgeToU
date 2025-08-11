export const msalConfig = {
  auth: {
    clientId: "e96cf8fa-e90a-4629-ba2d-9e462da78e2b",
    authority: `https://login.microsoftonline.com/bcb7e647-9364-44c8-9543-3e67f39424b3`,
    redirectUri: "https://red-river-0d54dc60f.1.azurestaticapps.net",
  }
};

export const loginRequest = {
  scopes: ["User.Read"]
};
