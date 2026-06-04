import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import profile from "./Parth_Kushwaha.jpeg";

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const heroPhrases = [
  "MERN architecture with premium UI polish.",
  "Scalable products with clean code and fast delivery.",
  "Recruiter-friendly experiences built for impact.",
];

const highlights = [
  { value: "5+", label: "Projects shipped" },
  { value: "10+", label: "Core technologies" },
  { value: "1000+", label: "DSA problems solved" },
];

const skillGroups = [
  { title: "Frontend", tone: "cyan", progress: 92, skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", tone: "violet", progress: 90, skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Socket.io"] },
  { title: "Database", tone: "emerald", progress: 88, skills: ["MongoDB", "Mongoose", "Data Modeling", "Query Optimization"] },
  { title: "Programming Languages", tone: "amber", progress: 90, skills: ["C++", "JavaScript", "Python", "Java"] },
  { title: "Tools", tone: "slate", progress: 86, skills: ["Git", "GitHub", "Postman", "VS Code"] },
];

const projects = [
  {
    title: "Job Portal with ATS Score Prediction",
    summary:
      "A modern hiring platform that helps recruiters screen applications faster with analytics-driven workflows, secure authentication, and polished dashboards.",
    tags: ["React", "Node", "MongoDB", "ATS", "Auth"],
    accent: "linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(168, 85, 247, 0.85))",
    github: "https://github.com/Suraj9954/Job-Portal",
    demo: "",
    initials: "JP",
  },
  {
    title: "Syncly — Networking & Video Calls",
    summary: "A platform for networking and video calls for LinkedIn-verified professionals.",
    tags: ["React", "WebRTC", "Realtime", "UI"],
    accent: "linear-gradient(135deg, rgba(99,102,241,0.95), rgba(16,185,129,0.85))",
    github: "https://github.com/ParthKush04/Syncly",
    demo: "https://syncly-six.vercel.app/",
    initials: "SY",
  },
  {
    title: "Code Reviewer",
    summary: "A code review tool to help developers get automated feedback and improve code quality.",
    tags: ["Node", "Express", "Static Analysis"],
    accent: "linear-gradient(135deg, rgba(14,165,233,0.95), rgba(104, 166, 255, 0.85))",
    github: "https://github.com/ParthKush04/Code-Reviewer",
    demo: "",
    initials: "CR",
  },
  {
    title: "Portfolio Website",
    summary:
      "A premium personal brand site built to impress recruiters with elegant motion, strong typography, and a highly polished visual system.",
    tags: ["React", "Motion", "Responsive", "SEO"],
    accent: "linear-gradient(135deg, rgba(148, 163, 184, 0.9), rgba(59, 130, 246, 0.8))",
    github: "https://github.com/ParthKush04",
    demo: "#contact",
    initials: "PV",
  },
];

