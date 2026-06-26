import React from 'react';

// 1. Estilos centralizados para mantener el orden
const styles = {
  container: { fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b', backgroundColor: '#f8fafc' },
  section: { padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' },
  card: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0',
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '15px'
  }
};

// 2. Componente de tarjeta para no repetir código
const ServiceCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div style={styles.card}>
    <div style={{ fontSize: '2.5rem', backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '50%' }}>{icon}</div>
    <h3 style={{ fontSize: '1.35rem', fontWeight: '700', margin: 0 }}>{title}</h3>
    <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>{description}</p>
  </div>
);

export default function Home() {
  return (
    <div style={styles.container}>
      
      {/* SECCIÓN DE SERVICIOS - Ahora se ve limpia y legible */}
      <section id="servicios" style={styles.section}>
        <h2 style={{ textAlign: 'center', fontSize: '2.25rem', marginBottom: '12px', fontWeight: '800' }}>
          Atención Clínica Virtual
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '60px' }}>
          Servicios médicos adaptados a la modalidad online con la misma calidez de siempre.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          <ServiceCard icon="💻" title="Consulta por Videollamada" description="Atención médica general para diagnóstico de síntomas y seguimiento remoto." />
          <ServiceCard icon="📄" title="Recetas y Órdenes" description="Confección y envío inmediato de recetas y solicitudes de estudios." />
          <ServiceCard icon="🩺" title="Prevención y Control" description="Asesoramiento personalizado para el cuidado preventivo de tu salud." />
          <ServiceCard icon="🗂️" title="Fichas Médicas" description="Realizamos fichas médicas completas y personalizadas para tu salud." />
          <ServiceCard icon="📄" title="Certificados" description="Emisión rápida de certificados médicos digitales para trámites." />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#090d16', color: '#64748b', textAlign: 'center', padding: '40px' }}>
        © {new Date().getFullYear()} Consultorio Dra. Liliana Tapia. Todos los derechos reservados.
      </footer>
    </div>
  );
}