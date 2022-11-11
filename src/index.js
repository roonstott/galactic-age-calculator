import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Character, Game} from "./RPG.js";

window.addEventListener("load", function(event) {
  event.preventDefault();
  const create = document.getElementById("char-builder");
  create.addEventListener("submit", createChar);
  document.getElementById("fight-btn").addEventListener("click", startBattle);
});

let game1 = new Game();

function createChar(event) {
  event.preventDefault();
  let name = document.getElementById("charName").value;
  let character1 = new Character();
  character1.name = name; 
  game1.character = character1;
  document.getElementById("openPage").setAttribute("class", "hidden");
  document.getElementById("gamePage").setAttribute("class", "");
  document.getElementById("player-stats").innerHTML = "Name: " + character1.name + "\nHP:" + character1.health;
}

// function startBattle() {
//   document.getElementById("fightHidden").setAttribute("class", "hidden");
//   game1.opponent1;
//   game1.character;
//   while (game1.opponent1.health > 0) {
//     characterAttack(game1.character, game1.opponent1);
//     document.getElementById("player-stats").innerHTML = "Name: " + game1.character.name + "\nHP:" + game1.character.health;
//     document.getElementById("opponent-stats").innerHTML = "Name: " + game1.opponent1.name + "\nHP:" + game1.opponent1.health;
//   }
//   console.log(game1.opponent1.health);
// }

// function characterAttack(character, opponent) {
//   console.log("characterAttack");
//   let counter = false;
//   function registerClick() {
//     counter = true;
//   }
//   console.log(counter);
//   let attackBtn = document.createElement("button");
//   attackBtn.append("Attack!");
//   attackBtn.setAttribute("type", "button");
//   attackBtn.addEventListener("click", registerClick);
//   document.getElementById("attack-btn").appendChild(attackBtn);
//   function timer() {
//     if (counter === true) {
//       opponent.health -= character.strength;
//     }
//     attackBtn.parentElement.removeChild(attackBtn);
//   }
//   setTimeout(() => {timer();}, 1000);
// }