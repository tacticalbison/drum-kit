let buttons = document.querySelectorAll("button");

buttons.forEach((ele) => {
  ele.addEventListener("click", handleClick);
});

let crash = new Audio("../sounds/crash.mp3");
let kick = new Audio("../sounds/kick-bass.mp3");
let snare = new Audio("../sounds/snare.mp3");
let tom1 = new Audio("../sounds/tom-1.mp3");
let tom2 = new Audio("../sounds/tom-2.mp3");
let tom3 = new Audio("../sounds/tom-3.mp3");
let tom4 = new Audio("../sounds/tom-4.mp3");

function handleClick() {
  this.style.color = "white";

  let choice = this.innerHTML;
  switch (choice) {
    case "w":
      tom1.play();
    case "a":
      tom4.play();
    case "s":
      tom2.play();
    case "d":
      tom3.play();
    case "j":
      snare.play();
    case "k":
      kick.play();
    case "l":
      crash.play();
  }

  setTimeout(() => {
    this.style.color = "";
  }, 1000);
}
