import React from "react";
import { Zap } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="page-wrapper">
      {/* Background Cyber Ambient & Glow Orbs */}
      <div className="cyber-bg" />
      <div className="orb-glow orb-1" />
      <div className="orb-glow orb-2" />

      {/* Header / Brand Logo */}
      <header className="header-container">
        <div className="brand-wrapper">
          <div className="logo-box">
            <Zap size={22} color="#000" fill="#000" />
          </div>
          <div>
            <span className="brand-title">WEOX</span>
            <span className="brand-subtitle">Electric Scooters</span>
          </div>
        </div>

        <div className="status-badge">
          <span className="pulse-dot" />
          <span>Launch In Progress</span>
        </div>
      </header>

      {/* Main Centered Hero */}
      <main className="main-hero">
        <div className="category-pill">
          <span className="green-dot" />
          <span>Next-Generation Urban Velocity</span>
        </div>

        <h1 className="coming-soon-heading">COMING SOON</h1>

        <p className="hero-subtitle">
          Silent power. Aerodynamic precision. The future of electric urban commuting is currently under development.
        </p>

        <div className="glow-divider" />
      </main>

      {/* Footer */}
      <footer className="footer-container">
        <div>© 2026 Weox Electric Scooter. All rights reserved.</div>
        <nav className="social-nav">
          <a href="#instagram" className="social-item">Instagram</a>
          <a href="#twitter" className="social-item">Twitter / X</a>
          <a href="#linkedin" className="social-item">LinkedIn</a>
        </nav>
      </footer>
    </div>
  );
}
