setInterval(looktime,100);
function looktime() {
get = new Date();
hours = get.getHours();
min = get.getMinutes();
seconds = get.getSeconds();
isamorpm = "AM";

if(hours == 0) {
    hours = 12;
}

if(hours > 12) {
    hours = hours - 12;
    isamorpm = "PM";
}

hours = (hours < 10) ? "0" + hours : hours;
min = (min < 10) ? "0" + min : min;
seconds = (seconds < 10) ? "0" + seconds : seconds;

time = hours + ":" + min + ":" + seconds + " " + isamorpm;
document.getElementById("time").innerHTML = time;
}