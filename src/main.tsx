import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router'  // 👉 sửa từ App thành AppRouter
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
