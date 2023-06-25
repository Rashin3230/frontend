import React from "react";
import logo_round from "../assets/images/logo_round.png";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <div className="about-info">
          <img src={logo_round} alt="Company Logo" className="about-image" />
          <p className="about-description">
            Welcome to our tourism and travel website! We are passionate about
            helping you explore new destinations, create memorable experiences,
            and make your travel dreams come true.
          </p>
          <p className="about-description">
            Our team of experienced travel enthusiasts is dedicated to providing
            you with the best travel advice, tips, and recommendations. Whether
            you're planning a relaxing beach getaway, an adventurous hiking
            expedition, or a cultural city tour, we've got you covered.
          </p>
          <p className="about-description">
            We believe that traveling is not just about visiting new places, but
            also about connecting with different cultures, discovering local
            cuisines, and immersing yourself in unique experiences. With our
            carefully curated travel guides and itineraries, we aim to inspire
            you to explore the world and create lifelong memories.
          </p>
          <p className="about-description">
            So, whether you're a seasoned traveler or embarking on your first
            journey, join us on this exciting adventure. Start planning your
            next trip today and let us be your trusted travel companion every
            step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
