const buttons = document.querySelectorAll("button");

buttons.forEach((ele) => {
  ele.addEventListener("click", (evt) => {
    handleChoice(evt.target.innerHTML);
  });
});

addEventListener("keydown", (evt) => {
  handleChoice(evt.key);
});

let crash = new Audio("../sounds/crash.mp3");
let kick = new Audio("../sounds/kick-bass.mp3");
let snare = new Audio("../sounds/snare.mp3");
let tom1 = new Audio("../sounds/tom-1.mp3");
let tom2 = new Audio("../sounds/tom-2.mp3");
let tom3 = new Audio("../sounds/tom-3.mp3");
let tom4 = new Audio("../sounds/tom-4.mp3");

function handleChoice(choice) {
  // this.style.color = "white";

  switch (choice) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom4.play();
      break;
    case "s":
      tom2.play();
      break;
    case "d":
      tom3.play();
      break;
    case "j":
      snare.play();
      break;
    case "k":
      kick.play();
      break;
    case "l":
      crash.play();
      break;
    default:
      break;
  }

  // setTimeout(() => {
  //   this.style.color = "";
  // }, 1000);
}
