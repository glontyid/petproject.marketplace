import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './styles/index.scss';
import App from './App';
import { StyledEngineProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StyledEngineProvider>
);
