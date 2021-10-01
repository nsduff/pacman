"use strict";
class Pacman {
  constructor(xpos, ypos, pacman) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.pacman = pacman;
    this.is_open = false;
  }
  //initialize pacman in top left position
  mount = () => {
    this.pacman.style.top = this.ypos + "px";
    this.pacman.style.left = this.xpos + "px";
    const container = document.querySelector(".container");
  };
  move = () => {
    document.addEventListener("keydown", (event) => {
      //Keys to get pac to move in the right direction
      this.is_open = !this.is_open;
      if (event.code == "ArrowRight" && this.xpos <= 1020) {
        //move right
        this.pacman.style.backgroundPositionX = "0px";
        this.pacman.style.backgroundPositionY = "0px";
        this.xpos += 85;
        console.log(this.xpos);
        this.pacman.style.left = this.xpos + "px";
        console.log(this.is_open);
        if (this.is_open) {
          this.pacman.style.backgroundPositionX = "85px";
        } else {
          this.pacman.style.backgroundPositionX = "0px";
        }
      } else if (event.code == "ArrowLeft" && this.xpos > 0) {
        //move left
        this.pacman.style.backgroundPositionX = "0px";
        this.pacman.style.backgroundPositionY = "255px";
        this.xpos -= 85;
        console.log(this.xpos);
        this.pacman.style.left = this.xpos + "px";
        if (this.is_open) {
          this.pacman.style.backgroundPositionX = "85px";
        } else {
          this.pacman.style.backgroundPositionX = "0px";
        }
      } else if (event.code == "ArrowDown" && this.ypos < 510) {
        //move down
        this.pacman.style.backgroundPositionX = "0px";
        this.pacman.style.backgroundPositionY = "170px";
        this.ypos += 85;
        console.log(this.ypos);
        this.pacman.style.top = this.ypos + "px";
        if (this.is_open) {
          this.pacman.style.backgroundPositionX = "85px";
        } else {
          this.pacman.style.backgroundPositionX = "0px";
        }
      } else if (event.code == "ArrowUp" && this.ypos > 0) {
        //move up
        this.pacman.style.backgroundPositionX = "0px";
        this.pacman.style.backgroundPositionY = "85px";
        this.ypos -= 85;
        console.log(this.ypos);
        this.pacman.style.top = this.ypos + "px";
        if (this.is_open) {
          this.pacman.style.backgroundPositionX = "85px";
        } else {
          this.pacman.style.backgroundPositionX = "0px";
        }
      }
    });
    // this.mount();
  };
}

const pacman = new Pacman(0, 0, document.querySelector(".entity"));
pacman.mount();
pacman.move();
