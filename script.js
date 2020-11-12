let character = document.getElementById("character");
let block = document.getElementById("block");
var inputText = document.getElementById("inputText");
var restart = document.getElementById("restart");
inputText.innerHTML = "0";
var blockAnimate = attack();

function refresh() {
    location.reload();
}



function jump() {
    character.animate({
        "top": ["150px", "20px", "150px"] // [ from, to ]
    }, {
        duration: 700,
        iterations: 1
    });
}

function attack() {
    return block.animate({
        "left": ["480px", "0px"]
    }, {
        duration: 1000,
        iterations: Infinity
    });
}

let score = 0;
let isWin = false;

var loop = setInterval(() => {
    if (parseInt(getCssVal(character, "left")) >= parseInt(getCssVal(block, "left")) - 20 &&
        parseInt(getCssVal(character, "top")) >= (parseInt(getCssVal(block, "top")) + 20)) {
        console.log("You lose");
        clearInterval(loop);
        blockAnimate.cancel();
    } else if (parseInt(getCssVal(character, "left")) >= parseInt(getCssVal(block, "left"))) {
        isWin = true;
    } else {
        if (isWin) {
            score++;
            isWin = false;
            inputText.innerHTML = score;
        }
    }

}, 10);



function getCssVal(elem, property) {
    return window.getComputedStyle(elem).getPropertyValue(property);
}