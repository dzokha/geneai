import { useState } from 'react'
import trLogo from './assets/timerent.png'
import scLogo from './assets/sangche.jpg'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://timerent.vn" target="_blank">
          <img src={trLogo} className="logo" alt="Timerent logo" />
        </a>
        <a href="https://sangche.vn" target="_blank">
          <img src={scLogo} className="logo react" alt="Sangche logo" />
        </a>
      </div>
      <main>
        <h1>CyberSecurity + Intellectual Property</h1>
        <p className="slogan">Protecting Ideas, Security System</p>
        <p className="inro">A personal page on cybersecurity and intellectual property</p>
      <main>
      <footer> 
        <small>2025 - Kha Van Nguyen</small> 
      </footer>
    </>
  )
}

export default App
