import React from "react";
import "../styles/style.css";

const features = [
  {
    icon: "🔍",
    title: "Website Malware Scanner",
    description:
      "Monitors for website malware and Indicators of Compromise (IOC).",
  },
  {
    icon: "🛡️",
    title: "Complete Website Scanner",
    description:
      "Alerts you to any changes in your DNS records, SSL certificate, or security misconfigurations.",
  },
  {
    icon: "💻",
    title: "Website Server-Side Scanner",
    description:
      "Checks all files for malware like backdoors, phishing pages, and spam scripts.",
  },
  {
    icon: "🌐",
    title: "SEO Spam Scanner",
    description:
      "Detects spam keywords and link injections before they harm your brand.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <span className="feature-icon">{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
