import React from "react";
import Headshot from "../../assets/images/headshot.jpg";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <h1>Elizabeth Larson</h1>
          <nav>
            <ul>
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
              <a href="#resume">Resume</a>
            </ul>
          </nav>
        </div>
      </header>
      <section id="subheader">
        <img className="headshot" alt="author headshot" src={Headshot} />
      </section>
    </div>
  );
};

export default Header;
