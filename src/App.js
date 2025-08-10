import React from 'react';
import { MsalProvider, useMsal } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "./authConfig";
import axios from 'axios';

const msalInstance = new PublicClientApplication(msalConfig);

function Main() {
  const { instance, accounts } = useMsal();
  const user = accounts[0];

  const bookSlot = async () => {
    const token = await instance.acquireTokenSilent(loginRequest);
    const resp = await axios.post('/api/bookSlot', { counselorId:"1", slot:"10:00AM" }, {
      headers: { Authorization: `Bearer ${token.accessToken}` }
    });
    alert(resp.data.message);
  };

  if (!user) return <button onClick={() => instance.loginPopup(loginRequest)}>Login</button>;

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <button onClick={bookSlot}>Book Appointment at 10 AM</button>
    </div>
  );
}

export default function App() {
  return <MsalProvider instance={msalInstance}><Main/></MsalProvider>;
}
