import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            <span className="logo-bracket">&lt;</span>Megha<span className="logo-accent">.dev</span><span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-tagline">
            Turning ideas into code, one algorithm at a time. 🚀
          </p>
          
        </div>

        <div className="footer-bottom">
         
          <p>© {new Date().getFullYear()} Megha Sainia. All rights reserved.</p>
          <p className="footer-credit">
            Designed & Built with <span style={{ color: "#ec4899", fontSize: "19px" }}>♥</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
}