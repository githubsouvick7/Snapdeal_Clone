import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store'
import { Auth0Provider } from '@auth0/auth0-react';
import { Context } from './Context/ContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-osoluiemsmr8uoqc.us.auth0.com"
    clientId="L4nw2ACeOX7VLU3vLa0w2IeJe84Ay66Z"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <Context>
        <App />
      </Context>
    </Provider>
  </Auth0Provider>
);
