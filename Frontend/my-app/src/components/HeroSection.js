import React from "react";
import "../styles/style.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Website Malware Scanning & Detection</h1>
        <p>
          Scan your website for malware, hacks, and blacklist status. Receive
          continuous website monitoring with alerts and daily updates.
        </p>
        <div className="hero-buttons">
          <button className="btn-dark">Scan Your Website</button>
          <button className="btn-light">Chat Now</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/assets/hero-image.png" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
