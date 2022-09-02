import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'



import chatStore from './chatStore';
import stores from './emergencyStore';


const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Provider store={chatStore} stores={stores} >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>

  </BrowserRouter>
);
