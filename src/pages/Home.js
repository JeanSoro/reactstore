import React from "react";
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          Our Products
        </Link>
      </Hero>
    </>
  );
}

export default Home;
