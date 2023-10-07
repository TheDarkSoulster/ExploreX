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
    
    // Convert hours to 12-hour format
    hours = (hours % 12) || 12;
    
    time.textContent = hours + ":" + minutes;
});


       const apiKey = 'c241d4e334702b5be0f81c3452c2960d';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&units=metric&appid=${apiKey}`;

        async function getTemperature() {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const temperatureElement = document.getElementById('temperature');

                if (data.main && data.main.temp) {
                    temperatureElement.textContent = data.main.temp.toFixed(1);
                } else {
                    temperatureElement.textContent = 'N/A';
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        getTemperature();
