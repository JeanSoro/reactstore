import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Dummy Text</h1>
        <p>Lorem ipsum - dolor sit.</p>
        {children}
      </div>
    </div>
  );
}
