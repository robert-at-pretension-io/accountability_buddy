import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ggk93vhy.us.auth0.com"
    clientId="8iMc9eBnIdaBMpKyf6LogGITUF5kgUo6"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);