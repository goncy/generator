import React from "react";

const LoginScreen = ({login, status}) => (
  <div>
    {status === "init" && <span>Tratando de restaurar sesión...</span>}
    {status === "restored" && <button onClick={login}>Login with Google</button>}
  </div>
);

export default LoginScreen;
