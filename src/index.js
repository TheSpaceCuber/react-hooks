import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

const instance = createInstance({
  urlBase: "//172.18.0.3/",
  siteId: 5,
  heartBeat: {
    active: true,
    seconds: 10,
  },
  linkTracking: false,
  configurations: {
    disableCookies: true,
    setSecureCookie: true,
    setRequestMethod: "POST",
  },
});

ReactDOM.render(
  <MatomoProvider value={instance}>
    <App />
  </MatomoProvider>,
  document.getElementById('root')
);