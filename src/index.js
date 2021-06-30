import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from './context/context'
import App from './App';
import {SpeechProvider} from '@speechly/react-client'


ReactDOM.render(
  <React.StrictMode>
  <SpeechProvider appId="74ad6fde-1030-4ed2-a230-05ab46d9666b" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

