let character = document.getElementById("character");
let block = document.getElementById("block");
var inputText = document.getElementById("inputText");
var restart = document.getElementById("restart");

inputText.innerHTML = "0";
var blockAnimates = attack();

function refresh() {
    location.reload();
}



function jump() {
    character.style.backgroundImage = "url('img/jump2.png')";
    setTimeout(function () {
        character.style.backgroundImage = "url('img/chrc_idle.png')";
    }, 700);
    character.animate({
        "top": ["210px", "30px", "210px"],
        offset: [0, 0.6, 1],
        easing: ['ease-out', 'ease-in'],
    }, {
        duration: 700,
        iterations: 1
    });
}


function attack() {
    return [
        block.animate({
            "left": ["740px", "0px"],
        }, {
            duration: 1800,
            iterations: Infinity
        }),
        block.animate({
            "transform": 'rotate(-360deg)'
        }, {
            duration: 700,
            iterations: Infinity
        })

    ]
}

let score = 0;
let isWin = false;

var loop = setInterval(() => {
    if (parseInt(getCssVal(character, "left")) >= parseInt(getCssVal(block, "left")) - 65 &&
        parseInt(getCssVal(character, "left")) <= parseInt(getCssVal(block, "left")) + 65 &&
        parseInt(getCssVal(character, "top")) >= (parseInt(getCssVal(block, "top")) + 20)) {
        clearInterval(loop);
        blockAnimates[0].cancel();
        blockAnimates[1].cancel();
        restart.style.visibility = "visible";
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