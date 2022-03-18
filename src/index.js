import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RecoilRoot} from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <StrictMode>
      <App />
    </StrictMode>
  </RecoilRoot>,
  document.getElementById('root')
);
