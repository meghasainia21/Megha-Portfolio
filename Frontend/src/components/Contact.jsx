import { useState, useRef } from "react";
import { useChildReveal } from "../hooks/UseScrollReveal";
import "../css/Contact.css";
import resumePDF from "../assets/Megha_Sainia_Resume.pdf";



export default function Contact() {
  const ref = useChildReveal();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); 
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setStatus("sending");

    const response = await fetch(
      "https://megha-portfolio-ylig.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    const data = await response.json();

    if (data.success) {
      setStatus("sent");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }
  } catch (error) {
    console.log(error);
    setStatus("error");
  }
};
  const CONTACT_INFO = [
    {
      label: "Email",
      value: "meghasainia25@gmail.com",
      href: "mailto:meghasainia25@gmail.com",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/megha-sainia",
      href: "https://www.linkedin.com/in/megha-sainia/",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/meghasainia21",
      href: "https://github.com/meghasainia21",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container" ref={ref}>
        <div className="section-header">
          <span className="section-tag reveal">get_in_touch</span>
          <h2 className="section-title reveal">Let's <span>Connect</span></h2>
          <div className="section-line reveal" />
          <p className="contact-subtitle reveal">
            Open to internships, collaborations, and opportunities. Let's build something amazing!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <h3>Reach out to me</h3>
            <p>
              Whether you have a project idea, want to collaborate, or just want to say hi —
              my inbox is always open! I'll try my best to get back to you.
            </p>

            <div className="contact-channels">
              {CONTACT_INFO.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-channel glass-card">
                  <div className="channel-icon">{c.icon}</div>
                  <div>
                    <span className="channel-label">{c.label}</span>
                    <span className="channel-value">{c.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <a href={resumePDF} download className="btn btn-primary resume-btn">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form glass-card reveal-right">
            <h3>Send a Message</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Let's collaborate!"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Megha, I'd love to talk about..."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={status === "sending"}>
              {status === "idle" && (
                <>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
              {status === "sending" && <><span className="spinner" /> Sending...</>}
              {status === "sent" && <>✅ Message Sent!</>}
              {status === "error" && <>❌ Try Again</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
