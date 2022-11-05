let randomNumber1 = Math.ceil(Math.random()*6);
document.querySelector(".img1").src = "images/dice"+randomNumber1+".png";

let randomNumber2 = Math.ceil(Math.random()*6);
document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}