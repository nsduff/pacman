("use strict");

console.log("logging");
const stage = new Stage(0, 0);
const pacman = new Pacman(0, 0, document.querySelector(".entity"));
const entity = new Entity(170, 170, "wall");
const entity2 = new Entity(255, 170, "wall");
const entity3 = new Entity(340, 170, "wall");
const entity4 = new Entity(340, 255, "wall");
const entity5 = new Entity(340, 340, "wall");
const entity6 = new Entity(595, 0, "wall");
const entity7 = new Entity(595, 85, "wall");
const entity8 = new Entity(595, 170, "wall");
const entity9 = new Entity(595, 255, "wall");
const entity10 = new Entity(595, 340, "wall");
const entity11 = new Entity(935, 0, "apple");
const entity12 = new Entity(935, 85, "apple");
pacman.mount();
pacman.move();
