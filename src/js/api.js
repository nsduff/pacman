"use strict";

fetch(
  `https://classes.codingbootcamp.cz/assets/classes/api/pacman.php?width=10&height=8`
)
  .then((resp) => resp.json())

  .then((json) => {
    console.log(json);
  });
