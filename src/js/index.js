("use strict");

const stage = new Stage(0, 0);
const pacman = new Pacman(0, 0, document.querySelector(".entity"));
pacman.mount();
pacman.move();
