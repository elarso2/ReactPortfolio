import React, { useState } from "react";

// github icon code
// <i class="fa-brands fa-github"></i>
// linkedin icon code
// <i class="fa-brands fa-linkedin"></i>
// spotify icon code
//<i class="fa-brands fa-spotify"></i>

export default function myWork() {
  return (
    <div>
      <h1>My Work</h1>
      <div className="projects">
        <section>
          <img className="workImg" alt="" src="../../assets/E-Commerce.PNG" />
          <h3>E-Commerce Back End Application</h3>
          <a href="https://github.com/elarso2/E-CommerceBackEnd">
            <i class="fa-brands fa-github"></i>
          </a>
        </section>
        <section
          className="workImg"
          alt=""
          src="../../assets/barbellsAndBrews.png"
        >
          <h3>Barbells and Brews</h3>
          <a href="https://github.com/SimonaSnap/WorkoutMusicAPI">
            <i class="fa-brands fa-github"></i>
          </a>
        </section>
        <section className="workImg" alt="" src="../../assets/noteTaker.png">
          <h3>Note Taker</h3>
          <a href="https://github.com/elarso2/NoteTaker">
            <i class="fa-brands fa-github"></i>
          </a>
        </section>
        <section
          className="workImg"
          alt=""
          src="../../assets/passwordGenerator.png"
        >
          <h3>Password Generator</h3>
          <a href="https://github.com/elarso2/Password-Generator">
            <i class="fa-brands fa-github"></i>
          </a>
        </section>
        <section className="workImg" alt="" src="../../assets/textEditor.png">
          <h3>Text Editor</h3>
          <a href="https://github.com/elarso2/Text-Editor">
            <i class="fa-brands fa-github"></i>
          </a>
        </section>
      </div>
    </div>
  );
}
