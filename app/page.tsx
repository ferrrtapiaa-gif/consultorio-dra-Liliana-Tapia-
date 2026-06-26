import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b', margin: 0, padding: 0, backgroundColor: '#f8fafc', width: '100%', overflowX: 'hidden' }}>
      
      {/* 1. BARRA DE NAVEGACIÓN */}
      <nav style={{ backgroundColor: '#ffffff', padding: '20px 40px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: '800', fontSize: '1.4rem', color: '#0ea5e9', lineHeight: 1, letterSpacing: '-0.025em' }}>Dra. Liliana Tapia</span>
          <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Médica Clínica</span>
        </div>
        <div style={{ display: 'flex', gap: '25px', fontSize: '0.95rem', fontWeight: '600' }}>
          <a href="#servicios" style={{ textDecoration: 'none', color: '#475569' }}>Servicios</a>
          <a href="#contacto" style={{ textDecoration: 'none', color: '#475569' }}>Contacto</a>
        </div>
      </nav>

      {/* 2. SECCIÓN PRINCIPAL: CON TU FOTO LOCAL CONFIGURADA */}
      <header style={{ 
        position: 'relative',
        backgroundImage: "url('/consulta-presencial.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center 25%',
        backgroundRepeat: 'no-repeat',
        padding: '170px 20px', 
        textAlign: 'center',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Capa de contraste oscura para que los textos floten de manera legible */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.55)', 
          zIndex: 1
        }}></div>

        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            color: '#ffffff', 
            marginBottom: '24px', 
            lineHeight: '1.2', 
            fontWeight: '800', 
            letterSpacing: '-0.03em',
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)'
          }}>
            Tu Consulta Médica Clínica, <br />Desde la Comodidad de tu Casa
          </h1>
          <p style={{ 
            fontSize: '1.35rem', 
            color: '#f1f5f9', 
            marginBottom: '40px', 
            lineHeight: '1.6', 
            fontWeight: '500', 
            maxWidth: '720px', 
            margin: '0 auto 40px',
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.6)'
          }}>
            Atención profesional personalizada mediante videollamada. Solicita tu turno de forma online y recibe tu orden médica, recetas o seguimiento clínico sin moverte.
          </p>
          <a href="https://wa.me/541156063485" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#0ea5e9', color: '#fff', padding: '18px 45px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(14, 165, 233, 0.4)', display: 'inline-block' }}>
            Solicitar Turno Clínico
          </a>
        </div>
      </header>

      {/* 3. SECCIÓN DE SERVICIOS */}
      <section id="servicios" style={{ padding: '100px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#0f172a', fontSize: '2.25rem', marginBottom: '12px', fontWeight: '800', letterSpacing: '-0.025em' }}>
          Atención Clínica Virtual
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '60px', fontSize: '1.1rem', fontWeight: '500' }}>Servicios médicos adaptados a la modalidad online con la misma calidez de siempre.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <div style={{ backgroundColor: '#fff', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '20px', backgroundColor: '#f0f9ff', width: '70px', height: '70px', lineHeight: '70px', borderRadius: '50px', margin: '0 auto 20px' }}>💻</div>
            <h3 style={{ color: '#0f172a', marginTop: 0, fontSize: '1.35rem', fontWeight: '700' }}>Consulta por Videollamada</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>Atención médica general para diagnóstico de síntomas, lectura de laboratorios y seguimiento crónico de patologías de forma remota.</p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '20px', backgroundColor: '#f0f9ff', width: '70px', height: '70px', lineHeight: '70px', borderRadius: '50px', margin: '0 auto 20px' }}>📄</div>
            <h3 style={{ color: '#0f172a', marginTop: 0, fontSize: '1.35rem', fontWeight: '700' }}>Recetas y Órdenes</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>Confección y envío inmediato de recetas médicas digitales, solicitudes de análisis de sangre, placas u otros estudios que necesites.</p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '20px', backgroundColor: '#f0f9ff', width: '70px', height: '70px', lineHeight: '70px', borderRadius: '50px', margin: '0 auto 20px' }}>🩺</div>
            <h3 style={{ color: '#0f172a', marginTop: 0, fontSize: '1.35rem', fontWeight: '700' }}>Prevención y Control</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>Asesoramiento personalizado para el cuidado preventivo de tu salud, chequeos periódicos de rutina y cambios en hábitos saludables.</p>
          </div>

        </div>
      </section>

      {/* 4. CONTACTO E INFORMACIÓN */}
      <section id="contacto" style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '100px 20px' }}>
  <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', fontWeight: '800' }}>Información de Atención</h2>
    <p style={{ color: '#94a3b8', marginBottom: '60px', fontSize: '1.1rem' }}>Coordinemos tu próxima videollamada médica.</p>

    {/* Grid de información */}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
      gap: '20px' 
    }}>
      {[
        { title: 'Modalidad', value: '100% Virtual' },
        { title: 'Horarios', value: 'Lun - Sáb: 09:00 - 19:30' },
        { title: 'Duración', value: '20 minutos' },
        { title: 'WhatsApp', value: '+54 11 5606-3485' }
      ].map((item, index) => (
        <div 
          key={index} 
          style={{ 
            backgroundColor: '#1e293b', 
            padding: '30px 20px', 
            borderRadius: '12px',
            border: '1px solid #334155',
            transition: 'transform 0.3s ease, border-color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = '#0ea5e9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = '#334155';
          }}
        >
          <span style={{ display: 'block', color: '#38bdf8', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
            {item.title}
          </span>
          <span style={{ fontSize: '1rem', fontWeight: '500' }}>{item.value}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#090d16', color: '#64748b', textAlign: 'center', padding: '35px 20px', fontSize: '0.9rem', borderTop: '1px solid #1e293b' }}>
        © {new Date().getFullYear()} Consultorio Dra. Liliana Tapia. Todos los derechos reservados.
      </footer>

      {/* 5. BOTÓN FLOTANTE */}
      <a 
        href="https://wa.me/541156063485"
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          position: 'fixed', 
          bottom: '30px', 
          right: '30px', 
          backgroundColor: '#16a34a', 
          color: 'white', 
          borderRadius: '12px', 
          padding: '14px 24px', 
          fontWeight: '600', 
          textDecoration: 'none', 
          boxShadow: '0 8px 20px rgba(22, 163, 74, 0.25)', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          zIndex: 1000,
          fontSize: '0.95rem',
          letterSpacing: '0.02em'
        }}
      >
        <span>Atención Consultas</span>
      </a>

    </div>
  );
} 
