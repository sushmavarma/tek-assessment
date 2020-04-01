import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.css';
import App from './js/containers/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
