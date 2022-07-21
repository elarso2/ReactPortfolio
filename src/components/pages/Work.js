import React from "react";
import github from "../../assets/icons/github-brands.svg";
import barbells from "../../assets/images/barbellsAndBrews.png";
import ecommerce from "../../assets/images/E-Commerce.PNG";
import note from "../../assets/images/noteTaker.png";
import passgen from "../../assets/images/passwordGenerator.png";
import textEdit from "../../assets/images/textEditor.PNG";

export default function Work() {
  return (
    <div>
      <h1>My Work</h1>
      <div className="projects">
        <section>
          <img className="workImg" alt="" src={ecommerce} />
          <h3
            href="https://drive.google.com/file/d/1-ZGft5yOfgP3JPVx74e77rpijLf5KH1x/view"
            target="_blank"
          >
            E-Commerce Back End Application
          </h3>
          <a
            href="https://github.com/elarso2/E-CommerceBackEnd"
            target="_blank"
          >
            <img src={github} alt="github icon" />
          </a>
        </section>
        <section className="workImg" alt="" src={barbells}>
          <h3
            href="https://simonasnap.github.io/WorkoutMusicAPI/"
            target="_blank"
          >
            Barbells and Brews
          </h3>
          <a
            href="https://github.com/SimonaSnap/WorkoutMusicAPI"
            target="_blank"
          >
            <img src={github} alt="github icon" />
          </a>
        </section>
        <section className="workImg" alt="" src={note}>
          <h3 href="https://note-taker-elarson.herokuapp.com/" target="_blank">
            Note Taker
          </h3>
          <a href="https://github.com/elarso2/NoteTaker" target="_blank">
            <img src={github} alt="github icon" />
          </a>
        </section>
        <section className="workImg" alt="" src={passgen}>
          <h3
            href="https://elarso2.github.io/Password-Generator/"
            target="_blank"
          >
            Password Generator
          </h3>
          <a
            href="https://github.com/elarso2/Password-Generator"
            target="_blank"
          >
            <img src={github} alt="github icon" />
          </a>
        </section>
        <section className="workImg" alt="" src={textEdit}>
          <h3 href="https://ell-text-editor.herokuapp.com/" target="_blank">
            Text Editor
          </h3>
          <a href="https://github.com/elarso2/Text-Editor" target="_blank">
            <img src={github} alt="github icon" />
          </a>
        </section>
      </div>
    </div>
  );
}
