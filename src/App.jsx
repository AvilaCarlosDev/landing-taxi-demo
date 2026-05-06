import { useState } from 'react'

function App() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">🚗</div>
              <span className="text-2xl font-black">MoveNow</span>
            </div>

            <nav className="hidden lg:flex items-center gap-10">
              <a href="#conduce" className="text-sm font-medium hover:text-gray-300 transition">Conduce</a>
              <a href="#viaja" className="text-sm font-medium hover:text-gray-300 transition">Viaja</a>
              <a href="#seguridad" className="text-sm font-medium hover:text-gray-300 transition">Seguridad</a>
              <a href="#" className="text-sm font-medium hover:text-gray-300 transition">Empresas</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="#" className="hidden lg:block text-sm font-medium hover:text-gray-300 transition">Iniciar sesión</a>
              <a href="#" className="bg-white text-black px-6 py-2.5 rounded-full font-bold transition hover:bg-gray-200">
                Regístrate
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero - Estilo Uber */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1449965408869-e421fed321f9?w=1600&q=80" alt="" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 py-24 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                Ve a cualquier lado<br/>con MoveNow
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                Solicita un viaje, sube y llega. Simple así.
              </p>

              {/* Widget de viaje - estilo Uber */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Solicita un viaje</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">●</span>
                    <input 
                      type="text" 
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="Dirección de recogida" 
                      className="w-full bg-gray-100 rounded-xl px-5 py-4 pl-12 outline-none focus:bg-gray-200 transition text-lg"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">■</span>
                    <input 
                      type="text" 
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="¿A dónde vas?" 
                      className="w-full bg-gray-100 rounded-xl px-5 py-4 pl-12 outline-none focus:bg-gray-200 transition text-lg"
                    />
                  </div>
                  <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-xl transition hover:bg-gray-800">
                    Ver precios
                  </button>
                </div>
              </div>

              {/* Beneficios */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { icon: '⏱️', text: 'Rápido' },
                  { icon: '🛡️', text: 'Seguro' },
                  { icon: '💰', text: 'Accesible' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-semibold">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Opciones de viaje */}
        <section className="py-24 bg-white text-black">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Elige tu viaje</h2>
              <p className="text-lg text-gray-600">Diferentes opciones para cada necesidad y presupuesto</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Moto', icon: '🏍️', desc: 'Rápido y económico', price: 'Desde $2', features: ['Casco incluido', 'Ideal para tráfico', 'Llega más rápido'] },
                { name: 'Auto', icon: '🚗', desc: 'Comodidad diaria', price: 'Desde $4', features: ['Aire acondicionado', 'Viajes compartidos', 'Seguro incluido'] },
                { name: 'Confort', icon: '🚙', desc: 'Máximo confort', price: 'Desde $7', features: ['Autos nuevos', 'Más espacio', 'Conductores top'] },
              ].map((option, i) => (
                <div key={i} className="bg-gray-50 rounded-3xl p-10 border-2 border-gray-200 hover:border-black transition">
                  <div className="text-6xl mb-6">{option.icon}</div>
                  <h3 className="text-3xl font-black mb-3">{option.name}</h3>
                  <p className="text-gray-600 mb-4">{option.desc}</p>
                  <div className="text-4xl font-black mb-6">{option.price}</div>
                  <ul className="space-y-3">
                    {option.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <span className="text-green-600">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conduce */}
        <section id="conduce" className="py-24 bg-gray-100">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-8">Conduce con MoveNow</h2>
                <p className="text-lg text-gray-600 mb-10">
                  Gana dinero conduciendo. Tú decides cuándo y cuánto trabajar.
                </p>
                <ul className="space-y-5 mb-10">
                  {[
                    'Tú eliges tu horario',
                    'Gana por viaje + propinas',
                    'Pagos semanales',
                    'Seguro incluido en cada viaje',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">✓</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg transition hover:bg-gray-800">
                  Comienza a conducir
                </button>
              </div>
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <div className="text-center">
                  <div className="text-8xl mb-8">💰</div>
                  <h3 className="text-3xl font-black mb-4">Gana hasta $1,500/mes</h3>
                  <p className="text-gray-600 mb-8">Conduciendo 20 horas semanales en promedio</p>
                  <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full inline-block font-semibold">
                    $15-25 por hora promedio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seguridad */}
        <section id="seguridad" className="py-24 bg-black">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Tu seguridad es primero</h2>
              <p className="text-lg text-gray-400">Viaja con confianza</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: '✅', title: 'Conductores verificados', desc: 'Todos pasan por verificación de antecedentes' },
                { icon: '📍', title: 'Monitoreo GPS', desc: 'Comparte tu viaje en tiempo real' },
                { icon: '🆘', title: 'Soporte 24/7', desc: 'Estamos aquí cuando nos necesites' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900 p-10 rounded-3xl border border-gray-800">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-white text-black">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black mb-8">¿Listo para moverte?</h2>
            <p className="text-2xl text-gray-600 mb-12">Descarga la app y recibe $5 OFF en tu primer viaje</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-black text-white px-10 py-6 rounded-2xl font-bold transition flex items-center gap-4">
                <span className="text-5xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Disponible en</div>
                  <div className="text-2xl">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-10 py-6 rounded-2xl font-bold transition flex items-center gap-4">
                <span className="text-5xl">🤖</span>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Disponible en</div>
                  <div className="text-2xl">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">🚗</div>
                <span className="text-2xl font-black">MoveNow</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                Tu app de movilidad en Punto Fijo. Viajes seguros, rápidos y accesibles.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-8">Compañía</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Carreras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-8">Legal</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Seguridad</a></li>
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
