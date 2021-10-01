class Entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;

    const element = document.createElement("div");
    const stage = document.querySelector(".stage");
    // const pacman = document.querySelector(".entity");
    element.style.top = this.y + "px";
    element.style.left = this.x + "px";
    if (type === "wall") {
      //   const wall = document.createElement("div");
      element.classList.add("entity--wall");
      element.classList.add("entity");
      stage.appendChild(element);
    } else if (type === "apple") {
      element.classList.add("entity--apple");
      element.classList.add("entity");
      stage.appendChild(element);
    }
    // if (type === "wall") {
    //     return null;
    // } else if (type === "bomb") {
    // const bomb = document.createElement("div");

    // element.classList.add("entity--bomb");
    // element.classList.add("entity");
    // Math.random() > 0.5
    //   ? console.log("Lucky!")
    //   : pacman.classList.add(".--tomb");
    // stage.appendChild(element);
    // } else if (type === "apple") {
    // const stage = document.querySelector(".stage");
    // const apple = document.createElement("div");
    // apple.classList.add("entity--apple");
    // stage.appendChild(apple);
  }

  //mounting entities
  mount() {
    this.type.style.top = this.y + "px";
    this.type.style.left = this.x + "px";
  }
  //creating collision detection with entities

  //   collisionDetection(x, y) {
  //     if (entity) {
  //       return entity;
  //     } else {
  //       return null;
  //     }
  //   }
  //   mount();
  //
}
