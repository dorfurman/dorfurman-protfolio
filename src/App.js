import React, { useState } from "react";
import "./styles/main.css";
// Images
import ProfilePicture from "./media/profileNew.png";
import ProfileMobile from "./media/profileMobile.png";
import SelfLearnerImg from "./media/qualities/selflearner.svg";
import TeamworkImg from "./media/qualities/teamwork.svg";
import PassionImg from "./media/qualities/passion.svg";
import NewTechnologyImg from "./media/qualities/newtechnology.svg";
import BouquetBG from "./media/protfolio/Bouquet/bouquet-bg.PNG";
import BouquetLogo from "./media/protfolio/Bouquet/bouquet-logo.png";
import YarinBG from "./media/protfolio/Yarin-Drory/Yarin-bg.PNG";
import YarinLogo from "./media/protfolio/Yarin-Drory/Yarin-logo.webp";
import NitaiBG from "./media/protfolio/Nitai-Daniel/NitaiBG.PNG";
import NitaiLogo from "./media/protfolio/Nitai-Daniel/NitaiLogo.png";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
  const [menuTxt, txtChange] = useState("Welcome");

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

    const skillAnimationMobile = () => {
      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * (5 - 0 + 1) + 0);
      } while (lastNum === randomNum);
      lastNum = randomNum;
      skills[randomNum].style.boxShadow =
        "0px 4px 15px 0 #6930c3, 0px 8px 0 0 rgba(40, 40, 40, 0.75), 0px 12px 0 0 rgba(45, 45, 45, 0.5)";
      setTimeout(() => {
        skills[randomNum].style.boxShadow = "0 0 0 transparent";
      }, 1000);
      setTimeout(skillAnimationMobile, 1000);
    };

    if (window.innerWidth > 600) {
      skillAnimation();
      skillsContainer.onmousemove = function (e) {
        let x = (e.pageX - this.offsetLeft) / 100;
        let y = (e.pageY - this.offsetTop) / 100;
        skillsContainer.style.transform = `rotateY(20deg) translate(${x}%, ${y}%) translateZ(1px)`;
      };
    } else {
      skillAnimationMobile();
    }

    const qualitiesGrid = document.querySelector("#qualitiesGrid");
    const qualitiesContainer = document.querySelector(".qualitiesContainer");
    const qualitiesItem = document.querySelectorAll(".item");
    const projectsGrid = document.querySelector(".projectsGrid");
    const projects = document.querySelector(".projects");
    const skill = document.querySelectorAll(".skill");

    const projectOptions = {
      root: null,
      rootMargin: "10%",
      treshold: 1,
    };

    for (let i = 0; i < skill.length; i++) {
      const skillObserver = new IntersectionObserver((enteries) => {
        if (enteries[0].intersectionRatio <= 0) {
          if (i % 2 !== 0) {
            return (
              (skill[i].style.opacity = "0"),
              (skill[i].style.transform = "translateX(-50px)")
            );
          } else {
            return (
              (skill[i].style.opacity = "0"),
              (skill[i].style.transform = "translateX(50px)")
            );
          }
        }

        setTimeout(() => {
          skill[i].style.opacity = "1";
          skill[i].style.transform = "translateX(0)";
        }, 150);
      });
      skillObserver.observe(skill[i]);
    }

    const qualitiesObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) {
        return (
          (qualitiesContainer.style.opacity = "0"),
          (qualitiesContainer.style.transform = "translateY(200px)")
        );
      }

      setTimeout(() => {
        qualitiesContainer.style.opacity = "1";
        qualitiesContainer.style.transform = "translateY(0)";
      }, 150);
    }, projectOptions);
    qualitiesObserver.observe(qualitiesGrid);

    if (window.innerWidth < 600) {
      for (let i = 0; i < qualitiesItem.length; i++) {
        const qualitiesItemObserver = new IntersectionObserver((enteries) => {
          if (enteries[0].intersectionRatio <= 0) {
            if (i === 1) {
              return (
                (qualitiesItem[i].style.opacity = "0"),
                (qualitiesItem[i].style.transform = "translateX(100px)")
              );
            } else if (i == 2) {
              return (
                (qualitiesItem[i].style.opacity = "0"),
                (qualitiesItem[i].style.transform = "translateX(-100px)")
              );
            } else if (i == 3) {
              return (
                (qualitiesItem[i].style.opacity = "0"),
                (qualitiesItem[i].style.transform = "translateY(100px)")
              );
            }
          }

          setTimeout(() => {
            qualitiesItem[i].style.opacity = "1";
            qualitiesItem[i].style.transform = "translateX(0)";
          }, 50);
        });
        qualitiesItemObserver.observe(qualitiesItem[i]);
      }
    }

    const projectsObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) {
        projectsGrid.classList.remove("projectsAnim");
        projects.style.transform = "translateY(200px)";
        return;
      }

      setTimeout(() => {
        projectsGrid.classList.add("projectsAnim");
        projects.style.transform = "translateY(0)";
      }, 150);
    }, projectOptions);
    projectsObserver.observe(projectsGrid);

    const menuScroller = document.querySelector("#menuScroller");
    const scrollerClick = document.querySelector("#scrollerClick");
    const menuHeader = document.querySelector("#menuHeader");
    const containerInner = document.querySelector(".containerInner");
    const body = document.body;
    const limit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    window.addEventListener("scroll", () => {
      menuHeader.style.transform = "rotateY(90deg)";
      let scrollDistance = window.scrollY / (limit / 450);
      if (scrollDistance > 350) scrollDistance = 350;
      menuScroller.style.transform = `translateY(${scrollDistance}px) translate3d(0,0,0)`;
    });
    containerInner.onclick = () => {
      menuHeader.style.transform = "rotateY(90deg)";
    };
    scrollerClick.addEventListener("click", () => {
      menuHeader.style.transform = "rotateY(0deg)";
    });
    const socialLi = document.querySelector('#socialUl').getElementsByTagName('li');
    socialLi[0].onclick = () => {
      window.open('https://www.linkedin.com/in/dor-furman-4827b01aa/', '_blank').focus();
    }
    socialLi[1].onclick = () => {
      window.open('https://github.com/dorfurman', '_blank').focus();
    }
    socialLi[2].onclick = () => {
      window.open('mailto:dorfurman23@gmail.com', '_blank').focus();
    }
    socialLi[3].onclick = () => {
      window.open('https://api.whatsapp.com/send?phone=+972542444150', '_blank').focus();
    }
  };

  return (
    <div className="container">
      <Menu />
      <div className="mobileMenu">
        <div id="menuLine">
          <div id="menuScroller">
            <div id="scrollerClick">
              <FontAwesomeIcon id="rightArrow" icon={faChevronRight} />
            </div>
            <div id="menuHeader">
              <a id="menuTxt">{menuTxt}</a>
            </div>
          </div>
        </div>
      </div>
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
              <div id="welcomeDiv">
                {/* <h2>WELCOME</h2> */}
                <svg viewBox="0 0 960 300">
                  <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="80%">
                      WELCOME
                    </text>
                  </symbol>

                  <g className="g-ants">
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                  </g>
                </svg>
              </div>
              <div className="grid-item-1">
                <h3>My name is</h3>
                <h1>DOR FURMAN</h1>
                <h3 id="bottomTxt">
                  Frontend Web Developer
                  <br />& Freelancer
                </h3>
                <button id="hireMe">
                  <a>HIRE ME</a>
                </button>
              </div>
              <div className="grid-item-2">
                <div id="profileImgDiv">
                  <div className="card">
                    <img
                      src={ProfilePicture}
                      alt="Profile Image"
                      id="profile-image"
                    />
                  </div>
                </div>
                <button id="hireMeMobile">
                  <a>HIRE ME</a>
                </button>
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
              <div id="skillPara">
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
            </div>
            <div className="qualitiesContainer">
              <h1>Qualities</h1>
              <div id="qualitiesGrid">
                <div className="item">
                  <div className="itemInner">
                    <img src={NewTechnologyImg} alt="New Technologies Svg" />
                    <h3>Always learning new technologies</h3>
                    <p>
                      Love to learn new innovative technologies that improve the
                      world of tech.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="itemInner">
                    <img src={PassionImg} alt="Passion Svg" />
                    <h3>Passion for code</h3>
                    <p>
                      Ever since I remember myself i always loved the idea of
                      creating with code and the magic outcome the code has.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="itemInner">
                    <img src={SelfLearnerImg} alt="Self Learner Svg" />
                    <h3>Self Learned</h3>
                    <p>
                      Started with developing android apps and moved into web
                      development and truely fell in love.<br></br> Learned it
                      all by myself with a lot of passion and hard work.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="itemInner">
                    <img src={TeamworkImg} alt="Teamworking Svg" />
                    <h3>Teamwork is the key</h3>
                    <p>
                      I have always loved to work as a team to brainstorm a
                      creation or fix bugs. Seeing the project from a different
                      set of eyes is a gamechanger.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects">
            <div className="projectsGrid">
              <div className="projectsHeader">
                <h1>Projects</h1>
              </div>
              <div className="bouquetGrid">
                <div className="bouquetItem projectItem">
                  <img src={BouquetBG} alt="Bouquet Background" />
                </div>
                <div className="bouquetItem projectItem">
                  <img src={BouquetLogo} alt="Bouquet Logo" />
                </div>
                <div className="bouquetItem projectItem">
                  <h1>Bouquetflowers.co.il</h1>
                </div>
              </div>
              <div className="yarinGrid">
                <div className="yarinItem projectItem">
                  <img src={YarinBG} alt="Bouquet Background" />
                </div>
                <div className="yarinItem projectItem">
                  <img src={YarinLogo} alt="Bouquet Logo" />
                </div>
                <div className="yarinItem projectItem">
                  <h1>Yarindrory.co.il</h1>
                </div>
              </div>
              <div className="nitaiGrid">
                <div className="nitaiItem projectItem">
                  <img src={NitaiBG} alt="Bouquet Background" />
                </div>
                <div className="nitaiItem projectItem">
                  <img src={NitaiLogo} alt="Bouquet Logo" />
                </div>
                <div className="nitaiItem projectItem">
                  <h1>Nitaidaniel.co.il</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="test-grid">
              <div className="test-item"></div>
              <div className="test-item"></div>
              <div className="test-item"></div>
              <div className="test-item"></div>
              <div className="test-item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
