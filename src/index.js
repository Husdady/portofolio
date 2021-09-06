import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import 'bootstrap/dist/css/bootstrap.min.css';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 8000,
  offset: '30px',
  transition: transitions.SCALE,
  containerStyle: {
    textTransform: 'lowercase'
  }
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>,
  document.getElementById('root')
);