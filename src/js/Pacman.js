class Pacman {
  constructor(xpos, ypos, pacman) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.pacman = pacman;
    this.is_open = false;
    this.tile_size = 85;
  }
  //initialize pacman in top left position
  mount = () => {
    this.pacman.style.top = this.ypos + "px";
    this.pacman.style.left = this.xpos + "px";
  };
  move = () => {
    document.addEventListener("keydown", (event) => {
      //Keys to get pac to move in the right direction
      this.is_open = !this.is_open;
      if (this.xpos == 850 && this.ypos == 0) {
        setTimeout(alert("YOU WIN!"), 500);
        const apple = document.querySelector(".entity--apple");
        apple.style.display = "none";
      }
      if (event.code == "ArrowRight" && this.xpos <= 850) {
        //move right
        this.pacman.style.backgroundPositionX = "0px";
        this.pacman.style.backgroundPositionY = "0px";
        this.xpos += this.tile_size;
        console.log(this.xpos);
        this.pacman.style.left = this.xpos + "px";
        if (this.is_open) {
          this.pacman.style.backgroundPositionX = "85px";
        } else {
          this.pacman.style.backgroundPositionX = "0px";
        }
      } else if (event.code == "ArrowLeft" && this.xpos > 0) {
        //move left
        this.pacman.style.backgroundPositionX = "0px";
        this.pacman.style.backgroundPositionY = "255px";
        this.xpos -= this.tile_size;
        this.pacman.style.left = this.xpos + "px";
        if (this.is_open) {
          this.pacman.style.backgroundPositionX = "85px";
        } else {
          this.pacman.style.backgroundPositionX = "0px";
        }
      } else if (event.code == "ArrowDown" && this.ypos < 425) {
        //move down
        this.pacman.style.backgroundPositionX = "0px";
        this.pacman.style.backgroundPositionY = "170px";
        this.ypos += this.tile_size;
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
        this.ypos -= this.tile_size;
        this.pacman.style.top = this.ypos + "px";
        if (this.is_open) {
          this.pacman.style.backgroundPositionX = "85px";
        } else {
          this.pacman.style.backgroundPositionX = "0px";
        }
      }
    });
  };
}
