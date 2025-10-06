import React from "react";
import "./Hero.css";


const Hero = () => {
  
  return (
    <section className="hero">
      {/* Background Elements  */}
      <div className="hero-bg-elements">
        <div className="bg-gradient"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

     
      <div className="hero-inner">
        <div className="hero-left">
          <h1>
            Discover <span>Leading Companies</span> in One Place
          </h1>

          <p className="lead">
            Access verified company data, employee stats and live insights — built
            for discovery and hiring. Filter by industry, location, size and more.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">Explore Companies</button>
            <button className="btn btn-outline">View Demo</button>
          </div>
        </div>

        <div className="hero-right" aria-hidden>
          <div className="hero-company-card hero-card--1">
            <div className="logo">FLM</div>
            <div className="meta">
              <strong>FrontLines Media</strong>
              <span>200+ Employees</span>
            </div>
          </div>

          <div className="hero-company-card hero-card--2">
            <div className="logo">INFY</div>
            <div className="meta">
              <strong>Infosys</strong>
              <span>343K+ Employees</span>
            </div>
          </div>

          <div className="hero-company-card hero-card--3">
            <div className="logo">WIP</div>
            <div className="meta">
              <strong>Wipro</strong>
              <span>250K+ Employees</span>
            </div>
          </div>

          <div className="hero-company-card hero-card--4">
            <div className="logo">TECM</div>
            <div className="meta">
              <strong>Tech Mahindra</strong>
              <span>152K+ Employees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
