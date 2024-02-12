/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["El perro", "Mi abuela", "Mi madre", "Mi gato", "Su caballo"];
  let action = ["se comió", "me robó", "hizo pis en", "rompió"];
  let what = ["mis deberes", "la mochila", "mi ordenador"];
  let when = [
    "justo cuando salía",
    "cuando terminé",
    "mientras yo estaba comiendo",
    "después de que me durmiese",
    "cuando no estaba mirando"
  ];

  let randomWhoIndex = Math.floor(Math.random() * who.length);
  let randomActionIndex = Math.floor(Math.random() * action.length);
  let randomWhatIndex = Math.floor(Math.random() * what.length);
  let randomWhenIndex = Math.floor(Math.random() * when.length);

  let excuse =
    who[randomWhoIndex] +
    " " +
    action[randomActionIndex] +
    " " +
    what[randomWhatIndex] +
    " " +
    when[randomWhenIndex];
  document.getElementById("excuse").innerHTML = excuse;
};
