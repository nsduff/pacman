"use strict";

const TILE_SIZE = 85;

let xpos = 0;
let ypos = 0;
const pacman = document.querySelector(".pacboy-active-light");

pacman.style.top = ypos + "px";
pacman.style.left = xpos + "px";

const container = document.querySelector(".container");

document.addEventListener("keydown", (event) => {
  //Keys to get pac to move in the right direction
  if (event.code == "ArrowRight") {
    pacman.style.backgroundPositionX = "0px";
    pacman.style.backgroundPositionY = "0px";
    xpos += 85;
    console.log(xpos);
    pacman.style.left = xpos + "px";
  } else if (event.code == "ArrowLeft") {
    pacman.style.backgroundPositionX = "0px";
    pacman.style.backgroundPositionY = "255px";
    xpos -= 85;
    console.log(xpos);
    pacman.style.left = xpos + "px";
  } else if (event.code == "ArrowDown") {
    pacman.style.backgroundPositionX = "0px";
    pacman.style.backgroundPositionY = "170px";
    ypos += 85;
    console.log(ypos);
    pacman.style.top = ypos + "px";
  } else if (event.code == "ArrowUp") {
    pacman.style.backgroundPositionX = "0px";
    pacman.style.backgroundPositionY = "85px";
    ypos -= 85;
    console.log(ypos);
    pacman.style.top = ypos + "px";
  }
});
