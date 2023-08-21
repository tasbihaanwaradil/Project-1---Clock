const  hourElem = document.querySelector(".hours")
const  minuteElem = document.querySelector(".minutes")
const  secondElem = document.querySelector(".seconds")


function updateClock(){
    const currentDate = new Date()
    // setTimeout(updateClock,1000)
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()
    // console.log(hours,minutes,seconds)

    const hourDeg = (hours / 12) * 360;
    hourElem.style.transform = `rotate(${hourDeg}deg)`;

    const minuteDeg = (minutes / 60) * 360;
    minuteElem.style.transform = `rotate(${minuteDeg}deg)`;

    const secondDeg = (seconds / 60) * 360;
    secondElem.style.transform = `rotate(${secondDeg}deg)`;

    console.log(hours,minutes,seconds)


    

}
// updateClock();

setInterval(updateClock , 1000)
console.log(setInterval)