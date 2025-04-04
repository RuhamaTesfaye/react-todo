import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Foods from './components/Foods.tsx'
import TodoApp from './components/TodoApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <TodoApp />
  </StrictMode>,
)
