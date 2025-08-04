// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import trLogo from './assets/images/timerent.png'
import scLogo from './assets/images/sangche.jpg'
import geneLogo from './assets/images/geneai.png'
import fishLogo from './assets/images/shopfish.png'
import './styles/App.css'

function App() {
  const navigate = useNavigate()

  const goToGeneAI = () => {
    navigate('/geneai')
  }

  return (
    <>
      <div className="container">
        <header>
          <a href="https://timerent.vn" target="_blank">
            <img src={trLogo} className="logo" alt="Timerent" />
          </a>
          <a href="https://sangche.vn" target="_blank">
            <img src={scLogo} className="logo" alt="Sangche" />
          </a>
        </header>
        <main>
          <h1>Cybersecurity & Intellectual Property Solutions</h1>
          <p className="slogan">Safeguarding Innovations and Digital Assets</p>
          <p className="inro">A personal page on cybersecurity and intellectual property</p>
          <h3 style={{ marginTop: '2rem' }}>Explore Our Solutions</h3>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={geneLogo}
                alt="GeneAI"
                style={{ width: 80, cursor: 'pointer' }}
                onClick={goToGeneAI}
              />
              <p style={{ fontSize: '0.9rem' }}>AI for automated gene annotation</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="#" target="_blank" rel="noreferrer">
                <img src={fishLogo} alt="Shop Fish" style={{ width: 80 }} />
              </a>
              <p style={{ fontSize: '0.9rem' }}>E-commerce for seafood products</p>
            </div>
          </div>
        </main>
        <footer> 
          <small>2025 - Dzokha</small> 
        </footer>
      </div>
    </>
  )
}

export default App
