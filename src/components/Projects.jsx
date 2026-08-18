import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Trimly - SaaS de Gestión Integral',
    description: 'Plataforma integral para centros de estética y peluquerías. Integra 9 módulos y más de 40 funcionalidades para automatizar turnos, caja y gestión de clientes.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'REST API'],
    githubUrl: 'https://github.com/TomasAliberti07?tab=repositories'
  },
  {
    id: 2,
    title: 'Sistema de Gestión de Eventos',
    description: 'Aplicación web orientada a la organización, control y administración de eventos con arquitectura limpia e integración de servicios.',
    tags: ['React', 'Node.js', 'MySQL', 'Express', 'Tailwind/CSS'],
    githubUrl: 'https://github.com/TomasAliberti07?tab=repositories'
  },
  {
    id: 3,
    title: 'Calculadora de Estadística',
    description: 'Herramienta desarrollada para el cálculo automatizado de varianza, desviación estándar y distribución de frecuencias con procesamiento rápido de datos.',
    tags: ['Python', 'Librerías Matemáticas'],
    githubUrl: 'https://github.com/TomasAliberti07?tab=repositories'
  },
  {
    id: 4,
    title: 'Suite de Utilidades de Escritorio',
    description: 'Colección de aplicaciones de escritorio orientadas al procesamiento de datos, lógica algorítmica y gestión gráfica (películas, generadores y herramientas de cálculo).',
    tags: ['Python', 'Tkinter', 'POO'],
    githubUrl: 'https://github.com/TomasAliberti07?tab=repositories'
  }
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="tags-container">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <a 
          href="https://github.com/TomasAliberti07?tab=repositories" 
          target="_blank" 
          rel="noreferrer" 
          className="footer-link"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
        >
          <FaGithub />
          <span>Ver código / Repositorios</span>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="projects-section">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}