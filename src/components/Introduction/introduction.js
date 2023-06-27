import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="mainsection">
      <div className="ashribimg">
        <img className="photo" alt="image" src="media/me.png"></img>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/codeashing"
            target="_blank"
            className="f_icon"
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-128.png"
              alt="LinkedIn"
              width="50px"
            />
          </a>

          <a
            href="https://twitter.com/codeashing"
            target="_blank"
            className="icon"
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-128.png"
              alt="Twitter"
              width="50px"
            />
          </a>

          <a
            href="https://codeashing.medium.com/"
            target="_blank"
            className="icon"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/black-white-social-media/32/social_media_logo_medium-256.png"
              alt="Medium"
              width="50px"
            />
          </a>

          <a
            href="https://github.com/codeashing"
            target="_blank"
            className="icon"
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_color-128.png"
              alt="Github"
              width="50px"
            />
          </a>

          <a
            href="mailto: asharibahmed143@gmail.com"
            target="_blank"
            className="icon"
          >
            <img
              src="https://cdn0.iconfinder.com/data/icons/lumin-social-media-icons/512/Gmail-256.png"
              alt="Gmail"
              width="50px"
            />
          </a>

          <a
            href="media/asharibResume.pdf"
            target="_blank"
            className="icon"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/business-people-orchid-vol-2-1/1000/Resume-256.png"
              alt="Resume"
              width="50px"
            />
          </a>
        </div>
      </div>

      <div>
        <h1 className="heading">Asharib Ahmed</h1>
        <h3 className="Backend">(Software Engineer)</h3>


        <div className="lines">
          Asst Team Lead @ Star Marketing | Campus Expert @Github | Community Builder @AWS
        </div>
      </div>
    </div>
  );
};
export default Introduction;
