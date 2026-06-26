export default function Home() {
  return (
    <main>
      {/* SECCIÓN DE SERVICIOS - Todo lo que necesitas está aquí */}
      <section id="servicios" style={{ padding: '100px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#0f172a', fontSize: '2.25rem', marginBottom: '12px', fontWeight: '800' }}>
          Atención Clínica Virtual
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '60px', fontSize: '1.1rem', fontWeight: '500' }}>
          Servicios médicos adaptados a la modalidad online con la misma calidez de siempre.
        </p>

        {/* CONTENEDOR DE TARJETAS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          
          <div style={{ backgroundColor: '#fff', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', textAlign: 'center', width: '300px' }}>
            <h3 style={{ color: '#0f172a', fontSize: '1.35rem', fontWeight: '700' }}>Consulta por Videollamada</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>Atención médica general para diagnóstico de síntomas, lectura de laboratorios y seguimiento crónico de patologías de forma remota.</p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', textAlign: 'center', width: '300px' }}>
            <h3 style={{ color: '#0f172a', fontSize: '1.35rem', fontWeight: '700' }}>Recetas y Órdenes</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>Confección y envío inmediato de recetas médicas digitales, solicitudes de análisis de sangre, placas u otros estudios que necesites.</p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', textAlign: 'center', width: '300px' }}>
            <h3 style={{ color: '#0f172a', fontSize: '1.35rem', fontWeight: '700' }}>Prevención y Control</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>Asesoramiento personalizado para el cuidado preventivo de tu salud, chequeos periódicos de rutina y cambios en hábitos saludables.</p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', textAlign: 'center', width: '300px' }}>
            <h3 style={{ color: '#0f172a', fontSize: '1.35rem', fontWeight: '700' }}>Fichas Médicas</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>Realizamos fichas médicas completas y personalizadas para que tengas toda tu información de salud al día.</p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #e2e8f0', textAlign: 'center', width: '300px' }}>
            <h3 style={{ color: '#0f172a', fontSize: '1.35rem', fontWeight: '700' }}>Certificados</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>Emisión rápida de certificados médicos digitales para trámites laborales, escolares o deportivos.</p>
          </div>

        </div>
      </section>
    </main>
  );
}