import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AppContextProvider from './components/context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
    
  </Router>,
)
