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
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    time.textContent = hours + ":" + minutes;
});