const experienceItems = [
  {
    title: "MERN Stack Developer Intern",
    org: "Provisioning Tech | Internship",
    time: "Professional Experience",
    summary:
      "Built and deployed a full-stack Internship Management System using MongoDB, Express.js, React.js, and Node.js.",
    details: [
      "Designed responsive user interfaces for students, administrators, and recruiters.",
      "Built RESTful APIs for internship applications, user management, authentication, and data handling.",
      "Integrated MongoDB for efficient storage and retrieval of internship-related data.",
      "Implemented secure authentication and authorization mechanisms to protect user information.",
      "Collaborated with the development team to analyze requirements, develop features, and resolve technical issues.",
      "Deployed the application and participated in testing, debugging, and optimization for stability and performance.",
    ],
  },
  {
    title: "Electrical Engineering Student",
    org: "MNNIT Allahabad",
    time: "Education",
    summary:
      "Developing strong systems thinking, problem solving, and engineering discipline while building modern web products.",
    details: [
      "Balanced core engineering fundamentals with advanced full-stack product development.",
      "Strengthened algorithmic thinking through regular practice and competitive problem solving.",
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/parth-kushwaha-5ab7b824a/", tone: "linkedin" },
  { label: "GitHub", href: "https://github.com/ParthKush04", tone: "github" },
  { label: "Email", href: "mailto:parth26094044@gmail.com", tone: "email" },
  { label: "LeetCode", href: "https://leetcode.com/u/Parth_Kushwaha04/", tone: "leetcode" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.09 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div className="section-heading" variants={itemVariants}>
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </motion.div>
  );
}

function StatCard({ value, label }) {
  return (
    <motion.article className="stat-card" variants={itemVariants} whileHover={{ y: -6 }}>
      <strong>{value}</strong>
      <span>{label}</span>
    </motion.article>
  );
}

function SkillCard({ group }) {
  return (
    <motion.article className={`skill-card skill-card--${group.tone}`} variants={itemVariants} whileHover={{ y: -8 }}>
      <div className="skill-card__top">
        <div>
          <p className="skill-card__label">{group.title}</p>
          <h3>Crafted for production-ready builds</h3>
        </div>
        <span>{group.progress}%</span>
      </div>
      <div className="skill-card__bar" aria-hidden="true">
        <span style={{ width: `${group.progress}%` }} />
      </div>
      <ul className="skill-card__list">
        {group.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </motion.article>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      variants={itemVariants}
      whileHover={{ y: -10, rotateX: 3, rotateY: -3, transition: { duration: 0.25 } }}
    >
      <div className="project-card__visual" style={{ background: project.accent }}>
        <span>{project.initials}</span>
      </div>
      <div className="project-card__body">
        <p className="project-card__eyebrow">Featured project</p>
        <h3>{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-card__actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--small btn--ghost">
            GitHub
          </a>
          {project.demo && project.demo.trim() !== "" ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn--small btn--primary">
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function TimelineItem({ item, index }) {
  return (
    <motion.article className="timeline-item" variants={itemVariants}>
      <div className="timeline-item__marker" aria-hidden="true">
        <span />
      </div>
      <div className="timeline-item__content">
        <span className="timeline-item__time">{item.time}</span>
        <h3>{item.title}</h3>
        <p className="timeline-item__org">{item.org}</p>
        <p className="timeline-item__summary">{item.summary}</p>
        <ul>
          {item.details.map((detail) => (
            <li key={`${item.title}-${detail}`}>{detail}</li>
          ))}
        </ul>
      </div>
      <span className="timeline-item__index">0{index + 1}</span>
    </motion.article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingPhase, setTypingPhase] = useState("typing");
  const [pointerPosition, setPointerPosition] = useState({ x: 50, y: 50 });
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        id: `particle-${index}`,
        left: 8 + Math.random() * 84,
        top: 6 + Math.random() * 86,
        size: 6 + Math.random() * 14,
        delay: Math.random() * 4,
        duration: 7 + Math.random() * 8,
      })),
    []
  );

  useEffect(() => {
    document.title = "Parth Kushwaha | Full Stack MERN Developer";

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Parth Kushwaha is a Full Stack MERN Developer building premium, modern web experiences with polished UI, strong backend systems, and production-ready code."
      );
    }

    const themeColorTag = document.querySelector('meta[name="theme-color"]');
    if (themeColorTag) {
      themeColorTag.setAttribute("content", "#0A0A0A");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45, rootMargin: "-12% 0px -40% 0px" }
    );

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const currentPhrase = heroPhrases[typingIndex];
    const timer = window.setTimeout(() => {
      if (typingPhase === "typing") {
        if (typingText.length < currentPhrase.length) {
          setTypingText(currentPhrase.slice(0, typingText.length + 1));
          return;
        }
        setTypingPhase("pause");
        return;
      }

      if (typingPhase === "pause") {
        setTypingPhase("deleting");
        return;
      }

      if (typingPhase === "deleting") {
        if (typingText.length > 0) {
          setTypingText(currentPhrase.slice(0, typingText.length - 1));
          return;
        }

        setTypingPhase("typing");
        setTypingIndex((previousIndex) => (previousIndex + 1) % heroPhrases.length);
      }
    }, typingPhase === "pause" ? 1100 : typingPhase === "deleting" ? 34 : 68);

    return () => window.clearTimeout(timer);
  }, [typingText, typingIndex, typingPhase]);

  const handlePointerMove = (event) => {
    const currentRect = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - currentRect.left) / currentRect.width) * 100;
    const nextY = ((event.clientY - currentRect.top) / currentRect.height) * 100;
    setPointerPosition({ x: nextX, y: nextY });
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${contactForm.name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\n${contactForm.message}`);

    window.location.href = `mailto:parth26094044@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="portfolio-shell">
      <div className="portfolio-shell__ambient portfolio-shell__ambient--one" aria-hidden="true" />
      <div className="portfolio-shell__ambient portfolio-shell__ambient--two" aria-hidden="true" />
      <div className="portfolio-shell__grid" aria-hidden="true" />

      <header className="nav-shell">
        <motion.nav
          className="nav"
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#home" className="nav__brand">
            PK
          </a>

          <button
            type="button"
            className={`nav__toggle ${menuOpen ? "is-open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav__links ${menuOpen ? "is-open" : ""}`}>
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "is-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="/resume.pdf" className="btn btn--small btn--primary nav__resume" download>
              Download Resume
            </a>
          </div>
        </motion.nav>
      </header>

      <main>
        <header
          id="home"
          data-section
          className="hero"
          style={{ "--pointer-x": `${pointerPosition.x}%`, "--pointer-y": `${pointerPosition.y}%` }}
          onMouseMove={handlePointerMove}
        >
          <div className="hero__particles" aria-hidden="true">
            {particles.map((particle) => (
              <motion.span
                key={particle.id}
                className="hero__particle"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
                animate={{ y: [0, -12, 0], opacity: [0.25, 0.95, 0.25] }}
                transition={{ duration: particle.duration, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>

          <div className="hero__content section-shell">
            <motion.div className="hero__copy" initial="hidden" animate="visible" variants={sectionVariants}>
              <motion.p className="hero__eyebrow" variants={itemVariants}>
                Premium full-stack builds for startups, founders, and recruiting teams
              </motion.p>
              <motion.h1 variants={itemVariants}>Parth Kushwaha</motion.h1>
              <motion.p className="hero__role" variants={itemVariants}>
                Full Stack MERN Developer
              </motion.p>
              <motion.p className="hero__typing" variants={itemVariants} aria-live="polite">
                <span>{typingText}</span>
                <span className="hero__caret" aria-hidden="true" />
              </motion.p>
              <motion.p className="hero__summary" variants={itemVariants}>
                I’m an Electrical Engineering student at MNNIT Allahabad with a focus on building elegant, scalable
                web applications using the MERN stack, backed by strong problem-solving instincts and a product-first
                mindset.
              </motion.p>

              <motion.div className="hero__actions" variants={itemVariants}>
                <a href="#projects" className="btn btn--primary">
                  View Projects
                </a>
                <a href="/resume.pdf" className="btn btn--ghost" download>
                  Download Resume
                </a>
                <a href="#contact" className="btn btn--ghost">
                  Contact Me
                </a>
              </motion.div>

              <motion.div className="hero__highlights" variants={itemVariants}>
                {highlights.map((highlight) => (
                  <article className="hero__metric" key={highlight.label}>
                    <strong>{highlight.value}</strong>
                    <span>{highlight.label}</span>
                  </article>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="hero__visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
              <div className="hero__visual-card glass-card">
                <div className="hero__portrait-frame">
                  <div className="hero__portrait-glow" aria-hidden="true" />
                  <img src={profile} alt="Parth Kushwaha" className="hero__portrait" />
                  <span className="hero__portrait-badge hero__portrait-badge--top">Open to opportunities</span>
                  <span className="hero__portrait-badge hero__portrait-badge--bottom">Full Stack • MERN • UI</span>
                </div>

                <div className="hero__profile-card">
                  <div>
                    <p>Building digital products with cinematic polish.</p>
                    <strong>Performance, clarity, and recruiter-ready presentation.</strong>
                  </div>
                  <div className="hero__profile-chip">Premium portfolio experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        <motion.section id="about" data-section className="section-shell section-block" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={sectionVariants}>
          <SectionHeading eyebrow="About" title="Modern engineering mindset, refined product taste" copy="I build full-stack experiences that feel premium from the first second, with strong architecture, neat visuals, and user journeys that are easy to trust." />

          <div className="about-grid">
            <motion.article className="glass-card about-card" variants={itemVariants}>
              <p className="about-card__tag">Profile</p>
              <p>
                I’m a tech-driven Electrical Engineering student at MNNIT Allahabad who enjoys designing and shipping
                polished full-stack web applications. My work blends modern interfaces, practical backend systems, and
                thoughtful problem solving.
              </p>
              <p>
                I care about speed, accessibility, and clean execution. Whether it’s a dashboard, an ATS-enabled job
                workflow, or a real-time communication layer, I focus on delivering something that feels complete and
                professional.
              </p>
            </motion.article>

            <motion.article className="glass-card about-card about-card--timeline" variants={itemVariants}>
              <p className="about-card__tag">Journey</p>
              <div className="mini-timeline">
                <div>
                  <span>2026</span>
                  <strong>MERN Stack Developer Intern</strong>
                  <p>Provisioning Tech</p>
                </div>
                <div>
                  <span>Now</span>
                  <strong>Building premium web systems</strong>
                  <p>React, Node, MongoDB, and product design</p>
                </div>
                <div>
                  <span>Foundation</span>
                  <strong>Electrical Engineering at MNNIT</strong>
                  <p>Problem solving, systems thinking, and rigorous fundamentals</p>
                </div>
              </div>
            </motion.article>
          </div>

          <div className="stats-grid">
            {highlights.map((highlight) => (
              <StatCard key={highlight.label} value={highlight.value} label={highlight.label} />
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" data-section className="section-shell section-block" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <SectionHeading eyebrow="Skills" title="Categorized capabilities built for modern product teams" copy="A focused stack that supports clean UI work, resilient APIs, and reliable delivery from prototype to production." />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" data-section className="section-shell section-block" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={sectionVariants}>
          <SectionHeading eyebrow="Projects" title="Premium showcase built to communicate impact fast" copy="Each project is presented like a product case study, with clear structure, concise value, and a visual treatment that feels bespoke." />

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </motion.section>

        <motion.section id="experience" data-section className="section-shell section-block" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <SectionHeading eyebrow="Experience" title="Professional timeline with clarity and substance" copy="A concise story of engineering growth, delivery mindset, and the kind of work that gives recruiters confidence." />

          <div className="timeline">
            {experienceItems.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" data-section className="section-shell section-block" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <SectionHeading eyebrow="Contact" title="Let’s build something polished, fast, and memorable" copy="Reach out for opportunities, freelance work, or product conversations. The form opens directly in your mail client for a simple, fast experience." />

          <div className="contact-grid">
            <motion.div className="glass-card contact-links" variants={itemVariants}>
              <p className="contact-links__label">Social links</p>
              <div className="contact-links__list">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.label}
                    href={socialLink.href}
                    target={socialLink.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel={socialLink.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className={`contact-link contact-link--${socialLink.tone}`}
                  >
                    <span>{socialLink.label}</span>
                    <strong>Connect</strong>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form className="glass-card contact-form" variants={itemVariants} onSubmit={handleContactSubmit}>
              <div className="contact-form__grid">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(event) => setContactForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(event) => setContactForm((current) => ({ ...current, email: event.target.value }))}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Message</span>
                <textarea
                  rows="6"
                  value={contactForm.message}
                  onChange={(event) => setContactForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder="Tell me about your product, role, or collaboration idea."
                  required
                />
              </label>

              <motion.button
                type="submit"
                className="btn btn--primary contact-form__submit"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.section>
      </main>

      <footer className="footer section-shell">
        <p>© 2026 Parth Kushwaha. Built for recruiters, clients, and teams that value craft.</p>
      </footer>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="nav__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
