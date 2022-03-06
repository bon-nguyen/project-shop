import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
    <Provider store={store}>
       <Router>
        <SnackbarProvider maxSnack={3} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
          <App />
        </SnackbarProvider>
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

