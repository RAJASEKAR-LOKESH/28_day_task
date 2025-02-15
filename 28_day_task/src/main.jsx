import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StateProvider } from './components/StateContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StateProvider>
    <App />
  </StateProvider>,
)
