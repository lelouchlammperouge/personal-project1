let rocks = document.getElementById("rock-img");
let paper = document.getElementById("paper-img");
let scissors = document.getElementById("scissors-img");
let play = document.getElementById("button");

rocks.addEventListener("click", selectRocks);
paper.addEventListener("click", selectPaper);
scissors.addEventListener("click", selectScissors);

function selectRocks() {
  scissors.classList.remove("active");
  paper.classList.remove("active");
  rocks.classList.add("active");
  character = "rock";
  document.getElementById("output").innerHTML = "paper";
}

function selectPaper() {
  scissors.classList.remove("active");
  paper.classList.add("active");
  rocks.classList.remove("active");
  character = "paper";
  document.getElementById("output").innerHTML = "scissors";
}

function selectScissors() {
  scissors.classList.add("active");
  paper.classList.remove("active");
  rocks.classList.remove("active");
  character = "scissors";
  document.getElementById("output").innerHTML = "rock";
}
