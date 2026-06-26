import React from 'react';

// Estilos centralizados: Cambias algo aquí y se aplica a toda la web
const theme = {
  primary: '#0ea5e9',
  cardShadow: '0 10px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.1)',
  textMain: '#0f172a',
  textSub: '#64748b'
};

export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: theme.textMain, backgroundColor: '#f8fafc', overflowX: 'hidden' }}>
      
      {/* 1. NAVEGACIÓN */}
      <nav style={{ backgroundColor: '#ffffff', padding: '20px 40px', boxShadow: '0 2px 5px rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: '800', fontSize: '1.4rem', color: theme.primary, lineHeight: 1 }}>Dra. Liliana Tapia</span>
        </div>
        <div style={{ display: 'flex', gap: '25px', fontWeight: '600' }}>
          <a href="#servicios" style={{ textDecoration: 'none', color: theme.textSub }}>Servicios</a>
          <a href="#contacto" style={{ textDecoration: 'none', color: theme.textSub }}>Contacto</a>
        </div>
      </nav>

      {/* 2. HEADER */}
      <header style={{ position: 'relative', backgroundImage: "url('/consulta-presencial.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '120px 20px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.7)' }}></div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', color: 'white' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: 1.1 }}>Tu Consulta Médica a un clic</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '40px', color: '#e2e8f0' }}>Atención profesional personalizada mediante videollamada. Calidez, diagnóstico y seguimiento remoto.</p>
          <a href="https://wa.me/541156063485" style={{ backgroundColor: theme.primary, color: 'white', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>Solicitar Turno</a>
        </div>
      </header>

      {/* 3. SERVICIOS PROLIJOS */}
      <section id="servicios" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.25rem', marginBottom: '50px' }}>Atención Clínica Virtual</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {[
            { icon: '💻', title: 'Consulta Videollamada', desc: 'Atención general, diagnóstico y seguimiento remoto.' },
            { icon: '📄', title: 'Recetas y Órdenes', desc: 'Envío inmediato de recetas y pedidos de estudios.' },
            { icon: '🩺', title: 'Prevención y Control', desc: 'Asesoramiento para cuidado preventivo y rutina.' },
            { icon: '🗂️', title: 'Fichas Médicas', desc: 'Información de salud al día y organizada.' },
            { icon: '📄', title: 'Certificados', desc: 'Emisión digital para trámites laborales o escolares.' }
          ].map((s, i) => (
            <div key={i} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: theme.cardShadow, border: '1px solid #f1f5f9', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{s.icon}</div>
              <h3 style={{ marginBottom: '15px' }}>{s.title}</h3>
              <p style={{ color: theme.textSub, lineHeight: 1.6, fontSize: '0.95rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', textAlign: 'center', padding: '40px' }}>
        © {new Date().getFullYear()} Dra. Liliana Tapia - Atención Virtual Profesional
      </footer>
    </div>
  );
}