'use strict';

/////////////////////////////////////////////

const Icse = ["Kartik", "Shaurya", "Aakshaj", "Nishan", "Darren", "Abdur", "Abhinav", "Adhya", "Aapti", "Privisha", "Taran", "Aditya", "Akshar"];
const cbseA = ["test", "more test", "so much more test"];
const cbseB = ["testB", "more testB", "so much more testB", "tester B"];
let secretName = [];
let value;
let guess = document.getElementById("guess");
let show = false;

/////////////////////////////////////////////////////////////////////////////
document.querySelector(".again").addEventListener("click", function(){
    console.log("big brain has run");
    if (value != false) {
        value = localStorage.getItem('value');
        console.log(value);
        if (value == "icse") {
            secretName = Icse;
        } else if (value == "cbsea") {
            secretName = cbseA;
        } else if (value = "cbseb") {
            secretName = cbseB;
        };
        const randomElement = secretName[Math.floor(Math.random() * secretName.length)];
        document.querySelector('#guess').textContent = randomElement;
    }else {
        console.log("error");
    }
});

//////////////////////////////////////////////////////////////////////////////

function cacher() {
    var list = document.getElementById("list");
    value = list.value;
    localStorage.setItem("value", value);
    console.log("cached");
}

//////////////////////////////////////////////////////////////////////////////
window.addEventListener("online", function () {
    alert("Your online");
});

window.addEventListener("offline", function () {
    console.log("your offline");
});
/////////////////////////////////////////// settings /////////////////////////
let target = document.querySelector(".chooser")
let bool = true;

function Setting() {
    if (bool == false) {
        target.classList.add("hide");
        bool = true;
        console.log("hidden");
    } else if (bool == true) {
        target.classList.remove("hide");
        bool = false;
        console.log("visible");
    }
};
//////////////////////////////////// caching ////////////////////

//if (!localStorage.getItem('value')) {
//    populateStorage();
//    console.log("cacsehing");
//} else {
//    setStyles();
//    console.log("it works!-");
//    console.log("1" + value);
//}
//
//function populateStorage() {
//    localStorage.setItem('value', value);
//    setStyles();
//}
//
//function setStyles() {
//    value = localStorage.getItem('value');
//    console.log(value)
//}
