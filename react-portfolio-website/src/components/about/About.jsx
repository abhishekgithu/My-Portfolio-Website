import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Associate Software Engineer Intern</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Employer</h5>
              <small>Refactor Academy</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          "Motivated and dedicated Associate Software Engineer Intern with training from a reputable coding bootcamp. Strong understanding of front-end and back-end development technologies including HTML, CSS, JS, ReactJs, NodeJS, MongoDB . Proven ability to deliver projects on time and within budget through participation in various hands-on projects during the bootcamp. Strong problem-solving skills and a desire to stay current with the latest industry trends and technologies."
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
