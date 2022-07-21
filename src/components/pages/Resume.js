import React, { useState } from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <h2>
        Download my full resume{" "}
        <a href="../../assets/E.Larson Resume.pdf" download="ELarson Resume">
          here
        </a>
        .
      </h2>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>MySQL, Sequelize</li>
        <li>API's</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Handlebars.js</li>
        <li>Express.js</li>
      </ul>
      <h3>Skills</h3>
      <ul>
        <li>Slack</li>
        <li>Microsoft Office</li>
        <li>Google Drive</li>
        <li>Conversational Spanish Fluency</li>
        <li>Project Management</li>
        <li>Communication and Conflict Resolution</li>
      </ul>
    </div>
  );
}
