import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './i18n/i18n';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/App';
import * as serviceWorker from './serviceWorker';
import AppErrorBoundary from './app/common/AppErrorBoundary';
import Loader from './app/common/Loader';
import configureStore from './app/store/configureStore';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <AppErrorBoundary>
      <Suspense fallback={<Loader/>}>
        <App />
      </Suspense>
    </AppErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
