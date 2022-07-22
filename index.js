function rollDice(){
  var randomNumber1 = 1 + Math.floor(Math.random()*6);
  var img1dice = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", img1dice);

  var randomNumber2 = 1 + Math.floor(Math.random()*6);
  var img2dice = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", img2dice);

  if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩Player 1 wins!";
  } else if(randomNumber1 < randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player 2 wins!🚩";
  } else {
    document.querySelector(".container h1").innerHTML = "Draw!";
  }
}

if(window.performance.navigation.type === 1){
  rollDice();
}



// document.getElementsByTagName("img")[0].setAttribute("src", img1dice);
