import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaDatabase, FaCode, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiPython, SiPostgresql, SiMysql, SiTailwindcss, SiGithubcopilot, SiClaude, SiGooglegemini, SiJira, SiTrello } from 'react-icons/si';
import { LuRotateCw } from 'react-icons/lu';

export default function TechStack() {
  const technologies = [
    { name: 'React', icon: <FaReact /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'JavaScript (ES6+)', icon: <FaJsSquare /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'NestJS', icon: <SiNestjs /> },
    { name: 'C#', icon: <FaCode /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'REST APIs', icon: <FaDatabase /> }
  ];

  const assistants = [
    { name: 'GitHub Copilot', icon: <SiGithubcopilot /> },
    { name: 'Claude', icon: <SiClaude /> },
    { name: 'Gemini', icon: <SiGooglegemini /> }
  ];

  const tools = [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Jira', icon: <SiJira /> },
    { name: 'Trello', icon: <SiTrello /> },
    { name: 'Scrum', icon: <LuRotateCw /> }
  ];

  return (
    <section id="tecnologias" className="tech-section">
      <h2>Tecnologías</h2>
      <div className="tech-grid">
        {technologies.map((tech, i) => (
          <div key={i} className="tech-card">
            <span className="tech-icon">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>

      <h3 className="tech-subtitle">Asistentes de IA</h3>
      <div className="tech-grid assistants-grid">
        {assistants.map((assistant, i) => (
          <div key={i} className="tech-card assistant-card">
            <span className="tech-icon">{assistant.icon}</span>
            <span>{assistant.name}</span>
          </div>
        ))}
      </div>

      <div id="metodologias" className="methodologies-block">
        <h3 className="tech-subtitle">Herramientas & Metodologías</h3>
        <div className="methods-row">
          {tools.map((tool, i) => (
            <div key={i} className="tech-card tool-card">
              <span className="tech-icon tool-icon">{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}