import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import AboutPage from './pages/AboutPage'
import AcademicsPage from './pages/AcademicsPage'
import AdmissionPage from './pages/AdmissionPage'
import CampusPage from './pages/CampusPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import SharedAlbumPage from './pages/SharedAlbumPage'

function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/campus" element={<CampusPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/album"
            element={
              <ProtectedRoute>
                <SharedAlbumPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admission"
            element={
              <ProtectedRoute>
                <AdmissionPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default App
