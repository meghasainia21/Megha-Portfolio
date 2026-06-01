import { useChildReveal } from "../hooks/Usescrollreveal";
import "../css/Achievements.css";

const ACHIEVEMENTS = [
  {
  title: "Top Qualifier - Google Big Code Challenge",
  desc: "Secured a Top 15,000 global rank in the Qualifier Round among 1 Lakh+ participants worldwide.",
  icon: "🏆",
  color: "var(--accent2)",
},
{
  title: "2× Hackathon Finalist",
  desc: "Recognized as a finalist in Hack4Delhi and Hacksagon Hackathons for innovative problem-solving and development skills.",
  icon: "🚀",
  color: "var(--accent1)",
  
},
  {
    title: "CodeChef 3★ Rating",
    desc: "Achieved 3-star rating 1600+ on CodeChef through consistent participation in division 2 & 3 contests.",
    icon: "⭐",
    color: "#f59e0b",
    
  },
  {
  title: "EY Techathon Semi Finalist",
  desc: "Advanced to the semifinal round of EY Techathon by developing innovative and scalable tech solutions.",
  icon: "💡",
  color: "var(--accent4)",
  
},
  {
  title: "Top Performer - NCAT 2025",
  desc: "Ranked among the Top 6.7% candidates nationwide in the Naukri Campus National Aptitude Test (NCAT) 2025.",
  icon: "📈",
  color: "var(--accent5)",
},
  {
    title: "680+ Problems Solved",
    desc: "Solved over 600 algorithmic problems across LeetCode, CodeChef, and GeeksForGeeks.",
    icon: "🧩",
    color: "#ec4899",
  },
];

export default function Achievements() {
  const ref = useChildReveal();

  return (
    <section id="achievements" className="achievements-section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag reveal">milestones</span>
          <h2 className="section-title reveal">My <span>Achievements</span></h2>
          <div className="section-line reveal" />
        </div>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((a) => (
            <div className="achievement-card glass-card reveal" key={a.title}>
              <div className="achievement-icon-wrap" style={{ background: `${a.color}18`, border: `1px solid ${a.color}30` }}>
                <span className="achievement-icon">{a.icon}</span>
              </div>
              <div className="achievement-body">
                <div className="achievement-header">
                  <h3 className="achievement-title">{a.title}</h3>
                  <span className="achievement-date">{a.date}</span>
                </div>
                <p className="achievement-desc">{a.desc}</p>
              </div>
              <div className="achievement-glow" style={{ background: `radial-gradient(circle at 0 0, ${a.color}12, transparent 60%)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}