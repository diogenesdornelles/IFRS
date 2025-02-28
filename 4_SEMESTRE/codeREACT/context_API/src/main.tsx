import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* envolver toda a raiz da aplicação com Provider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
