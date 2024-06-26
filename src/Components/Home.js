import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
import illustration from "../Assets/Illustration.svg";

function Home() {
  return (
    <div
      className="home-container"
      style={{ background: "linear-gradient(to bottom, #f6f6f6, #e0e0e0)" }}
    >
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Start a new experience in
            <span style={{ color: "blueviolet" }}>processing data</span>
          </h1>
          <br />
          <br />
          {/* Menggunakan <Link> untuk menuju ke halaman pendaftaran */}
          <Link to="/register" className="secondary-button">
            Register
          </Link>
          <br />
        </div>
        <div className="home-image-container">
          <img src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
