import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AlbumProvider } from './context/AlbumContext'
import { AuthProvider } from './context/AuthContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AlbumProvider>
          <App />
        </AlbumProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
