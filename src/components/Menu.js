import React, { useState } from "react";
import "../styles/main.css";

const Menu = () => {
  const [state, setMenu] = useState(true);

  const changeMenu = () => {
    const containerInner = document.querySelector(".containerInner");
    const main = document.querySelector(".main");
    const navUl = document.querySelector("#navUl");
    setMenu(!state);
    switch (state) {
      case false:
        main.classList.remove("rotateY");
        main.classList.add("rotateYBW");
        navUl.classList.remove("navActive");
        setTimeout(() => {
          main.style.filter = "blur(0)";
        }, 400);
        break;
      case true:
        main.classList.remove("rotateYBW");
        main.classList.add("rotateY");
        navUl.classList.add("navActive");
        setTimeout(() => {
          main.style.filter = "blur(10px)";
        }, 300);
        break;
    }
  };

  // window.onload = () => {
  //   const navUl = document.querySelector("#navUl");
  //   const navLi = document.querySelectorAll(".navLi");
  //   const semiCircle = document.querySelectorAll(".semiCircle");
  //   let v;
  //   for (let i = 0; i < navLi.length; i++) {
  //     navLi[i].addEventListener("mouseover", () => {
  //       // navLi[i].style.boxShadow = "0 0 15px 0 #6930c3";
  //       // navLi[i].clipPath = "inset(0px -15px 0px 0px)";
  //       if (v !== undefined) {
  //         semiCircle[v].classList.remove("menuBall");
  //         semiCircle[v].classList.add("menuBallBW");
  //       }
  //       semiCircle[i].classList.remove("menuBallBW");
  //       semiCircle[i].classList.add("menuBall");
  //       v = i;
  //     });
  //     navUl.addEventListener("mouseout", () => {});
  //     // semiCircle[i].classList.remove("menuBall");
  //     // semiCircle[i].classList.add("menuBallBW");
  //   }
  // };

  return (
    <div>
      <div className="menu"></div>
      <nav className="nav">
        <h1 onClick={changeMenu}>Menu</h1>
        <ul id="navUl">
          <li></li>
          <li className="navLi">
            <a>Home</a>
            <div className="semiCircle"></div>
          </li>
          <li className="navLi">
            <a>About</a>
            <div className="semiCircle"></div>
          </li>
          <li className="navLi">
            <a>Projects</a>
            <div className="semiCircle"></div>
          </li>
          <li className="navLi">
            <a>Contact</a>
            <div className="semiCircle"></div>
          </li>
          <li className="navLi">
            <a>More</a>
            <div className="semiCircle"></div>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
