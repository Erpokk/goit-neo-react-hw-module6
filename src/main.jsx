import React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate для збереження стану
import store, { persistor } from './redux/store';

createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
