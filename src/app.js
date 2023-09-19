/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = [
  "el",
  "nuestro",
  "tu",
  "mi",
  "su",
  "ese",
  "cualquier",
  "algun",
  "lo",
  "donde"
];
let adj = [
  "grande",
  "pequeno",
  "rápido",
  "brillante",
  "innovador",
  "divertido",
  "original",
  "creativo",
  "interesante",
  "wiki",
  "banda"
];
let noun = [
  "restaurante",
  "blog",
  "proyecto",
  "equipo",
  "sitio",
  "evento",
  "viaje",
  "negocio",
  "libro",
  "juego",
  "programa"
];

for (let i = 0; i < 11; i++) {
  console.log(
    pronoun[Math.floor(Math.random() * pronoun.length)] +
      adj[Math.floor(Math.random() * adj.length)] +
      noun[Math.floor(Math.random() * noun.length)] +
      ".com"
  );
}

