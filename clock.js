
const clockContainer = document.querySelector("div.js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText =  `${hours < 10 ? `0${hours}` : hours}`
    clockTitle.innerText += `:${minutes < 10 ? `0${minutes}` : minutes}`
    clockTitle.innerText += `:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    setInterval(getTime,1000);
}

init();