'use strict';

const Icse = ["Kartik", "Shaurya", "Aakshaj", "Nishan", "Darren", "Abdur", "Abhinav", "Adhya", "Aapti", "Privisha", "Taran", "Aditya", "Akshar"];
const cbseA = ["test", "more test", "so much more test"];
const cbseB = ["testB", "more testB", "so much more testB", "tester B"];
let secretName = [];

document.querySelector(".again").addEventListener("click", function () {
    let secretNumber = Math.floor(Math.random() * secretName.length);
    document.querySelector(".guess").textContent = secretName[secretNumber];
    console.log(secretNumber);
    var name = localStorage.getItem("name");
    console.log(name);
});


function Selector() {
    var list = document.getElementById("class");
    var value = list.value;
    if (value == "icse") {
        secretName = Icse;
    } else if (value == "cbsea") {
        secretName = cbseA;
    } else if (value == "cbseb") {
        secretName = cbseB;
    };
};


window.addEventListener("online", function() {
  alert("Your online");
});

window.addEventListener("offline", function() {
  console.log("your offline");
});
