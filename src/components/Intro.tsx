import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const text = "Welcome to the Log Visualization Dashboard!";

const Home: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Typing speed (adjust as needed)
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="home-container">
      <h1 className="typing-text">{displayedText}</h1>
      <p className="description">
        This platform provides powerful data visualization tools to analyze log data effectively.
        Explore:
      </p>
      <ul className="features-list">
        <li> **Charts** – Visualize trends using bar, line, pie, and scatter charts.</li>
        <li> **Live Stream** – View logs as they arrive in real-time.</li>
        <li> **Table View** – Search and filter log entries efficiently.</li>
      </ul>
    </div>
  );
};

export default Home;
