class Stage {
  constructor() {
    const container = document.querySelector(".container");
    let div = document.createElement("div");
    div.classList.add("stage");
    const packman = document.createElement("div");
    packman.classList = "entity entity--pac pacboy-active-light";
    div.appendChild(packman);
    container.appendChild(div);
    console.log("hi");
  }
}
