"use strict";
import { toggleThemes } from "./toggleThemes.js";

const main = () => {
  toggleThemes();

  const setWidth = (sourse, raw) => {
    // const sourseNode = document.querySelector('.navbar-brand')
    const sourseNode = document.querySelector(sourse);
    const rawNode = document.querySelector(raw);
    const width = sourseNode.getBoundingClientRect().width;
    rawNode.style.width = width + "px";
  };
  setWidth(".navbar-brand", ".empty");
};
main()
