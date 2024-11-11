import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Checkbox } from './Checkbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App />
    <p>------------------------------</p>
    <Checkbox/>
  </StrictMode>,
)
