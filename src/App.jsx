import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('Auto')

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const opciones = [
    { name: 'Moto', icon: '🏍️', desc: 'Rápido y económico', price: 'Desde $2', features: ['Ideal para tráfico', 'Casco incluido', 'Llega más rápido'] },
    { name: 'Auto', icon: '🚗', desc: 'Comodidad diaria', price: 'Desde $4', features: ['Aire acondicionado', 'Asientos amplios', 'Seguro incluido'] },
    { name: 'Confort', icon: '🚙', desc: 'Máximo lujo', price: 'Desde $7', features: ['Autos premium', 'Conductor top', 'Música a tu gusto'] },
  ]

  const stats = [
    { value: '5,000+', label: 'Viajes por día' },
    { value: '< 5min', label: 'Tiempo de espera' },
    { value: '1,200+', label: 'Conductores' },
    { value: '4.9★', label: 'Valoración' },
  ]

  const pasos = [
    { num: '01', icon: '📍', title: 'Indica tu destino', desc: 'Escribe tu punto de recogida y a dónde quieres ir.' },
    { num: '02', icon: '🚗', title: 'Elige tu viaje', desc: 'Selecciona entre Moto, Auto o Confort según tu presupuesto.' },
    { num: '03', icon: '💳', title: 'Confirma y paga', desc: 'Paga en efectivo, tarjeta o billetera digital.' },
    { num: '04', icon: '⚡', title: '¡Llega rápido!', desc: 'Rastrea tu conductor en tiempo real hasta tu destino.' },
  ]

  const activeOption = opciones.find(o => o.name === activeTab) || opciones[1]

  return (
    <div className="taxi-app">

      <header className={`taxi-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="taxi-logo">
            <div className="logo-icon">🚗</div>
            <span className="logo-name">MoveNow</span>
          </a>
          <nav className="taxi-nav">
            <a href="#viaja">Viaja</a>
            <a href="#conduce">Conduce</a>
            <a href="#empresas">Empresas</a>
            <a href="#seguridad">Seguridad</a>
          </nav>
          <div className="header-ctas">
            <a href="#" className="btn-login">Iniciar sesión</a>
            <a href="#" className="btn-register">Regístrate gratis</a>
          </div>
        </div>
      </header>

      <main>
        <section className="taxi-hero">
          <div className="hero-bg">
            <img src="https://images.unsplash.com/photo-1449965408869-e421fed321f9?w=1600&q=80" alt="" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-body">
            <div className="hero-text">
              <div className="hero-chip">⚡ Disponible 24/7 en tu ciudad</div>
              <h1>Ve a cualquier<br /><span>lugar</span> en minutos</h1>
              <p>Solicita tu viaje en segundos. Conductores verificados, precios transparentes, llegada garantizada.</p>
              <div className="hero-stats">
                {stats.map((s, i) => (
                  <div key={i} className="stat-block">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-widget">
              <div className="widget-header">
                <h3>Solicitar viaje</h3>
                <span className="widget-badge">🕐 Conductor en 4 min</span>
              </div>
              <div className="widget-form">
                <div className="input-group">
                  <div className="input-dot blue" />
                  <input type="text" value={pickup} onChange={e => setPickup(e.target.value)} placeholder="¿Desde dónde sales?" />
                </div>
                <div className="input-divider" />
                <div className="input-group">
                  <div className="input-dot dark" />
                  <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="¿A dónde vas?" />
                </div>
              </div>
              <div className="widget-types">
                {opciones.map((o, i) => (
                  <button key={i} className={`type-btn ${activeTab === o.name ? 'active' : ''}`} onClick={() => setActiveTab(o.name)}>
                    <span>{o.icon}</span>
                    <span>{o.name}</span>
                  </button>
                ))}
              </div>
              <div className="widget-price">
                <span>Estimado</span>
                <strong>{activeOption.price}</strong>
              </div>
              <button className="btn-solicitar">Ver precios detallados →</button>
            </div>
          </div>
        </section>

        <section id="viaja" className="opciones-section">
          <div className="section-wrap">
            <div className="section-head">
              <span className="eyebrow">Opciones de viaje</span>
              <h2>Elige cómo moverte</h2>
              <p>Cada opción está diseñada para un momento diferente</p>
            </div>
            <div className="opciones-grid">
              {opciones.map((o, i) => (
                <div key={i} className={`opcion-card ${o.name === 'Auto' ? 'featured' : ''}`}>
                  {o.name === 'Auto' && <div className="card-badge">Más popular</div>}
                  <div className="opcion-icon">{o.icon}</div>
                  <h3>{o.name}</h3>
                  <p className="opcion-desc">{o.desc}</p>
                  <div className="opcion-price">{o.price}</div>
                  <ul className="opcion-features">
                    {o.features.map((f, j) => <li key={j}>✓ {f}</li>)}
                  </ul>
                  <button className="btn-elegir">Elegir {o.name}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pasos-section">
          <div className="section-wrap">
            <div className="section-head">
              <span className="eyebrow">Simple y rápido</span>
              <h2>¿Cómo funciona?</h2>
            </div>
            <div className="pasos-grid">
              {pasos.map((p, i) => (
                <div key={i} className="paso-card">
                  <div className="paso-num">{p.num}</div>
                  <div className="paso-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="conduce" className="driver-section">
          <div className="section-wrap driver-inner">
            <div className="driver-img">
              <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80" alt="conductor" />
            </div>
            <div className="driver-text">
              <span className="eyebrow">Para conductores</span>
              <h2>Conduce con MoveNow y gana más</h2>
              <p>Maneja en tus propios horarios, recibe pagos semanales y accede a beneficios exclusivos para conductores.</p>
              <ul className="driver-perks">
                <li>✓ Horario completamente flexible</li>
                <li>✓ Pagos semanales garantizados</li>
                <li>✓ Seguro de conducción incluido</li>
                <li>✓ Bonos por calificación alta</li>
              </ul>
              <a href="#" className="btn-driver">Conviertete en conductor →</a>
            </div>
          </div>
        </section>

        <section className="app-section">
          <div className="section-wrap app-inner">
            <div>
              <h2>Descarga la app</h2>
              <p>Disponible para iOS y Android. Miles de usuarios ya usan MoveNow cada día.</p>
              <div className="app-btns">
                <a href="#" className="btn-store">🍎 App Store</a>
                <a href="#" className="btn-store">🤖 Google Play</a>
              </div>
            </div>
            <div className="app-visual">📱</div>
          </div>
        </section>

        <footer className="taxi-footer">
          <div className="section-wrap footer-inner">
            <div>
              <span className="logo-name" style={{color:'white', fontSize:'22px'}}>🚗 MoveNow</span>
              <p>La forma más inteligente de moverte</p>
            </div>
            <div className="footer-links">
              <h4>Viaja</h4>
              <a href="#">Cómo funciona</a>
              <a href="#">Tarifas</a>
              <a href="#">Seguridad</a>
            </div>
            <div className="footer-links">
              <h4>Conduce</h4>
              <a href="#">Regístrate</a>
              <a href="#">Ganancias</a>
              <a href="#">Requisitos</a>
            </div>
            <div className="footer-links">
              <h4>Empresa</h4>
              <a href="#">Sobre nosotros</a>
              <a href="#">Blog</a>
              <a href="#">Contacto</a>
            </div>
          </div>
          <div className="footer-bottom">© 2026 MoveNow · Todos los derechos reservados</div>
        </footer>
      </main>
    </div>
  )
}

export default App
