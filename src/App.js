import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="video-wrap">
      <video muted loop autoPlay playsInline>
        <source
          src="https://www.liyanalzm.com/static/wind-24aec1ed6c350d2efc9227d74cecbc8c.mp4"
          type="video/mp4"
        />
      </video>
      <div className="text-overlay">hello</div>
      <div className="background-overlay" />
    </div>
  );
}
