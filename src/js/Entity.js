class Entity {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    entityArray = [];
    //declaring variables and pushing entities as array
    //don't know how yet =(
  }

  //mounting entities
  mount() {
    const entity = document.querySelector(".entity");
    const apple = document.querySelector(".entity--apple");
    const bomb = document.querySelector(".entity--apple");
    const tomb = document.querySelector(".entity--tomb");

    entityArray.push(this.entity);
  }
  //creating collision detection with entities
  collisionDetection(x, y) {
    if (entity) {
      return entity;
    } else {
      return null;
    }
  }
}
