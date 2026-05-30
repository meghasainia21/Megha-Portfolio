import { useState } from "react";
import { useChildReveal } from "../hooks/useScrollReveal";
import "../css/Projects.css";

const PROJECTS = [
  {
    title: "AI Smart Parking System",
    desc: "A real-time Smart Parking Admin Dashboard built using Computer Vision and Web Technologies to monitor vehicle occupancy and parking capacity efficiently.",
    tags: ["Javascript", "Python", "Flask", "YOLO", "OpenCV", "Chart.js"],
    github: "https://github.com/meghasainia21/AI-Smart-Parking-System",
    demo: "https://ai-smart-parking-system-1.onrender.com",
    emoji: "📊",
    featured: true,
  },
  {
    title: "EchoCare AI",
    desc: "EchoCare AI is a full-stack AI-powered healthcare platform built to revolutionize the way patients and doctors interact with modern healthcare systems.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Firebase", "Speech Recognition API"],
    github: "https://github.com/meghasainia21/EchoCare-AI",
    demo: "https://echocare-ai-frontend.onrender.com",
    emoji: "🧮",
    featured: true,
  },
  {
    title: "KrishiMitra AI",
    desc: "KrishiMitra AI is an AI-powered smart farming platform that combines IoT, Machine Learning, and Full Stack Development to help farmers make smarter, data-driven decisions.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "ESP32", "CNN", "Soil Moisture Sensor"],
    github: "https://github.com/meghasainia21/KrishiMitra-AI",
    demo: "https://krishimitra-ai-ip91.onrender.com",
    emoji: "🤝",
    featured: false,
  },
  {
    title: "ProcessIQ",
    desc: "ProcessIQ is a web-based chemical process analysis and simulation platform designed to assist in understanding, designing, and analyzing industrial chemical processes using a clean and scalable web architecture.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "bcrypt","React Router"],
    github: "https://github.com/meghasainia21/ProcessIQ",
    demo: "https://processiq-frontend.onrender.com",
    emoji: "📝",
    featured: false,
  },
  
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const ref = useChildReveal();
  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="projects-section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag reveal">my_work</span>
          <h2 className="section-title reveal">Featured <span>Projects</span></h2>
          <div className="section-line reveal" />
        </div>

        <div className="projects-grid">
          {displayed.map((p) => (
            <div className={`project-card glass-card reveal ${p.featured ? "featured" : ""}`} key={p.title}>
              {p.featured && <div className="featured-badge">⭐ Featured</div>}
              <div className="project-emoji">{p.emoji}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer reveal">
          <button
            className="btn btn-outline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : `View All Projects (${PROJECTS.length})`}
          </button>
          <a href="https://github.com/meghasainia21" target="_blank" rel="noreferrer" className="btn btn-primary">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}