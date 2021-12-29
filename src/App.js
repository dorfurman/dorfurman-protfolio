import React, { useEffect } from "react";
import "./styles/main.css";
import ProfilePicture from "./media/round-profile.png";
import ProfileShape from "./media/blob.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faReact,
  faSass,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";

// Components
import Menu from "./components/Menu";

function App() {
  window.onload = () => {
    const skills = document.querySelectorAll(".skill");
    const skillsContainer = document.querySelector("#skillsContainer");
    let lastNum;
    const skillAnimation = () => {
      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * (5 - 0 + 1) + 0);
      } while (lastNum === randomNum);
      lastNum = randomNum;
      if (randomNum === 2 || randomNum === 3) {
        skills[randomNum].style.boxShadow =
          "0px 0px 25px 0 rgb(105, 105, 105), -6px 10px 0 0 #6830c3b0, -12px 20px 0 0 #6830c362";
        setTimeout(() => {
          skills[randomNum].style.boxShadow =
            "0px 0px 5px 0 #6930c3, -6px 10px 0 0 #6830c3b0, -12px 20px 0 0 #6830c362";
        }, 1500);
      } else {
        skills[randomNum].style.boxShadow =
          "0px 0px 15px 0 #6930c3, -6px 10px 0 0 rgba(40, 40, 40, 0.75), -12px 20px 0 0 rgba(45, 45, 45, 0.5)";
        setTimeout(() => {
          skills[randomNum].style.boxShadow =
            "0px 0px 5px 0 rgb(47, 47, 47), -6px 10px 0 0 rgba(40, 40, 40, 0.75), -12px 20px 0 0 rgba(45, 45, 45, 0.5)";
        }, 1500);
      }
      setTimeout(skillAnimation, 1500);
    };
    skillAnimation();

    skillsContainer.onmousemove = function (e) {
      var x = (e.pageX - this.offsetLeft) / 100;
      var y = (e.pageY - this.offsetTop) / 100;
      if (x > 6) x = 6;
      if (y > 16) y = 16;
      skillsContainer.style.transform = `rotateY(20deg) translate(${x}%, ${y}%)`;
    };
  };

  return (
    <div className="container">
      <Menu />
      <ul id="socialUl">
        <li>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
        </li>
        <li>
          <FontAwesomeIcon icon={faAt} />
        </li>
        <li>
          <FontAwesomeIcon icon={faWhatsapp} />
        </li>
      </ul>
      <div className="containerInner">
        <div className="main">
          <div className="header">
            <div id="linesDiv">
              <div id="hideTop"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                id="waveShape"
              >
                <path
                  fill="rgb(20, 20, 20)"
                  fillOpacity="1"
                  stroke="1px solid #fff"
                  d="M0,160L24,138.7C48,117,96,75,144,69.3C192,64,240,96,288,96C336,96,384,64,432,53.3C480,43,528,53,576,90.7C624,128,672,192,720,234.7C768,277,816,299,864,277.3C912,256,960,192,1008,144C1056,96,1104,64,1152,85.3C1200,107,1248,181,1296,181.3C1344,181,1392,107,1416,69.3L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                ></path>
              </svg>
            </div>
            <div className="grid-col-2">
              <div className="grid-item-1">
                <h3>Hi, my name is</h3>
                <h1>DOR FURMAN</h1>
                <h3 id="bottomTxt">Frontend Web Developer & Freelancer</h3>
                <button id="hireMe">
                  <a>HIRE ME</a>
                </button>
              </div>
              <div className="grid-item-2">
                <div id="profileImgDiv">
                  <img
                    src={ProfilePicture}
                    alt="Profile Image"
                    id="profile-image"
                  />
                  <img
                    src={ProfileShape}
                    alt="Profile Shape"
                    id="profile-shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="about">
            <div id="aboutTopGrid">
              <div id="linesDiv">
                <div id="hideTop"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  id="waveShape"
                >
                  <path
                    fill="rgb(20, 20, 20)"
                    fillOpacity="1"
                    stroke="1px solid #fff"
                    d="M0,160L24,138.7C48,117,96,75,144,69.3C192,64,240,96,288,96C336,96,384,64,432,53.3C480,43,528,53,576,90.7C624,128,672,192,720,234.7C768,277,816,299,864,277.3C912,256,960,192,1008,144C1056,96,1104,64,1152,85.3C1200,107,1248,181,1296,181.3C1344,181,1392,107,1416,69.3L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
                  ></path>
                </svg>
              </div>
              <div id="skillsContainer">
                <div id="skillsGrid">
                  <div className="skill">
                    <FontAwesomeIcon className="skillIcon" icon={faJsSquare} />
                    <br />
                    <a className="skillHeader">JavaScript</a>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon className="skillIcon" icon={faCss3Alt} />
                    <br />
                    <a className="skillHeader">CSS</a>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon className="skillIcon" icon={faSass} />
                    <br />
                    <a className="skillHeader">SaaS</a>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon className="skillIcon" icon={faShopify} />
                    <br />
                    <a className="skillHeader">Shopify</a>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon className="skillIcon" icon={faHtml5} />
                    <br />
                    <a className="skillHeader">HTML</a>
                  </div>
                  <div className="skill">
                    <FontAwesomeIcon className="skillIcon" icon={faReact} />
                    <br />
                    <a className="skillHeader">React</a>
                  </div>
                </div>
              </div>
              <div id="skillHeader">
                <h1>Me</h1>
                <p>
                  Passionate <span>self learned</span> front end web developer.
                </p>
                <p>
                  Love to create unique open minded <span>creations</span>.
                </p>
                <p>
                  Excited to learn new <span>technologies</span>.
                </p>
              </div>
            </div>
          </div>
          <div className="projects"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
