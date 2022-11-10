import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {Character} from "./RPG.js";

window.addEventListener("load", function() {
  const create = document.getElementById("create");
  create.addEventListener("submit", create);
});

function create(event) {
  event.preventDefault();
 let name = document.getElementById("charName").value;
 let character1 = new Character(name);
}