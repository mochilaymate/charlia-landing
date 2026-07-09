'use client';

import { MessageCircle, Clock, Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const PRIMARY_COLOR = '#6c44fc';
const PRIMARY_DARK = '#5a35d8';
const BORDER_COLOR = 'rgba(108, 68, 252, 0.2)';
const BG_COLOR = 'rgba(108, 68, 252, 0.05)';
const BG_HOVER = 'rgba(108, 68, 252, 0.1)';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur" style={{borderBottom: `1px solid ${BORDER_COLOR}`}}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tight">charlia</div>
          <a href="#contact" className="px-6 py-2 rounded text-sm font-medium transition text-white" style={{backgroundColor: PRIMARY_COLOR}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_DARK} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_COLOR}>
            Contactar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-b from-black via-black to-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-7xl md:text-8xl font-serif font-bold tracking-tight leading-tight">
            Tu mejor <span style={{color: PRIMARY_COLOR}}>compañero</span> en WhatsApp
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Mientras tu agente atiende conversaciones, responde consultas y califica clientes, tú te concentras en crecer tu negocio. 24/7, sin distracciones.
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <a href="#contact" className="px-8 py-3 rounded font-medium transition text-white" style={{backgroundColor: PRIMARY_COLOR}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = PRIMARY_DARK} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = PRIMARY_COLOR}>
              Solicitar propuesta
            </a>
            <a href="#how" className="px-8 py-3 rounded font-medium transition text-white" style={{border: `2px solid ${PRIMARY_COLOR}`, backgroundColor: 'transparent'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = BG_COLOR} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              Cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 px-6 bg-black" style={{borderTop: `1px solid ${BORDER_COLOR}`}}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-16 text-center">Lo que logras</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg transition" style={{border: `1px solid ${BORDER_COLOR}`, backgroundColor: BG_COLOR}}>
              <CheckCircle className="w-8 h-8 mb-4" style={{color: PRIMARY_COLOR}} />
              <h3 className="text-xl font-bold mb-3">Libera tu tiempo</h3>
              <p className="text-gray-300">No más responder mensajes repetitivos. Tu agente maneja todo mientras tú te enfocas en lo que importa.</p>
            </div>

            <div className="p-8 rounded-lg transition" style={{border: `1px solid ${BORDER_COLOR}`, backgroundColor: BG_COLOR}}>
              <Clock className="w-8 h-8 mb-4" style={{color: PRIMARY_COLOR}} />
              <h3 className="text-xl font-bold mb-3">Disponibilidad 24/7</h3>
              <p className="text-gray-300">Tus clientes reciben respuesta inmediata a cualquier hora. Nunca pierdes un cliente por esperar una respuesta tuya.</p>
            </div>

            <div className="p-8 rounded-lg transition" style={{border: `1px solid ${BORDER_COLOR}`, backgroundColor: BG_COLOR}}>
              <Users className="w-8 h-8 mb-4" style={{color: PRIMARY_COLOR}} />
              <h3 className="text-xl font-bold mb-3">Mejora la experiencia</h3>
              <p className="text-gray-300">Respuestas personalizadas, rápidas y consistentes. Tus clientes reciben atención de calidad siempre.</p>
            </div>
          </div>

          <div className="mt-16 p-12 rounded-lg" style={{backgroundImage: `linear-gradient(to bottom right, ${BG_COLOR}, rgba(0,0,0,0))`, border: `1px solid ${BORDER_COLOR}`}}>
            <h3 className="text-3xl font-bold mb-6">Tu agente puede:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="font-bold flex-shrink-0" style={{color: PRIMARY_COLOR}}>✓</span>
                  <span>Responder preguntas frecuentes al instante</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold flex-shrink-0" style={{color: PRIMARY_COLOR}}>✓</span>
                  <span>Calificar clientes automáticamente</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold flex-shrink-0" style={{color: PRIMARY_COLOR}}>✓</span>
                  <span>Agendar citas en tu calendario</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold flex-shrink-0" style={{color: PRIMARY_COLOR}}>✓</span>
                  <span>Recopilar información de clientes</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="font-bold flex-shrink-0" style={{color: PRIMARY_COLOR}}>✓</span>
                  <span>Dar recomendaciones de productos</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold flex-shrink-0" style={{color: PRIMARY_COLOR}}>✓</span>
                  <span>Integrar con tu CRM</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold flex-shrink-0" style={{color: PRIMARY_COLOR}}>✓</span>
                  <span>Derivar casos complejos a ti</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-bold flex-shrink-0" style={{color: PRIMARY_COLOR}}>✓</span>
                  <span>Y mucho más, personalizado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-6 bg-black" style={{borderTop: `1px solid ${BORDER_COLOR}`}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-16 text-center">Cómo funciona</h2>

          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="text-4xl font-bold flex-shrink-0 w-16" style={{color: PRIMARY_COLOR}}>1</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Ponte en contacto con nosotros</h3>
                <p className="text-gray-300">Cuéntanos sobre tu negocio, qué quieres automatizar y cuáles son tus desafíos. Completa el formulario o envíanos un mensaje.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="text-4xl font-bold flex-shrink-0 w-16" style={{color: PRIMARY_COLOR}}>2</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Te configuramos todo</h3>
                <p className="text-gray-300">Creamos un agente personalizado de acuerdo a lo que necesitas. Adaptamos la tonalidad, los flujos y las integraciones a tu negocio específico.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="text-4xl font-bold flex-shrink-0 w-16" style={{color: PRIMARY_COLOR}}>3</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Lo pruebas y activas</h3>
                <p className="text-gray-300">Prueba el agente sin compromisos. Si todo está bien, lo activamos en tu número de WhatsApp. Empiezas a verlo trabajar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 bg-black" style={{borderTop: `1px solid ${BORDER_COLOR}`}}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-4 text-center">Tu mejor aliado espera</h2>
          <p className="text-xl text-gray-300 text-center mb-12">Completa el formulario lo más detallado posible o ponte en contacto con nosotros y comienza a disfrutar de tu mejor aliado.</p>

          {formSubmitted ? (
            <div className="p-8 rounded-lg text-center" style={{backgroundColor: BG_COLOR, border: `1px solid ${PRIMARY_COLOR}`}}>
              <h3 className="text-2xl font-bold mb-2">¡Gracias por tu solicitud!</h3>
              <p className="text-gray-300">Recibiremos tu información y te enviaremos una propuesta personalizada muy pronto. Si te interesa, recibirás un WhatsApp con el precio estimativo.</p>
            </div>
          ) : (
            <form
              action="/api/contact"
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                setFormLoading(true);
                setFormError('');
                fetch('/api/contact', {
                  method: 'POST',
                  body: new FormData(e.currentTarget),
                })
                  .then(res => {
                    if (!res.ok) throw new Error('Error al enviar');
                    setFormSubmitted(true);
                  })
                  .catch(() => {
                    setFormError('No pudimos enviar tu solicitud. Intenta escribirnos al WhatsApp +34 611 028 477');
                  })
                  .finally(() => setFormLoading(false));
              }}
              className="space-y-6 bg-black p-8 rounded-lg"
              style={{border: `1px solid ${BORDER_COLOR}`}}
            >
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input type="text" name="name" required className="w-full px-4 py-2 rounded text-white placeholder-gray-500" style={{backgroundColor: BG_COLOR, border: `1px solid ${BORDER_COLOR}`}} placeholder="Tu nombre" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2 rounded text-white placeholder-gray-500" style={{backgroundColor: BG_COLOR, border: `1px solid ${BORDER_COLOR}`}} placeholder="tu@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Número de WhatsApp</label>
                <input type="tel" name="phone" required className="w-full px-4 py-2 rounded text-white placeholder-gray-500" style={{backgroundColor: BG_COLOR, border: `1px solid ${BORDER_COLOR}`}} placeholder="+54 9 1234567890" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">¿Cuál es tu negocio?</label>
                <input type="text" name="business" required className="w-full px-4 py-2 rounded text-white placeholder-gray-500" style={{backgroundColor: BG_COLOR, border: `1px solid ${BORDER_COLOR}`}} placeholder="Ej: Agencia de marketing, e-commerce, consultorio, etc." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">¿Qué quieres automatizar en WhatsApp?</label>
                <textarea name="automateGoals" required rows={3} className="w-full px-4 py-2 rounded text-white placeholder-gray-500" style={{backgroundColor: BG_COLOR, border: `1px solid ${BORDER_COLOR}`}} placeholder="Ej: Atender consultas de clientes, agendar citas, calificar clientes automáticamente..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">¿Cuáles son tus principales desafíos?</label>
                <textarea name="challenges" required rows={3} className="w-full px-4 py-2 rounded text-white placeholder-gray-500" style={{backgroundColor: BG_COLOR, border: `1px solid ${BORDER_COLOR}`}} placeholder="Ej: No tengo tiempo para responder, pierdo clientes, etc." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">¿Tienes un CRM? ¿Cuál?</label>
                <input type="text" name="crm" className="w-full px-4 py-2 rounded text-white placeholder-gray-500" style={{backgroundColor: BG_COLOR, border: `1px solid ${BORDER_COLOR}`}} placeholder="Ej: HighLevel, Salesforce, Google Sheets, etc. (opcional)" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cuéntanos más</label>
                <textarea name="additional" rows={3} className="w-full px-4 py-2 rounded text-white placeholder-gray-500" style={{backgroundColor: BG_COLOR, border: `1px solid ${BORDER_COLOR}`}} placeholder="Cualquier detalle adicional que creas importante..." />
              </div>

              <button type="submit" disabled={formLoading} className="w-full px-8 py-3 rounded font-medium transition text-lg text-white disabled:opacity-50" style={{backgroundColor: formLoading ? PRIMARY_DARK : PRIMARY_COLOR}} onMouseEnter={(e) => !formLoading && (e.currentTarget.style.backgroundColor = PRIMARY_DARK)} onMouseLeave={(e) => !formLoading && (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}>
                {formLoading ? 'Enviando...' : 'Enviar solicitud'}
              </button>

              {formError && (
                <div className="p-4 rounded text-sm" style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444'}}>
                  {formError}
                </div>
              )}

              <p className="text-center text-sm text-gray-400">También puedes escribirnos a <span className="font-medium">charlia.agency@gmail.com</span> o por WhatsApp a <span className="font-medium">+34 611 028 477</span></p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/50" style={{borderTop: `1px solid ${BORDER_COLOR}`}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-3">Charlia Agency</h3>
              <p className="text-sm text-gray-400">Tu mejor aliado en WhatsApp.</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Contacto</h3>
              <p className="text-sm text-gray-400">
                Email: <a href="mailto:charlia.agency@gmail.com" className="hover:text-white transition">charlia.agency@gmail.com</a>
              </p>
              <p className="text-sm text-gray-400">
                WhatsApp: <a href="https://wa.me/34611028477" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">+34 611 028 477</a>
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Legal</h3>
              <p className="text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">Privacidad</a> · <a href="#" className="hover:text-white transition">Términos</a>
              </p>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-gray-400 text-sm" style={{borderColor: BORDER_COLOR}}>
            <p>© 2026 Charlia Agency. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
