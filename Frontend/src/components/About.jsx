import { useChildReveal } from "../hooks/useScrollReveal";
import "../css/About.css";

const FACTS = [
  { icon: "🎓", label: "Education", value: "Final Year Student at NIT BHOPAL" },
  { icon: "📍", label: "Location", value: "Bhopal, Madhya Pradesh" },
  { icon: "💻", label: "Goal", value: "Software Engineering" },
  { icon: "🌐", label: "Languages", value: "Java , Python , JavaScript" },
];


export default function About() {
  const ref = useChildReveal();

  return (
    <section id="about" className="about-section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag reveal">about.me</span>
          <h2 className="section-title reveal">Who Am <span>I?</span></h2>
          <div className="section-line reveal" />
        </div>

        <div className="about-grid">
          <div className="about-text reveal-left">
            <p>
              Hey! I'm <strong>Megha Sainia</strong>, a passionate 3rd year B.Tech student 
  with a strong interest in competitive programming and full stack development. 
  I enjoy solving algorithmic challenges, building scalable web applications, 
  and continuously improving my problem-solving skills to grow as a software engineer.
            </p>
            <p>
              I spend my days solving algorithmic challenges on platforms like <span className="highlight">LeetCode</span>,
              <span className="highlight"> CodeChef</span>, and <span className="highlight">Codeforces</span>,
              and my evenings building full-stack applications that solve real-world problems.
            </p>
            <div className="about-facts">
              {FACTS.map((f) => (
                <div className="fact-item reveal" key={f.label}>
                  <span className="fact-icon">{f.icon}</span>
                  <div>
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-value">{f.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right reveal-right">
            <div className="stats-grid">
              {[
                { val: "500+", label: "Problems Solved", color: "var(--accent)" },
                { val: "3★", label: "CodeChef Rating", color: "var(--accent2)" },
                { val: "1600+", label: "LeetCode Rating", color: "var(--accent3)" },
                { val: "12+", label: "Projects Built", color: "#f59e0b" },
              ].map((s) => (
                <div className="stat-card glass-card reveal" key={s.label}>
                  <span className="stat-card-val" style={{ color: s.color }}>{s.val}</span>
                  <span className="stat-card-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="coding-profiles glass-card reveal">
              <h4>Coding Profiles</h4>
              {[
                { name: "LeetCode", url: "https://leetcode.com/u/meghasainia21/", rating: "1600+", badge: "Knight" },
                { name: "CodeChef", url: "https://codechef.com/", rating: "3★", badge: "1600-1799" },
                { name: "Codeforces", url: "https://codeforces.com/", rating: "Specialist", badge: "CF" },
              ].map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="profile-row">
                  <span className="profile-name">{p.name}</span>
                  <span className="profile-rating tag">{p.rating}</span>
                </a>
              ))} 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}