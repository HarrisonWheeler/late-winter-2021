let wins = 0
let losses = 0
let ties = 0

let choices = ['rock', 'paper', 'scissors']

let winConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
}

function draw(input, compChoice){
  document.getElementById("score-table").innerHTML = `<p>
 Wins : ${wins} - Losses: ${losses} - Ties : ${ties}
  </p>`

  document.getElementById('play-zone').innerHTML = /*html*/ `
  <p>Player : ${input}</p>
  <p>Computer: ${compChoice}</p>
  `
}


function play(input){
  // console.log(input);
  let compChoice = computerChoice()
  // #region
  // console.log(compChoice, "compChoice");
  // if(input == "paper" && compChoice){
  //   ties++
  //   console.log("tie");
  // } else if(input == "rock" && compChoice){
  //   wins++
  //   console.log("got that w");
  // } else if(input == "paper" && compChoice){
  //   wins++
  //   console.log("got that w");
  // }
//#endregion
  input == compChoice ? ties++ : winConditions[input] == compChoice ? wins++ : losses++
//#region 
  // if(input == compChoice){
  //   console.log("tie!!!");
  //   ties++
  // } else if(winConditions[input] == compChoice){
  //   wins++
  //   console.log("thats a dub");
  // } else {
  //   console.log("you lose");
  //   losses++
  // }
//#endregion
  draw(input, compChoice)
}


function computerChoice(){
  return choices[Math.floor(Math.random() * choices.length)]
}

