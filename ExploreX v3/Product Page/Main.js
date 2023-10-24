"use strict";
////////////////////////////////////////////////////////////

let black = false;
let element_Circle = false;
let rotater = false;
let updates = 0;
let circle_Duration = 2000;

////////////////////////////////////////////////////////////

let black_Target = document.querySelector(".black");
let circle_Target = document.querySelector(".circle");
let everything = document.querySelector("body");
let content = document.querySelector(".content");

//////////////////////////////// H1 scramble Animation ////////////////////////

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmousedown = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}

/////////////////////////////////////////// circle logic ////////////////////////

var change = false;
var animation = anime({
    targets: '.circle',
    scale: {
        loop: false,
        value: 10000,
        duration: circle_Duration,
        delay: 4000,
        easing: 'easeInOutQuart',
    }
});

///////////////////////////////////////////////////////////////////////////////////

setTimeout(function () {
    element_Circle = true;
    console.log("true");
}, 4000 + circle_Duration)

//////////////////////////////////////////////// class adder /////////////////////

if (element_Circle = true) {
    setTimeout(function () {
        black_Target.classList.add("fade");
        circle_Target.classList.add("hide");
        console.log("hidden");
        content.classList.remove("hide");
        setTimeout(function () {
            black_Target.classList.add("hide");
            black = true;
        }, 2000)
    }, 4000 + circle_Duration + 2000)
};
if (black = true) {
    setTimeout(function () {
        everything.classList.remove("starting");
    }, 10000)
};
/////////////////////////////// SLIDER LOGIC ///////////////////////////////////

let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.container-review');

const startDragging = (e) => {
    mouseDown = true;
    console.log(mouseDown);
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
    mouseDown = false;
    console.log("stopped");
}

const move = (e) => {
    e.preventDefault();
    if (!mouseDown) {
        return;
    }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
}
