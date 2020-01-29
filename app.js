
// Generate random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Set random image name
var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomDiceImage2 = "dice"+randomNumber2+".png";

// Get random image from images folder
var randomImageSource1 = "images/"+randomDiceImage1;
var randomImageSource2 = "images/"+randomDiceImage2;

// Set html images to random images
// document.querySelector('.img1').src = "images/dice1.png";
document.querySelector('.img1').setAttribute("src", randomImageSource1);
document.querySelector('.img2').setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
