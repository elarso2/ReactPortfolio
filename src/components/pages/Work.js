import React, { useState } from "react";
import github from "../../assets/icons/github-brands.svg";
import barbells from "../../assets/images/barbellsAndBrews.png";
import ecommerce from "../../assets/images/E-Commerce.PNG";
import note from "../../assets/images/noteTaker.png";
import passgen from "../../assets/images/passwordGenerator.png";
import textEdit from "../../assets/images/textEditor.png";

export default function Work() {
  return (
    <div>
      <h1>My Work</h1>
      <div className="projects">
        <section>
          <img className="workImg" alt="" src={ecommerce} />
          <h3 href="https://drive.google.com/file/d/1-ZGft5yOfgP3JPVx74e77rpijLf5KH1x/view">
            E-Commerce Back End Application
          </h3>
          <a href="https://github.com/elarso2/E-CommerceBackEnd">
            <img src={github} alt="github icon" />
          </a>
        </section>
        <section className="workImg" alt="" src={barbells}>
          <h3 href="https://simonasnap.github.io/WorkoutMusicAPI/">
            Barbells and Brews
          </h3>
          <a href="https://github.com/SimonaSnap/WorkoutMusicAPI">
            <img src={github} alt="github icon" />
          </a>
        </section>
        <section className="workImg" alt="" src={note}>
          <h3 href="https://note-taker-elarson.herokuapp.com/">Note Taker</h3>
          <a href="https://github.com/elarso2/NoteTaker">
            <img src={github} alt="github icon" />
          </a>
        </section>
        <section className="workImg" alt="" src={passgen}>
          <h3 href="https://elarso2.github.io/Password-Generator/">
            Password Generator
          </h3>
          <a href="https://github.com/elarso2/Password-Generator">
            <img src={github} alt="github icon" />
          </a>
        </section>
        <section className="workImg" alt="" src={textEdit}>
          <h3 href="https://ell-text-editor.herokuapp.com/">Text Editor</h3>
          <a href="https://github.com/elarso2/Text-Editor">
            <img src={github} alt="github icon" />
          </a>
        </section>
      </div>
    </div>
  );
}
