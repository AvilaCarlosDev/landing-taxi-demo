import { useState } from 'react'

function App() {
  const [selectedService, setSelectedService] = useState('standard')

  // Imágenes reales de Unsplash - Taxi y Transporte (SOLO carros/camionetas)
  const images = {
    hero: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800https://source.unsplash.com/random/600x400/?taxi,carq=80',
    servicios: {
      standard: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800https://source.unsplash.com/random/600x400/?taxi,carq=80', // Taxi amarillo
      ejecutivo: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800https://source.unsplash.com/random/600x400/?taxi,carq=80', // Sedán negro
      van: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800https://source.unsplash.com/random/600x400/?taxi,carq=80', // Van
      aeropuerto: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800https://source.unsplash.com/random/600x400/?taxi,carq=80', // Taxi (NO avión)
    },
    flota: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800https://source.unsplash.com/random/600x400/?taxi,carq=80', // Taxi amarillo
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800https://source.unsplash.com/random/600x400/?taxi,carq=80', // Sedán
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800https://source.unsplash.com/random/600x400/?taxi,carq=80', // Van
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800https://source.unsplash.com/random/600x400/?taxi,carq=80', // Taxi ciudad
    ],
  }

  return (
    <div className="min-h-[80vh] lg:min-h-[90vh] bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-5xl shadow-lg">
                🚖
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tight">TAXI<span className="text-black">EXPRESS</span></h1>
                <p className="text-xs text-gray-800">Punto Fijo, Falcón</p>
              </div>
            </div>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-10 font-bold">
              <a href="#inicio" className="hover:text-black/70 transition">Inicio</a>
              <a href="#servicios" className="hover:text-black/70 transition">Servicios</a>
              <a href="#flota" className="hover:text-black/70 transition">Flota</a>
              <a href="#contacto" className="hover:text-black/70 transition">Contacto</a>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a href="tel:+584120000000" className="hidden lg:flex items-center gap-2 bg-black text-yellow-400 px-6 py-3 rounded-xl font-bold hover:bg-gray-900 transition">
                📞 0412-000-0000
              </a>
              <a href="https://wa.me/584120000000" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold transition transform hover:scale-105 shadow-lg">
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={images.hero} 
            alt="Taxi amarillo en la ciudad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold mb-8">
                ⚡ Disponibles 24/7 en Punto Fijo
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-none">
                TU VIAJE<br/>
                <span className="text-yellow-400">COMIENZA AQUÍ</span>
              </h2>

              <p className="text-xl text-white/90 mb-10 max-w-xl">
                Servicio de taxi seguro, rápido y confiable. 
                Llegamos donde tú estés en minutos.
              </p>

              {/* Booking Widget */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl mb-10">
                <h3 className="text-2xl font-black mb-6 text-gray-900">📍 Solicitar Taxi</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Recogida</label>
                    <input 
                      type="text" 
                      placeholder="Dirección de recogida"
                      className="w-full bg-gray-100 border-2 border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Destino</label>
                    <input 
                      type="text" 
                      placeholder="Dirección de destino"
                      className="w-full bg-gray-100 border-2 border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-400 transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Pasajeros</label>
                      <select className="w-full bg-gray-100 border-2 border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-400 transition">
                        <option>1-4</option>
                        <option>5-7</option>
                        <option>8+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Servicio</label>
                      <select className="w-full bg-gray-100 border-2 border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-yellow-400 transition">
                        <option>Standard</option>
                        <option>Ejecutivo</option>
                        <option>Van</option>
                      </select>
                    </div>
                  </div>
                  <a href="https://wa.me/584120000000" className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-5 rounded-xl font-black text-lg transition transform hover:scale-105 text-center">
                    🚖 Pedir Ahora
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400">15min</div>
                  <div className="text-white/80 text-sm">Tiempo promedio</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400">24/7</div>
                  <div className="text-white/80 text-sm">Disponibilidad</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400">100%</div>
                  <div className="text-white/80 text-sm">Seguridad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Social Proof - Stats */}
      <section className="bg-yellow-400 py-12 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-black mb-2">+10K</div>
              <div className="text-sm lg:text-base font-bold text-black/80">Viajes realizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-black mb-2">4.9★</div>
              <div className="text-sm lg:text-base font-bold text-black/80">Calificación</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-black mb-2">24/7</div>
              <div className="text-sm lg:text-base font-bold text-black/80">Disponibilidad</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-black mb-2">+500</div>
              <div className="text-sm lg:text-base font-bold text-black/80">Clientes felices</div>
            </div>
          </div>
        </div>
      </section>
      {/* Servicios */}
      <section id="servicios" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              🚖 Nuestros Servicios
            </span>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900">Elige Tu Experiencia</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'standard', name: 'Standard', desc: 'Económico y rápido', price: 'Desde $5', img: images.servicios.standard, features: ['Hasta 4 pasajeros', 'A/C', 'Radio'] },
              { id: 'ejecutivo', name: 'Ejecutivo', desc: 'Máximo confort', price: 'Desde $8', img: images.servicios.ejecutivo, features: ['Sedán premium', 'WiFi', 'Agua'] },
              { id: 'van', name: 'Van / Grupo', desc: 'Para familias', price: 'Desde $12', img: images.servicios.van, features: ['Hasta 7 pasajeros', 'Espacio extra', 'A/C'] },
              { id: 'aeropuerto', name: 'Aeropuerto', desc: 'Traslados seguros', price: 'Desde $25', img: images.servicios.aeropuerto, features: ['Puntualidad', 'Tracking', 'Maletas'] },
            ].map((servicio) => (
              <div 
                key={servicio.id}
                onClick={() => setSelectedService(servicio.id)}
                className={`cursor-pointer rounded-3xl overflow-hidden border-4 transition-all duration-300 ${
                  selectedService === servicio.id 
                    ? 'border-yellow-400 shadow-2xl scale-105' 
                    : 'border-transparent shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={servicio.img} 
                    alt={servicio.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-black mb-2">{servicio.name}</h3>
                  <p className="text-gray-500 mb-4">{servicio.desc}</p>
                  <div className="text-3xl font-black text-yellow-600 mb-4">{servicio.price}</div>
                  <ul className="space-y-2">
                    {servicio.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flota */}
      <section id="flota" className="py-24 px-6 lg:px-12 bg-gray-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-black text-white px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              🚗 Nuestra Flota
            </span>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900">Vehículos Modernos</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.flota.map((img, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src={img} 
                    alt={`Vehículo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-7xl mb-8 block">💬</span>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">Pide por WhatsApp</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Respuesta inmediata. Envía tu ubicación y llegamos en minutos.
          </p>
          <a href="https://wa.me/584120000000" className="inline-block bg-white hover:bg-gray-100 text-green-600 px-12 py-5 rounded-xl font-black text-lg transition transform hover:scale-105 shadow-2xl">
            📱 +58 412-000-0000
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-16 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center text-3xl">🚖</div>
                <div>
                  <h3 className="text-2xl font-black">TAXI<span className="text-yellow-400">EXPRESS</span></h3>
                  <p className="text-xs text-gray-400">Punto Fijo, Falcón</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Servicio de taxi confiable las 24 horas. Seguridad, puntualidad y confort en cada viaje.
              </p>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6">Servicios</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition">Standard</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Ejecutivo</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Van / Grupo</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Aeropuerto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6">Contacto</h4>
              <ul className="space-y-4 text-gray-400">
                <li>📞 0412-000-0000</li>
                <li>📱 WhatsApp disponible</li>
                <li>📍 Punto Fijo, Falcón</li>
                <li>🕒 24/7 todos los días</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2026 TaxiExpress. Hecho con 💚 por Carlos Ávila
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
