var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var randButton = document.getElementById("rand");

css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; // set initial values

function gradientChange(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randColorGenerator(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeToRandColor(){
    color1.value = randColorGenerator();
    color2.value = randColorGenerator();
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", gradientChange);
color2.addEventListener("input", gradientChange);
randButton.addEventListener("click", changeToRandColor);

