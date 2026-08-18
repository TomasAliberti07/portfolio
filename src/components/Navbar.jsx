import React from 'react';
import { FaUser, FaFolderOpen, FaCode, FaShareAlt } from 'react-icons/fa';

const links = [
  { href: '#sobre-mi', label: 'Sobre mí', icon: <FaUser /> },
  { href: '#proyectos', label: 'Proyectos', icon: <FaFolderOpen /> },
  { href: '#tecnologias', label: 'Tecnologías', icon: <FaCode /> },
  { href: '#metodologias', label: 'Metodologías', icon: <FaCode /> },
  { href: '#redes', label: 'Redes', icon: <FaShareAlt /> }
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-pill">
        <nav className="navbar-nav" aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link">
              <span className="navbar-icon">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}