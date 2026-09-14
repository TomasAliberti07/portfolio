import React, { useState } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

import dashboardImg from '../img/dashboard.png';
import reservaImg from '../img/reserva.png';
import proveedoresImg from '../img/proveedores.png';
import numeriaImg from '../img/numeria.png';

const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Eventos (ReserveFlow)',
    description: 'Aplicación web integral desarrollada para la organización, control y administración completa de eventos. Diseñada sobre una arquitectura limpia y modular, incluye gestión de reservas, módulo de proveedores en tiempo real, métricas clave, control de salones y un ecosistema extensible con múltiples funcionalidades para la operación diaria.',
    tags: ['React', 'Node.js', 'MySQL', 'Express', 'Tailwind/CSS'],
    githubUrl: 'https://github.com/TomasAliberti07/reserveflow',
    featured: true,
    images: [
      { url: dashboardImg, alt: 'Dashboard ReserveFlow' },
      { url: reservaImg, alt: 'Gestión de Reservas' },
      { url: proveedoresImg, alt: 'Lista de Proveedores' }
    ]
  },
  {
    id: 4,
    title: 'Numeria - Gestor de Stock & Asistente IA',
    description: 'Sistema de gestión de ventas, proveedores e inventario con control de productos críticos. Integra a "Numerito AI", un asistente inteligente potenciado por la API de Gemini para consultas operacionales en tiempo real.',
    tags: ['React', 'TypeScript', 'Node.js', 'Python', 'Gemini API', 'SQL'],
    githubUrl: '', // Se agregará al estar avanzado el repositorio
    featured: true,
    images: [
      { url: numeriaImg, alt: 'Dashboard Numeria con Asistente IA' }
    ]
  },
  {
    id: 2,
    title: 'Trimly - SaaS de Gestión Integral',
    description: 'Plataforma integral para centros de estética y peluquerías. Integra 9 módulos y más de 40 funcionalidades para automatizar turnos, caja y gestión de clientes.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'REST API'],
    githubUrl: 'https://github.com/TomasAliberti07/Trimly-APP1',
    featured: false
  },
  {
    id: 3,
    title: 'Calculadora de Estadística',
    description: 'Herramienta desarrollada para el cálculo automatizado de varianza, desviación estándar y distribución de frecuencias con procesamiento rápido de datos.',
    tags: ['Python', 'Librerías Matemáticas'],
    githubUrl: 'https://github.com/TomasAliberti07/Estadistica',
    featured: false
  }
];

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="carousel-container">
      <img 
        src={images[currentIndex].url} 
        alt={images[currentIndex].alt} 
        className="carousel-image"
      />
      {images.length > 1 && (
        <>
          <button onClick={prevSlide} className="carousel-btn btn-prev" aria-label="Anterior">
            <FaChevronLeft size={13} />
          </button>
          <button onClick={nextSlide} className="carousel-btn btn-next" aria-label="Siguiente">
            <FaChevronRight size={13} />
          </button>
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <span 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  const isFeatured = project.featured;

  if (isFeatured) {
    return (
      <article className="project-card featured-project">
        <div className="featured-badge">
          <FaStar /> Proyecto Destacado
        </div>

        <div className="featured-content-grid">
          {project.images && (
            <ImageCarousel images={project.images} />
          )}

          <div className="featured-info">
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div>
              <div className="tags-container">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-footer">
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="footer-link"
                  >
                    <FaGithub />
                    <span>Ver repositorio completo</span>
                  </a>
                ) : (
                  <span className="footer-link-disabled">Repositorio en desarrollo</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="project-card">
      {project.images && project.images.length > 0 && (
        <div className="card-image-wrapper">
          <img 
            src={project.images[0].url} 
            alt={project.images[0].alt} 
            className="project-card-image" 
          />
        </div>
      )}
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div>
        <div className="tags-container">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-footer">
          {project.githubUrl ? (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="footer-link"
            >
              <FaGithub />
              <span>Ver repositorio completo</span>
            </a>
          ) : (
            <span className="footer-link-disabled">Repositorio en desarrollo</span>
          )}
        </div>
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