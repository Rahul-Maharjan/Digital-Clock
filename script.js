let hour = document.getElementById("Hours")
let mins = document.getElementById("Mins")
let sec = document.getElementById("Sec")


setInterval(() => {
    let currentTime = new Date();
    hour.innerHTML = currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
}, 1000)

