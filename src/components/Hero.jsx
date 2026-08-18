import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-shell">
        <div className="hero-main-column">
          <div className="hero-badge">
            <span className="hero-status-dot" />
            <span>DESARROLLADOR FULL-STACK</span>
          </div>

          <h1>Tomas Aliberti</h1>

          <p className="hero-subtitle">
            Desarrollo aplicaciones web Full-Stack con React, NestJS y bases de datos relacionales como PostgreSQL y MySQL.
            Mi prioridad es construir software con arquitectura limpia, manteniendo la simplicidad (KISS) y el código claro para garantizar que los sistemas sean escalables y fáciles de mantener en el tiempo.
          </p>

          <p className="hero-subtitle secondary-text">
            Entiendo el desarrollo como un proceso de aprendizaje continuo, donde entender el 'porqué' de cada decisión técnica es tan importante como la implementación.
          </p>
        </div>

        <aside className="hero-side-card">
          <span className="hero-side-card__eyebrow">Un poco sobre mi hobby</span>
          <h3>GameDev &amp; Lógica 2D</h3>
          <p>
            Fuera del desarrollo web, utilizo el desarrollo de videojuegos 2D como un laboratorio técnico. Exploro la lógica de sistemas, arquitecturas complejas y física personalizada, evolucionando proyectos desde Python (Pygame) hacia Godot Engine (GDScript).
          </p>
        </aside>
      </div>
    </section>
  );
}