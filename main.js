//setInterval(() => {
//    const time = document.querySelector("#time");
//    let date = new Date();
//    let hours = date.getHours();
//    let minutes = date.getMinutes();
//    let seconds = date.getSeconds();
//    let milliseconds = date.getMilliseconds();
//    time.textContent = hours + ":" + minutes;
//});

setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let period = hours >= 12 ? "ᴾᴹ" : "ᴬᴹ";
    
    // Convert hours to 12-hour format
    hours = (hours % 12) || 12;
    
    time.textContent = hours + ":" + minutes + " " + period;
});
