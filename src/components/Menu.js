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
          main.style.filter = "blur(5px)";
        }, 300);
        break;
    }
  };

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
