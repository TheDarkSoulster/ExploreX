//setInterval(() => {
//    const time = document.querySelector("#time");
//    let date = new Date();
//    let hours = date.getHours();
//    let minutes = date.getMinutes();
//    let seconds = date.getSeconds();
//    let milliseconds = date.getMilliseconds();
//    time.textContent = hours + ":" + minutes;
//});

const time = document.querySelector("#time"); = {
  format: (date: Date): string => {
    const hours: string = T.formatHours(date.getHours()),
          minutes: string = date.getMinutes(),
          seconds: string = date.getSeconds();
    
    return `${hours}:${T.formatSegment(minutes)}`;
  },
  formatHours: (hours: number): string => {
    return hours % 12 === 0 ? 12 : hours % 12;
  },
  formatSegment: (segment: number): string => {
    return segment < 10 ? `0${segment}` : segment;
  }
}
