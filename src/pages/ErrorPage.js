import React from "react";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>404 NOT FOUND</h1>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}

export default ErrorPage;