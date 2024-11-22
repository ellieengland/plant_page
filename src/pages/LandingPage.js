import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing-page" style={{ textAlign: "center" }}>
    <h1>Welcome to Paradise Nursery</h1>
    <p>Your one-stop shop for beautiful houseplants!</p>
    <img src="https://t3.ftcdn.net/jpg/03/27/29/50/360_F_327295065_TfNncI9BPyDWnLYNEoTyPrZuffzixf8G.jpg" alt="Nursery" style={{ width: "100%" }} />
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;
