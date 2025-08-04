import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import GeneAIDashboard from './modules/geneai/pages/Dashboard'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/geneai" element={<GeneAIDashboard />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
