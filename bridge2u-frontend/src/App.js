import React from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { LoginButton } from "./components/LoginButton";
import { LogoutButton } from "./components/LogoutButton";
import AppointmentList from "./components/AppointmentList";

function App() {
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal();

  return (
    <div>
      <h1>BridgeToU - Counselor Appointment Scheduler</h1>

      {isAuthenticated ? (
        <>
          <p>Welcome, {accounts[0]?.username}</p>
          <LogoutButton />
          <AppointmentList />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
