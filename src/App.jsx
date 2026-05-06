import { useState } from 'react'

function App() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')

  const servicios = [
    { name: 'Moto Rápida', icon: '🏍️', desc: 'Ideal para tráfico', price: 'Desde $3' },
    { name: 'Auto Estándar', icon: '🚗', desc: 'Comodidad diaria', price: 'Desde $5' },
    { name: 'Camioneta Confort', icon: '🚙', desc: 'Más espacio', price: 'Desde $7' },
    { name: 'Van Familiar', icon: '🚐', desc: 'Hasta 7 pasajeros', price: 'Desde $10' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🚗</span>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MoveNow</span>
                <p className="text-xs text-gray-400">Muévete libre</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-10">
              <a href="#pasajeros" className="text-sm font-medium hover:text-purple-400 transition">Pasajeros</a>
              <a href="#conductores" className="text-sm font-medium hover:text-purple-400 transition">Conductores</a>
              <a href="#seguridad" className="text-sm font-medium hover:text-purple-400 transition">Seguridad</a>
              <a href="#tarifas" className="text-sm font-medium hover:text-purple-400 transition">Tarifas</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="#" className="hidden lg:block text-sm font-medium hover:text-purple-400 transition">Iniciar sesión</a>
              <a href="#" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-full font-semibold transition">
                Descargar app
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero con mockup */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&q=80" alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-black/90"></div>
          </div>

          <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 py-24 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                  Muévete seguro,<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">rápido y a tu manera</span>
                </h1>
                <p className="text-xl text-gray-300 mb-12">
                  Solicita viajes en minutos con conductores verificados, monitoreo GPS y soporte 24/7 en Punto Fijo.
                </p>

                {/* Widget de viaje */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 mb-10">
                  <h3 className="text-2xl font-bold mb-6">Solicitar viaje</h3>
                  <div className="space-y-5">
                    <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="📍 Recogida" className="w-full bg-white/20 border border-white/30 rounded-xl px-5 py-4 outline-none focus:border-purple-400 transition text-lg" />
                    <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="🎯 Destino" className="w-full bg-white/20 border border-white/30 rounded-xl px-5 py-4 outline-none focus:border-purple-400 transition text-lg" />
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-5 rounded-xl font-bold text-xl transition">
                      Ver precios
                    </button>
                  </div>
                </div>

                {/* Beneficios */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-sm font-medium">Conductores verificados</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-sm font-medium">Monitoreo GPS</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full">
                    <span className="text-green-400 text-xl">✓</span>
                    <span className="text-sm font-medium">Soporte 24/7</span>
                  </div>
                </div>
              </div>

              {/* Mockup celular */}
              <div className="hidden lg:flex justify-center">
                <div className="relative w-96 h-[650px] bg-gray-900 rounded-[3.5rem] border-[8px] border-gray-700 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-gray-700 rounded-b-2xl"></div>
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-[3rem] overflow-hidden flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-7xl mb-6">🗺️</div>
                      <div className="font-bold text-2xl mb-2">Mapa en vivo</div>
                      <div className="text-white/70 text-lg">Conductor cercano</div>
                      <div className="mt-8 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full inline-block">
                        <span className="text-green-400 font-bold">●</span> En camino
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-24 bg-black">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">Elige tu viaje</h2>
              <p className="text-lg text-gray-400">Diferentes opciones para cada necesidad</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicios.map((servicio, i) => (
                <div key={i} className="group bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-10 rounded-3xl border border-purple-500/30 hover:border-purple-400 transition">
                  <div className="text-6xl mb-6">{servicio.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{servicio.name}</h3>
                  <p className="text-gray-400 mb-6">{servicio.desc}</p>
                  <div className="text-3xl font-black text-purple-400">{servicio.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-24 bg-gradient-to-br from-purple-900 to-black">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">Viaja en 4 pasos</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-12">
              {[
                { step: '1', icon: '📱', title: 'Abre la app', desc: 'Disponible iOS y Android' },
                { step: '2', icon: '📍', title: 'Indica tu destino', desc: 'Elige recogida y llegada' },
                { step: '3', icon: '🚗', title: 'Elige tu viaje', desc: 'Selecciona el tipo de auto' },
                { step: '4', icon: '✅', title: 'Viaja seguro', desc: 'Monitoreo GPS en tiempo real' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8">{item.step}</div>
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="seguridad" className="py-24 bg-black">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-8">Viaja con confianza</h2>
                <ul className="space-y-6">
                  {[
                    { icon: '✓', title: 'Conductores verificados', desc: 'Todos pasan por verificación de antecedentes y documentación' },
                    { icon: '✓', title: 'Monitoreo GPS', desc: 'Sigue tu viaje en tiempo real desde la app' },
                    { icon: '✓', title: 'Soporte 24/7', desc: 'Estamos disponibles para ayudarte en cualquier momento' },
                    { icon: '✓', title: 'Tarifas claras', desc: 'Sin sorpresas. Ves el precio antes de confirmar' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-green-400 text-2xl font-bold">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-10 rounded-3xl border border-purple-500/30">
                <div className="text-center">
                  <div className="text-8xl mb-8">🛡️</div>
                  <h3 className="text-3xl font-bold mb-4">Tu seguridad es primero</h3>
                  <p className="text-gray-400 text-lg mb-8">
                    Comparte tu viaje con contactos de confianza y llega seguro a tu destino.
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-full font-bold text-lg transition">
                    Saber más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA App Download */}
        <section className="py-24 bg-black">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
              Solicita tu primer viaje
            </h2>
            <p className="text-2xl text-gray-400 mb-12">Descarga la app y recibe $5 OFF en tu primer viaje</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-black px-10 py-6 rounded-2xl font-bold transition flex items-center gap-4">
                <span className="text-5xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Disponible en</div>
                  <div className="text-2xl">App Store</div>
                </div>
              </button>
              <button className="bg-white text-black px-10 py-6 rounded-2xl font-bold transition flex items-center gap-4">
                <span className="text-5xl">🤖</span>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Disponible en</div>
                  <div className="text-2xl">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-16 border-t border-gray-800">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🚗</span>
                <div>
                  <span className="text-2xl font-black">MoveNow</span>
                  <p className="text-xs text-gray-400">Muévete libre</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                App de movilidad para solicitar viajes seguros, rápidos y monitoreados en Punto Fijo.
              </p>
              <div className="flex gap-5">
                <a href="#" className="text-3xl hover:scale-125 transition">📷</a>
                <a href="#" className="text-3xl hover:scale-125 transition">📘</a>
                <a href="#" className="text-3xl hover:scale-125 transition">🐦</a>
              </div>
            </div>

            <div>
              <h3 className="font-black text-lg mb-8">Compañía</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Seguridad</a></li>
                <li><a href="#" className="hover:text-white transition">Comunidad</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-lg mb-8">Legal</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 MoveNow. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
