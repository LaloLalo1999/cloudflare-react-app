import { useState, useEffect } from 'react'
import './App.css'

const facts = [
  "Cloudflare's network spans 330+ cities in 120+ countries.",
  "Cloudflare Pages deploys globally in under 60 seconds.",
  "React was created by Jordan Walke at Facebook in 2011.",
  "Vite uses native ES modules for lightning-fast HMR.",
  "Cloudflare Workers run in V8 isolates, not containers.",
  "This app was modified by Claude AI and auto-deployed via GitHub CI/CD.",
]

function App() {
  const [count, setCount] = useState(0)
  const [factIndex, setFactIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setFactIndex(i => (i + 1) % facts.length)
        setVisible(true)
      }, 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app-container">
      <header className="hero">
        <div className="logos">
          <span className="logo-badge">☁️</span>
          <span className="plus">+</span>
          <span className="logo-badge">⚛️</span>
        </div>
        <h1>Cloudflare + React</h1>
        <p className="subtitle">AI-powered · Edge-deployed · Auto CI/CD</p>
      </header>

      <section className="card counter-card">
        <p className="counter-label">Interactive Counter</p>
        <div className="counter-row">
          <button className="btn btn-secondary" onClick={() => setCount(c => c - 1)}>−</button>
          <span className="counter-value">{count}</span>
          <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>+</button>
        </div>
        <button className="btn btn-ghost" onClick={() => setCount(0)}>Reset</button>
      </section>

      <section className="card fact-card">
        <p className="fact-label">💡 Did you know?</p>
        <p className={`fact-text ${visible ? 'fade-in' : 'fade-out'}`}>
          {facts[factIndex]}
        </p>
        <div className="dots">
          {facts.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === factIndex ? 'active' : ''}`}
              onClick={() => { setFactIndex(i); setVisible(true) }}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Modified by <strong>Claude AI</strong> · Deployed on <strong>Cloudflare Pages</strong></p>
        <p className="footer-sub">Push to GitHub → Auto-deploy triggers → Live in seconds</p>
      </footer>
    </div>
  )
}

export default App
