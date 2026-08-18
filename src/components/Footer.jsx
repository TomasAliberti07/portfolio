import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="redes" className="global-footer">
      <a
        href="https://www.linkedin.com/in/tom%C3%A1s-aliberti-935395269/"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>

      <a
        href="https://github.com/TomasAliberti07?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        <FaGithub />
        <span>GitHub</span>
      </a>

      <span className="footer-copy">© 2026 - Desarrollador Full-Stack</span>
    </footer>
  );
}