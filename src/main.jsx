import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import  { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    <Toaster 
      position="top-right"
      toastOptions={{
        duration: 3000,
        className: 'bg-white border-2 border-emerald-200 rounded-xl shadow-xl text-slate-700 font-medium p-4',
        success: {
          className: 'bg-emerald-50 border-2 border-emerald-400 text-emerald-800 rounded-xl shadow-xl font-medium p-4',
          iconTheme: {
            primary: '#10b981',
            secondary: '#ffffff',
          },
        },
        error: {
          className: 'bg-red-50 border-2 border-red-400 text-red-800 rounded-xl shadow-xl font-medium p-4',
          iconTheme: {
            primary: '#ef4444',
            secondary: '#ffffff',
          },
        },
      }}
    />
    </Provider>
  </StrictMode>,
)