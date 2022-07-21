import React from "react";
import github from "../../assets/icons/github-brands.svg";
import linkedin from "../../assets/icons/linkedin-brands.svg";
import spotify from "../../assets/icons/spotify-brands.svg";
import email from "../../assets/icons/envelope-solid.svg";

const Footer = () => {
  return (
    <div>
      <a href="https://github.com/elarso2">
        <img src={github} alt="GitHub icon" />
      </a>
      <a href="https://www.linkedin.com/in/elizabeth-larson-159310113/">
        <img src={linkedin} alt="linkedIn icon" />
      </a>
      <a href="https://open.spotify.com/user/0pdabbzrnalgkpn4j7ff5nz6i">
        <img src={spotify} alt="spotify icon" />
      </a>
      <a href="mailto: larsoneli97@gmail.com" target="_blanck">
        <img src={email} alt="email icon" />
      </a>
    </div>
  );
};

export default Footer;
