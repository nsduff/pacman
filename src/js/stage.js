class Stage {
  constructor() {
    const container = document.querySelector(".container");
    let div = document.createElement("div");
    div.classList.add("stage");
    const pacman = document.createElement("div");
    pacman.classList = "entity entity--pac pacboy-active-light";
    div.appendChild(pacman);
    container.appendChild(div);
  }
}
