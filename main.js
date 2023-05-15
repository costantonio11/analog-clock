// Ora passiamo a JavaScript per far funzionare il nostro orologio 

function showClock () {
    let h = document.getElementsByClassName("hour")[0];
    let m = document.getElementsByClassName("minute")[0];
    let s = document.getElementsByClassName("second")[0];

    let date = new Date();

    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    h.style.transform = `rotate(${30 * hours + minute / 2 }deg)`;
    m.style.transform = `rotate(${6 * minute}deg)`;
    s.style.transform = `rotate(${6 *second}deg)`;
}
setInterval(showClock, 1000)