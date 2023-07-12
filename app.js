// create random numbers between 1 and 6, inclusive
var randomNum1 = Math.floor(6*Math.random()) + 1;
var randomNum2 = Math.floor(6*Math.random()) + 1;
var link1="images/dice"+randomNum1+".png";
var link2="images/dice"+randomNum2+".png";
document.querySelector(".img1").setAttribute("src",link1);
document.querySelector(".img2").setAttribute("src",link2);
if (randomNum1>randomNum2) {
    document.querySelector("h1").textContent="Player 1 Won 🎉";
} else if (randomNum1<randomNum2) {
    document.querySelector("h1").textContent="🎉 Player 2 Won";
} else {
    document.querySelector("h1").textContent=" 😒 Draw 😒";
}
