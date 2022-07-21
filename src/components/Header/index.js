import React from "react";
import Headshot from "../../assets/images/headshot.jpg";

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <header>
        <div className="headerDiv">
          <h1>Elizabeth Larson</h1>
          <nav>
            <ul>
              <li>
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={() => handlePageChange("Work")}
                  className={
                    currentPage === "Work" ? "nav-link active" : "nav-link"
                  }
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  className={
                    currentPage === "Resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="subheader">
        <img className="headshot" alt="author headshot" src={Headshot} />
      </section>
    </div>
  );
}

export default Header;
