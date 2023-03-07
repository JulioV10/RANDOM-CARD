/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let icons = ["♦", "♥", "♠", "♣"];
let cardNumbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
let randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

let changeCardIcon = document.querySelectorAll(".symbol");

let cardIcon = randomNumber(0, 4);

let icon = icons[cardIcon];

for (let i = 0; i < changeCardIcon.length; i++) {
  changeCardIcon[i].textContent = icon;
  changeCardIcon[i].style.color = cardIcon < 2 ? "red" : "black";
}

document.getElementById("number").textContent =
  cardNumbers[randomNumber(0, 13)];
