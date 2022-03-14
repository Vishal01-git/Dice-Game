randomeNumber1 = Math.floor(Math.random()*6+1);
console.log(randomeNumber1);
var randomeImage1 = "./images/" + "dice" + randomeNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomeImage1);

randomeNumber2 = Math.floor(Math.random() * 6 + 1);
var randomeImage2 = "./images/" + "dice" + randomeNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomeImage2);

if (randomeNumber1 > randomeNumber2) {
    document.querySelector("h1").innerHTML = 'Player 1 wins'; 
}
else if(randomeNumber2>randomeNumber1){
    document.querySelector("h1").innerHTML = 'Player 2 wins';
} else {
    document.querySelector("h1").innerHTML = 'Draw!';
}