import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Auth0Provider
    domain="dev-z8k4vc3e0cwmohce.us.auth0.com"
    clientId="5GTCwAHvwI5LNt4RSxDU3YmNLJn8LPbC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
)



