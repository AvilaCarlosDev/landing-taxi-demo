import { useMemo, useState } from 'react'

const WHATSAPP_URL = 'https://wa.me/584120000000'

const rideTypes = [
  {
    name: 'Moto',
    tagline: 'Rápido y económico',
    price: 'Desde $2',
    time: '3-6 min',
    image: '/img/foto-1558981806ec52.jpg',
    features: ['Ideal para tráfico', 'Casco incluido', 'Viajes cortos'],
  },
  {
    name: 'Auto',
    tagline: 'Comodidad diaria',
    price: 'Desde $4',
    time: '4-8 min',
    image: '/img/sedan.jpg',
    features: ['Aire acondicionado', 'Conductores verificados', 'Pago móvil o efectivo'],
    featured: true,
  },
  {
    name: 'Confort',
    tagline: 'Traslados premium',
    price: 'Desde $7',
    time: '6-10 min',
    image: '/img/foto-15637202231851.jpg',
    features: ['Vehículos ejecutivos', 'Reservas programadas', 'Atención prioritaria'],
  },
]

const services = [
  {
    title: 'Taxi urbano',
    desc: 'Traslados dentro de Punto Fijo, Judibana, Puerta Maraven y zonas cercanas.',
    icon: '↗',
  },
  {
    title: 'Aeropuerto',
    desc: 'Recogida y salida desde Las Piedras con seguimiento de horario y equipaje.',
    icon: '✈',
  },
  {
    title: 'Empresas',
    desc: 'Rutas corporativas, personal de guardia, visitas comerciales y traslados recurrentes.',
    icon: '◆',
  },
  {
    title: 'Encomiendas express',
    desc: 'Documentos, compras pequeñas y entregas rápidas con confirmación por WhatsApp.',
    icon: '●',
  },
]

const zones = [
  ['Centro Punto Fijo', '$4'],
  ['Las Virtudes', '$5'],
  ['Judibana', '$8'],
  ['Puerta Maraven', '$7'],
  ['Aeropuerto Las Piedras', '$12'],
]

const drivers = [
  {
    name: 'Luis Medina',
    role: 'Conductor Confort',
    rating: '4.98',
    trips: '3.240 viajes',
    image: '/img/foto-15602500970b93.jpg',
  },
  {
    name: 'María Rivas',
    role: 'Taxi urbano',
    rating: '4.96',
    trips: '2.870 viajes',
    image: '/img/foto-1494790108377b.jpg',
  },
  {
    name: 'Carlos Vera',
    role: 'Moto express',
    rating: '4.94',
    trips: '4.110 viajes',
    image: '/img/foto-15006487677910.jpg',
  },
]

const stats = [
  ['12k+', 'viajes completados'],
  ['4.9★', 'valoración media'],
  ['24/7', 'soporte activo'],
]

