import { useChildReveal } from "../hooks/Usescrollreveal";
import "../css/Experience.css";

const EXPERIENCES = [
  {
    role: "Artificial Intelligence Intern",
    org: "IBM SkillsBuild",
    period: "Jun 2025 – Jul 2025",
    type: "Internship",
    desc: "Developed machine learning models for salary prediction using Linear Regression and Decision Trees. Improved model accuracy through data preprocessing and feature engineering.",
    skills: ["Machine Learning", "Python", "Linear Regression", "Decision Trees", "Data Preprocessing"],
    icon: "💼",
  },
 {
  role: "Technical Member",
  org: "Google Developer Groups (GDG) Bhopal",
  period: "Aug 2024 – Present",
  type: "Leadership",
  desc: "Organized technical workshops, coding contests, and hackathons for 200+ students. Mentored juniors in DSA and web development while contributing to community-driven learning initiatives.",
  skills: ["Leadership", "DSA", "Event Management", "Mentoring"],
  icon: "🎯",
},
  {
    role: "Open Source Contributor",
    org: "Google Summer of Code (GSoC)",
    period: "Sep 2024 – Nov 2024",
    type: "Open Source",
     desc: "Optimized C++ computation modules, reducing memory usage by 25%. Collaborated with maintainers to review code, fix issues, and contribute accepted pull requests.",
     skills: ["C++", "Open Source", "Git", "Debugging", "Performance Optimization"],
    icon: "🌐",
  },
];

const TYPE_COLORS = {
  Internship: "var(--accent)",
  Leadership: "var(--accent2)",
  CP: "#f59e0b",
  "Open Source": "var(--accent3)",
};

export default function Experience() {
  const ref = useChildReveal();

  return (
    <section id="experience" className="experience-section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag reveal">my_journey</span>
          <h2 className="section-title reveal">Experience & <span>Journey</span></h2>
          <div className="section-line reveal" />
        </div>

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <div
              className={`timeline-item reveal ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`}
              key={exp.role}
            >
              <div className="timeline-dot" style={{ background: TYPE_COLORS[exp.type] }}>
                {exp.icon}
              </div>

              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-org">{exp.org}</p>
                  </div>
                  <div className="timeline-meta">
                    <span
                      className="timeline-type"
                      style={{ color: TYPE_COLORS[exp.type], borderColor: TYPE_COLORS[exp.type] }}
                    >
                      {exp.type}
                    </span>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                </div>
                <p className="timeline-desc">{exp.desc}</p>
                <div className="timeline-skills">
                  {exp.skills.map((s) => (
                    <span className="tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}