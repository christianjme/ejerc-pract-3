let moveXPx = 0,
  moveYPx = 0;

export function moveBall(e, ballSelector, boxSelector) {
  const ballElement = document.querySelector(ballSelector),
  boxElement = document.querySelector(boxSelector),
  limitsBall = ballElement.getBoundingClientRect(),
  limitsBox = boxElement.getBoundingClientRect()

  // console.log(limitsBall,limitsBox)
  switch (e.key) {
    case "ArrowLeft":
      e.preventDefault();
      if (limitsBall.left > limitsBox.left) moveXPx--;
        ballElement.style.transform = `translate(${moveXPx*3}px, ${moveYPx*3}px)`;
      break;
    case "ArrowRight":
      e.preventDefault();
      if (limitsBox.right > limitsBall.right +3) moveXPx++;
      ballElement.style.transform = `translate(${moveXPx*3}px, ${moveYPx*3}px)`;
      break;
    case "ArrowUp":
      e.preventDefault();
      if (limitsBox.top < limitsBall.top) moveYPx--;
      ballElement.style.transform = `translate(${moveXPx*3}px, ${moveYPx*3}px)`;
      break;
    case "ArrowDown":
      e.preventDefault();
      if (limitsBall.bottom < limitsBox.bottom) moveYPx++;
      ballElement.style.transform = `translate(${moveXPx*3}px, ${moveYPx*3}px)`;
      break;
  }
}
