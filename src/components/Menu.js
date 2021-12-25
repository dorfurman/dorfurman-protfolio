import React, { useState } from "react";
import "../styles/main.css";

const Menu = () => {
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  const nav = document.querySelector(".nav");

  const [state, setMenu] = useState(false);

  const changeMenu = () => {
    setMenu(() => {
      return !state;
    });
    switch (state) {
      case false:
        main.style.transform = "none";
        main.style.filter = "none";
        nav.style.display = "none";
        console.log(state);
        break;
      case true:
        container.style.perspective = "800px";
        main.style.transform = "rotateY(-20deg)";
        main.style.filter = "blur(5px)";
        nav.style.display = "block";
        console.log(state);
        break;
    }
  };

  return (
    <div>
      <div className="menu" onClick={changeMenu}>
        <h1>Menu</h1>
      </div>
      <nav className="nav">
        <ul>
          <li></li>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>More</a>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
