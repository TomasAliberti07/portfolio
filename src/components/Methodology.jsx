import React from 'react';
import { FaUsers, FaTrello, FaGitAlt, FaGithub } from 'react-icons/fa';
import { FiRepeat, FiGitBranch } from 'react-icons/fi';

const methodologies = [
  {
    title: 'Metodologías',
    icon: <FaUsers />,
    badges: ['Scrum', 'Agile']
  },
  {
    title: 'Plataformas de Gestión',
    icon: <FaTrello />,
    badges: ['Jira', 'Trello']
  },
  {
    title: 'Control de Versiones',
    icon: <FaGitAlt />,
    badges: ['Git', 'GitHub']
  }
];

export default function Methodology() {
  return (
    <section id="methodology" className="methodology-section">
      <h2>Metodologías & Herramientas</h2>
      <div className="methodology-grid">
        {methodologies.map((item, index) => (
          <article key={index} className="methodology-card">
            <div className="methodology-icon-wrap">{item.icon}</div>
            <h3>{item.title}</h3>
            <div className="methodology-badges">
              {item.badges.map((badge, idx) => (
                <span key={idx} className="methodology-badge">{badge}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
