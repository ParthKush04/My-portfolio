import React from "react";
import "./App.css";
import profile from "./parth.jpeg"; // keep your uploaded image here in src/

export default function App() {
  return (
    <div className="portfolio">
      {/* ==== Hero Section ==== */}
      <header className="hero-section">
        <div className="floating-bg"></div>
        <div className="intro fade-up">
          <img src={profile} alt="Parth Kushwaha" className="profile-pic glow" />
          <p className="hi">Hi, I'm</p>
          <h1 className="name">Parth Kushwaha</h1>
          <h2 className="role">
            a <span>Web Developer</span>
          </h2>
          <p className="bio">
            I’m a <strong>tech-driven Electrical Engineering student at MNNIT</strong>, passionate about 
            <strong> building web apps using the MERN stack</strong>, and solving problems on Data Structures and Algorithms
          </p>

          {/* Download Resume Button */}
       <a href="/resume.pdf" download className="btn primary download-btn">
  <span className="download-text">Download Resume</span>
  <span className="download-icon">⬇</span>
</a>


        </div>
      </header>

      {/* ==== About ==== */}
      <section className="about fade-up">
        <h2>About Me</h2>
        <p>
          I’m an Electrical Engineering student at MNNIT Allahabad and a passionate MERN stack developer. 
          I enjoy building full-stack web apps, solving DSA problems, and exploring backend architectures. 
          With 1000+ DSA problems solved and experience in React, Node.js, and MongoDB, 
          I aim to create meaningful and efficient digital experiences.
        </p>
      </section>

      {/* ==== Technical Skills ==== */}
      <section className="skills fade-up">
        <h2>Technical Skills</h2>
        <ul className="skills-list">
          <li><b>Languages:</b> C++, JavaScript</li>
          <li><b>Frontend:</b> React.js</li>
          <li><b>Backend:</b> Node.js, Express.js</li>
          <li><b>Database:</b> MongoDB</li>
          <li><b>Tools:</b> Git, VS Code, Postman</li>
          <li><b>Core Subjects:</b> OS, DBMS, OOP, DSA</li>
        </ul>
      </section>

      {/* ==== Projects ==== */}
      <section className="projects fade-up">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card slide-left">
            <h3>Auction Platform — <span>March 2025</span></h3>
            <p>
              Real-time auction app with <strong>JWT authentication</strong>, <strong>live bidding</strong>, 
              and admin analytics dashboard.
            </p>
            <a
              href="https://github.com/Vedantmnnitallahabad/Auction_platform"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Repo
            </a>
          </div>

          <div className="project-card slide-right">
            <h3>Job Portal — <span>April 2025</span></h3>
            <p>
              MERN job portal connecting recruiters and candidates, featuring authentication, dashboards, and CRUD APIs.
            </p>
            <a
              href="https://github.com/Suraj9954/Job-Portal"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View Repo
            </a>
          </div>
        </div>
      </section>

      {/* ==== Achievements ==== */}
      <section className="achievements fade-up">
        <h2>Achievements</h2>
        <ul>
          <li>🌍 Global Rank 246 — CodeChef Starters 183</li>
          <li>🌍 Global Rank 738 — CodeChef Starters 138</li>
          <li>🔥 Solved 600+ problems on LeetCode</li>
        </ul>
      </section>

      {/* ==== Coding Profiles ==== */}
      <section className="coding fade-up">
        <h2>My Coding Profiles</h2>
        <div className="coding-grid">
          <a href="https://leetcode.com/u/Parth_Kushwaha04/" target="_blank" rel="noreferrer" className="code-card leetcode">
            <i className="fa-solid fa-code"></i>
            <p>LeetCode</p>
          </a>
          <a href="https://codeforces.com/profile/Parth_Kushwaha" target="_blank" rel="noreferrer" className="code-card codeforces">
            <i className="fa-solid fa-bolt"></i>
            <p>Codeforces</p>
          </a>
          <a href="https://www.codechef.com/users/parth_kuswaha" target="_blank" rel="noreferrer" className="code-card codechef">
            <i className="fa-solid fa-fire"></i>
            <p>CodeChef</p>
          </a>
          <a href="https://github.com/ParthKush04" target="_blank" rel="noreferrer" className="code-card github">
            <i className="fa-brands fa-github"></i>
            <p>GitHub</p>
          </a>
        </div>
      </section>

      {/* ==== Contact ==== */}
      <section className="contact fade-up">
        <h2>Contact Me</h2>
        <p>Let’s collaborate !</p>
        <div className="socials">
          <a href="mailto:parth26094044@gmail.com" className="btn">Email Me</a>
          <a href="https://www.linkedin.com/in/parth-kushwaha-5ab7b824a/" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}
