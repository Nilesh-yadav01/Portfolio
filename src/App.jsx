import "./App.css";
import profile from "./assets/Nilesh.jpeg";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Mac Secure Space Website",
    category: "Website Development",
    description:
      "A professional company website focused on presenting services, company information and a responsive user experience.",
    tech: ["React", "CSS", "JavaScript"],
    link: "",
  },
  {
    number: "02",
    title: "Library Management System",
    category: "Full Stack Project",
    description:
      "A library management project concept for organizing book records, managing library information and improving record handling.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "",
  },
  {
    number: "03",
    title: "Todo Application",
    category: "Frontend Project",
    description:
      "A task management application concept to organize daily tasks with a simple and clean interface.",
    tech: ["React", "CSS", "JavaScript"],
    link: "",
  },
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          Nilesh kumar<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              FULL STACK DEVELOPER
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Nilesh Kumar
              <br />
              <span>Yadav.</span>
            </h1>

            <p className="hero-description">
              I build modern, responsive websites and web
              applications using React, Node.js and MongoDB.
              I enjoy learning new technologies and turning
              ideas into useful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="btn btn-outline">
                Let's Connect
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>03+</strong>
                <span>Project Ideas</span>
              </div>
              <div>
                <strong>08</strong>
                <span>Core Skills</span>
              </div>
              <div>
                <strong>BCA</strong>
                <span>Education</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>

            <div className="profile-card">
              <div className="profile-top">
                <span>DEVELOPER PROFILE</span>
                <span className="profile-dot">●</span>
              </div>

              <div className="avatar">
              <img src={profile} alt="My Profile" />
              </div>

              <h2>Nilesh Yadav</h2>
              <p>Full Stack Developer</p>

              <div className="code-window">
                <div className="code-header">
                  <span></span>
                  <span></span>
                  <span></span>
                  <small>developer.js</small>
                </div>

                <pre>
                  <code>
                    <span className="code-purple">const</span> developer = {"{"}
                    {"\n"}  name: <span className="code-green">"Nilesh"</span>,
                    {"\n"}  passion: <span className="code-green">"Web Dev"</span>,
                    {"\n"}  learning: <span className="code-green">"Every day"</span>
                    {"\n"}{"}"};
                  </code>
                </pre>
              </div>

              <div className="floating-tag tag-react">
                ⚛ React.js
              </div>
              <div className="floating-tag tag-node">
                ◈ Node.js
              </div>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>
              About <span>Me.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-mark">NY<span>.</span></div>

            <div className="about-text">
              <h3>Building my future, one project at a time.</h3>
              <p>
                I'm Nilesh Kumar Yadav, a Bachelor of Computer
                Applications (BCA) student interested in full
                stack web development. I work on improving my
                practical skills by building websites and
                learning modern web technologies.
              </p>
              <p>
                My goal is to create user-friendly web
                applications, strengthen my development skills
                and grow as a software developer.
              </p>

              <div className="education">
                <span>EDUCATION</span>
                <strong>Bachelor of Computer Applications</strong>
                <small>Final year — pursuing</small>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>
              My <span>Skills.</span>
            </h2>
            <p className="section-subtitle">
              Technologies I'm learning and using in my web
              development journey.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="skill-name">{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>
              My <span>Projects.</span>
            </h2>
            <p className="section-subtitle">
              A selection of projects and practical work.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / PROJECT</span>
                  <span className="project-icon">↗</span>
                </div>

                <div className="project-art">
                  <div className="art-circle"></div>
                  <div className="art-line line-one"></div>
                  <div className="art-line line-two"></div>
                  <div className="art-line line-three"></div>
                  <span className="art-label">
                    {project.number}
                  </span>
                </div>

                <p className="project-category">
                  {project.category}
                </p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project ↗
                  </a>
                ) : (
                  <span className="project-link project-coming">
                    Add live project link ↗
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-box">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let's build something
              <br />
              <span>great together.</span>
            </h2>
            <p>
              I'm interested in web development opportunities
              where I can learn, contribute and grow.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="btn btn-primary"
            >
              Get In Touch ↗
            </a>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          N<span>.</span>
        </a>
        <p>Designed & built by Nilesh Kumar Yadav.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;