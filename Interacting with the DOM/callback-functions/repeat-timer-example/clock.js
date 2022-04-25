const clockSection = document.getElementById("clock");

function getTime() {
    function pad(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    }

    const now = new Date();

    const hh = pad(now.getHours());
    const mm = pad(now.getMinutes());
    const ss = pad(now.getSeconds());

    return `${hh}:${mm}:${ss}`;
}

function tickClock() {
    clockSection.textContent = getTime();
}
//this posts the time every second and the extra tick clock on the top is used because setInterval doesnt show the clock until one second, we can get around this by just posting the time once the page loads.
tickClock();
setInterval(tickClock, 1000);