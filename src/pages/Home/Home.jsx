import React from "react";
import { Link } from "react-router-dom";
import green from "../../assets/green.jpg";
import logo from "../../assets/namelogo1.png";
import table from "../../assets/table.png";
import "./Home.css";

const Homepage = () => {
  return (
    <>
      <div className="sec1">
        <img src={green} alt="Green" className="GreenImage" />
        <div className="nav-list">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><a href="#Course">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/account">Account</Link></li>
          </ul>
        </div>
      </div>

      <div className="Logo">
        <img src={logo} alt="Logo" className="logoImage" />
      </div>

      <div className="About" id="about">
        <section>
          <article>
            <h4>LearnCourseOnline</h4>
            <p>
              All the skills you need in one place. From critical skills to technical topics,
              LearnCourseOnline supports your professional development. Your learning journey is unique,
              and we've built a platform to match. Discover a personalized learning experience with a vast
              array of courses tailored to your specific goals. From foundational skills to cutting-edge
              technologies, LearnCourseOnline adapts to your pace and preferences. Track your progress,
              earn certifications, and gain the confidence to excel in today's competitive landscape.
              Invest in yourself, and let us guide you to your next career milestone.
            </p>
          </article>
        </section>
      </div>

      <div>
        <img src={table} alt="Table" className="img2" />
      </div>

      <section className="course" id="Course">
        <article>
          <h4>Courses</h4>
          <Link to="/CCourse">C Language</Link>
          <Link to="/Python">Python Language</Link>
        </article>
      </section>
    </>
  );
};

export default Homepage;
