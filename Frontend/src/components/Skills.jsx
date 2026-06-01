import { useEffect, useRef } from "react";
import { useChildReveal } from "../hooks/Usescrollreveal";
import "../css/Skills.css";

const SKILL_CATEGORIES = [
  {
    category: "Languages",
    icon: "⚙️",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 78 },
      { name: "JavaScript", level: 82 },
      { name: "C++", level: 65 },
    ],
  },
  {
    category: "Web Development",
    icon: "🌐",
    skills: [
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 72 },
      { name: "HTML/CSS", level: 88 },
      { name: "Express.js", level: 68 },
    ],
  },
  {
    category: "DSA & CP",
    icon: "🧩",
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 85 },
      { name: "Dynamic Programming", level: 80 },
      { name: "Graph Theory", level: 75 },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 72 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const TECH_TAGS = [
  "Java", "C++", "Python", "JavaScript", "Go", "React.js", "Node.js", "Express.js", "Flask", "Pandas", "NumPy", "Matplotlib",
  "MongoDB", "MySQL", "Firebase", "Git", "GitHub", "Postman", "DSA", "OOP", "STL",
  "REST APIs", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "VS Code", "IntelliJ IDEA"
];

export default function Skills() {
  const ref = useChildReveal();
  const barsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll(".skill-bar-fill");
          bars.forEach((bar) => {
            bar.style.width = bar.getAttribute("data-level") + "%";
          });
        }
      },
      { threshold: 0.2 }
    );
    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag reveal">what_i_know</span>
          <h2 className="section-title reveal">My <span>Skills</span></h2>
          <div className="section-line reveal" />
        </div>

        <div className="skills-grid" ref={barsRef}>
          {SKILL_CATEGORIES.map((cat) => (
            <div className="skill-category glass-card reveal" key={cat.category}>
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.category}</h3>
              </div>
              {cat.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-item-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      data-level={skill.level}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="tech-cloud reveal">
          <h3 className="tech-cloud-title">Technologies & Tools</h3>
          <div className="tech-tags">
            {TECH_TAGS.map((tag, i) => (
              <span
                className="tech-tag"
                key={tag}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}