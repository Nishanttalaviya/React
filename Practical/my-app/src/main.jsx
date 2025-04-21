import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PlayerForm from './Component/players.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < PlayerForm/>
  </StrictMode>,
)
