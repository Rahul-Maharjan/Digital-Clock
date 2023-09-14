let hour = document.getElementById("Hours")
let mins = document.getElementById("Mins")
let sec = document.getElementById("Sec")


setInterval(() => {
    let currentTime = new Date();
    let hour24 = currentTime.getHours();
    hour.innerHTML = hour24 % 12;
    mins.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
}, 1000)

