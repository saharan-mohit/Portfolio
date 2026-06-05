import { useEffect } from 'react'
import profileData from './data/master_profile.json'
import './index.css'

function App() {
  const { personal_info, experience, projects, skills, certifications } = profileData;

  useEffect(() => {
    document.title = `${personal_info.full_name} | Portfolio`;
  }, [personal_info]);

  // Make sure JobPortal is in the projects array! If not, let's inject it for the portfolio
  const allProjects = [...projects];
  const hasJobPortal = allProjects.some(p => p.name.includes("JobPortal"));
  if (!hasJobPortal) {
    allProjects.unshift({
      name: "JobPortal: Autonomous Sourcing & Application Pipeline",
      description: "Engineered a full-stack autonomous platform to scrape job boards, score resumes against job descriptions using Google Gemini LLM, and automatically apply to relevant jobs via Playwright.",
      technologies: ["Spring Boot WebFlux", "React", "Python", "Playwright", "Gemini API", "PostgreSQL", "R2DBC"],
      link: "https://github.com/saharan-mohit/Job-Portal",
      highlights: []
    } as any);
  }

  return (
    <>
      <section className="hero">
        <img src="/hero-bg.png" alt="background" className="hero-bg" />
        <div className="hero-content">
          <div className="hero-greeting">Hello, World. I am</div>
          <h1 className="hero-title">{personal_info.full_name}</h1>
          <h2 className="hero-subtitle">Software Product Engineer specialising in reactive microservices and AI automation.</h2>
          
          <div className="social-links">
            <a href={personal_info.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={personal_info.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${personal_info.email}`}>Email Me</a>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">{exp.start_date} - {exp.end_date}</div>
              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-company">{exp.company} | {exp.location}</div>
              <ul className="timeline-bullets">
                {exp.bullet_points.map((bp, i) => (
                  <li key={i}>{bp.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {allProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Project ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div className="skill-category" key={index}>
              <h3>{skillGroup.category}</h3>
              <div className="skill-list">
                {skillGroup.items.map((item, i) => (
                  <span className="skill-item" key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="achievements">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="achievements-grid">
          {certifications && certifications.map((cert, index) => (
            <div className="achievement-card" key={index}>
              <h3 className="achievement-title">{cert.name}</h3>
              <div className="achievement-meta">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="achievement-link">
                  View Credential ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
      
      <footer style={{textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
        <p>Built with React & Vite. Powered by master_profile.json.</p>
        <p>© {new Date().getFullYear()} {personal_info.full_name}</p>
      </footer>
    </>
  )
}

export default App
