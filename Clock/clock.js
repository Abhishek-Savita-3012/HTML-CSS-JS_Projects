let hrs = document.getElementById("hrs");
let mins = document.getElementById("min")
let sec = document.getElementById("sec");
let day = document.getElementById("day");
let date = document.getElementById("date");
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// let currentTime = new Date();
// console.log(currentTime.getHours());
// hrs.innerHTML = currentTime.getHours();
// mins.innerHTML = currentTime.getMinutes();
// sec.innerHTML = currentTime.getSeconds();

setInterval(()=>{
    let currentTime = new Date();
    //console.log(currentTime.getHours());
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    date.innerHTML = "Date : " + currentTime.getDate() + " / " + currentTime.getMonth() + " / " + currentTime.getFullYear();
    day.innerHTML = "Day : " + daysOfWeek[currentTime.getDay()];
}, 1000)    //1000 miliseconds(ms) = 1sec
