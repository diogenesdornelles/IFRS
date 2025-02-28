import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App1, App2 } from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App1 />
    <App2 />
  </StrictMode>,
)
