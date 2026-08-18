import React from 'react';

export default function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <h2>Contacto</h2>
      <div className="social-links">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Ver perfil en LinkedIn
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} · Desarrollado con React</p>
    </footer>
  );
}