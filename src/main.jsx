import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// ИСПРАВЛЕНО: Добавлен корректный путь через папку pages
import './pages/pages.module.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
