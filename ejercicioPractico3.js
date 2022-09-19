import { shortCuts } from "./shortCuts.js";
import { moveBall } from "./moveBall.js";

addEventListener("DOMContentLoaded", (e) => {
  const d = document;

  d.addEventListener("keyup", (e) => {
    if (e.altKey) {
      shortCuts(e);
    }
  });

  d.addEventListener("keydown", (e) => {
    const ArrowDirections = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
    if (ArrowDirections.includes(e.key)) moveBall(e, "#ball", "#box");
  });
});