function App() {
  const [activeRide, setActiveRide] = useState('Auto')
  const selectedRide = useMemo(() => rideTypes.find((ride) => ride.name === activeRide) || rideTypes[1], [activeRide])

  return (
    <div className="min-h-screen bg-[#f6f1e7] text-zinc-950 antialiased">
      <div className="bg-zinc-950 text-xs font-black uppercase tracking-[0.18em] text-amber-200/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-3 md:justify-between">
          <span>Transporte 24/7 en Punto Fijo</span>
          <span>Conductores verificados</span>
          <span>Reservas por WhatsApp</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f1e7]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="RutaFija Black inicio">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-950 text-lg font-black text-amber-300 shadow-xl shadow-black/10">RF</span>
            <span>
              <span className="block text-xl font-black tracking-tight">RutaFija Black</span>
              <span className="block text-xs font-black uppercase tracking-[0.18em] text-zinc-500">Taxi & transfer</span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-7 text-sm font-black text-zinc-600 lg:flex">
            <a href="#servicios" className="transition hover:text-zinc-950">Servicios</a>
            <a href="#tarifas" className="transition hover:text-zinc-950">Tarifas</a>
            <a href="#conductores" className="transition hover:text-zinc-950">Conductores</a>
            <a href="#empresas" className="transition hover:text-zinc-950">Empresas</a>
          </nav>

          <a href={WHATSAPP_URL} className="ml-auto rounded-full bg-zinc-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-black/10 transition hover:bg-amber-400 hover:text-zinc-950 lg:ml-0">
            Pedir taxi
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-zinc-950 text-white">
          <img
            src="/img/foto-1490650404312a.jpg"
            alt="Taxi en ciudad de noche"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-34"
          />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(251,191,36,.34),transparent_25%),linear-gradient(115deg,#09090b_0%,rgba(9,9,11,.96)_46%,rgba(39,39,42,.45)_100%)]" />
          <div className="mx-auto grid min-h-[740px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div className="max-w-3xl pt-8">
              <div className="mb-7 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-amber-200 backdrop-blur">
                Servicio demo premium · Punto Fijo
              </div>
              <h1 className="text-balance text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Transporte confiable con experiencia ejecutiva
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                Taxis urbanos, motos rápidas, traslados al aeropuerto y rutas corporativas con conductores verificados, tarifas claras y atención directa por WhatsApp.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={WHATSAPP_URL} className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-4 text-base font-black text-zinc-950 shadow-2xl shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-white">
                  Reservar ahora
                </a>
                <a href="#tarifas" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white/15">
                  Ver tarifas
                </a>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl">
                {stats.map(([value, label]) => (
                  <div key={label} className="border-r border-white/10 p-5 last:border-r-0">
                    <strong className="block text-2xl font-black">{value}</strong>
                    <span className="text-[11px] font-black uppercase tracking-wide text-white/45">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2.25rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[1.75rem] bg-[#f6f1e7] p-5 text-zinc-950">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">Cotizador rápido</p>
                    <h2 className="mt-1 text-2xl font-black tracking-tight">¿A dónde vamos?</h2>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">4 min</span>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <input className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-zinc-400" placeholder="Origen: Av. Jacinto Lara" />
                  </label>
                  <label className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-zinc-950" />
                    <input className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-zinc-400" placeholder="Destino: Aeropuerto Las Piedras" />
                  </label>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {rideTypes.map((ride) => (
                    <button
                      key={ride.name}
                      onClick={() => setActiveRide(ride.name)}
                      className={`rounded-2xl border p-3 text-left transition ${activeRide === ride.name ? 'border-zinc-950 bg-zinc-950 text-white' : 'border-zinc-200 bg-white hover:border-amber-400'}`}
                    >
                      <span className="block text-sm font-black">{ride.name}</span>
                      <span className="mt-1 block text-[11px] font-bold opacity-60">{ride.time}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white">
                  <img src={selectedRide.image} alt={selectedRide.name} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-400">{selectedRide.tagline}</p>
                        <h3 className="mt-1 text-2xl font-black">{selectedRide.name}</h3>
                      </div>
                      <strong className="text-2xl font-black">{selectedRide.price}</strong>
                    </div>
                    <a href={WHATSAPP_URL} className="mt-5 inline-flex w-full justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-zinc-950 hover:text-white">
                      Solicitar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-700">Servicios principales</p>
                <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Una landing que parece lista para vender transporte real</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-zinc-600">Información ficticia, pero estructurada como producto final para un cliente de movilidad local.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {services.map((service) => (
                <article key={service.title} className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10">
                  <span className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-zinc-950 text-xl font-black text-amber-300">{service.icon}</span>
                  <h3 className="text-xl font-black tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tarifas" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-700">Opciones y tarifas</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Elige cómo moverte</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {rideTypes.map((ride) => (
                <article key={ride.name} className={`relative overflow-hidden rounded-[2rem] border bg-white shadow-sm ${ride.featured ? 'border-zinc-950 shadow-2xl shadow-black/10' : 'border-zinc-200'}`}>
                  {ride.featured && <span className="absolute left-5 top-5 z-10 rounded-full bg-amber-300 px-4 py-2 text-xs font-black uppercase tracking-wide text-zinc-950">Más solicitado</span>}
                  <img src={ride.image} alt={ride.name} className="h-56 w-full object-cover" />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-400">{ride.tagline}</p>
                        <h3 className="mt-1 text-3xl font-black">{ride.name}</h3>
                      </div>
                      <strong className="text-2xl font-black">{ride.price}</strong>
                    </div>
                    <ul className="mt-6 space-y-3 text-sm font-semibold text-zinc-600">
                      {ride.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
                    </ul>
                    <a href={WHATSAPP_URL} className="mt-7 inline-flex w-full justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-black text-white transition hover:bg-amber-300 hover:text-zinc-950">
                      Elegir {ride.name}
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-zinc-200 bg-[#f6f1e7]">
              <div className="grid gap-0 md:grid-cols-[.9fr_1.1fr]">
                <div className="p-8 lg:p-10">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-700">Tarifas referenciales</p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight">Rutas frecuentes</h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-600">Precios ficticios para demo. En un cliente real se conectan a WhatsApp, CRM o calculadora dinámica.</p>
                </div>
                <div className="divide-y divide-zinc-200 bg-white">
                  {zones.map(([zone, price]) => (
                    <div key={zone} className="flex items-center justify-between gap-4 px-6 py-4">
                      <span className="font-bold text-zinc-700">{zone}</span>
                      <strong className="text-xl font-black">{price}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="conductores" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-700">Equipo verificado</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Conductores que generan confianza</h2>
              </div>
              <a href={WHATSAPP_URL} className="inline-flex w-fit rounded-full border border-zinc-300 px-6 py-3 text-sm font-black text-zinc-800 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white">
                Unirme como conductor
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {drivers.map((driver) => (
                <article key={driver.name} className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
                  <img src={driver.image} alt={driver.name} className="h-72 w-full object-cover" />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-black">{driver.name}</h3>
                        <p className="mt-1 text-sm font-bold text-zinc-500">{driver.role}</p>
                      </div>
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-amber-800">★ {driver.rating}</span>
                    </div>
                    <p className="mt-5 text-sm font-semibold text-zinc-500">{driver.trips} completados con historial verificado.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="empresas" className="bg-zinc-950 px-5 py-24 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] lg:grid-cols-[1fr_1fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-200">Soluciones corporativas</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Rutas para equipos, hoteles, clínicas y comercios</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">Contratos mensuales ficticios para empresas que necesitan traslados recurrentes, reportes, facturación y prioridad de unidades.</p>
              <div className="mt-9 grid gap-3 text-sm font-semibold text-white/70 sm:grid-cols-2">
                <span>✓ Reporte semanal de viajes</span>
                <span>✓ Conductores asignados</span>
                <span>✓ Tarifas por zona</span>
                <span>✓ Atención prioritaria</span>
              </div>
              <a href={WHATSAPP_URL} className="mt-9 inline-flex rounded-full bg-amber-300 px-7 py-4 text-sm font-black text-zinc-950 transition hover:bg-white">
                Solicitar propuesta
              </a>
            </div>
            <div className="relative min-h-[420px]">
              <img src="/img/foto-15686051170365.jpg" alt="Vehículo ejecutivo" className="absolute inset-0 h-full w-full object-cover opacity-72" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f6f1e7] py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-950 text-sm font-black text-amber-300">RF</span>
              <div>
                <span className="block text-lg font-black">RutaFija Black</span>
                <span className="text-xs font-semibold text-zinc-500">Taxi & transfer demo</span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">Landing ficticia para servicio de transporte con taxis, motos, confort, aeropuerto, empresas y encomiendas express.</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Servicios</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-zinc-500">
              <li><a href="#servicios" className="hover:text-zinc-950">Taxi urbano</a></li>
              <li><a href="#servicios" className="hover:text-zinc-950">Aeropuerto</a></li>
              <li><a href="#empresas" className="hover:text-zinc-950">Empresas</a></li>
              <li><a href="#tarifas" className="hover:text-zinc-950">Tarifas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Contacto</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-zinc-500">
              <li>Punto Fijo, Falcón</li>
              <li><a href={WHATSAPP_URL} className="hover:text-zinc-950">WhatsApp: +58 412-000-0000</a></li>
              <li>Atención 24/7</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-black/5 px-5 pt-7 text-center text-xs font-semibold text-zinc-400 lg:px-8">
          © 2026 RutaFija Black. Demo creada por Carlos Avila - Developer 🇻🇪
        </div>
      </footer>
    </div>
  )
}

export default App
