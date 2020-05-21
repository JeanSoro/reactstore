import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>2020 Collection</h1>
        <p>Lookbook.</p>
        {children}
      </div>
    </div>
  );
}
