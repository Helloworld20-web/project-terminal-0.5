setInterval(change,200);
function change() {
    var colors = ["red","grey"];
    document.getElementById("blink").style.color = colors;
    document.getElementById("linkcolor").style.color = colors;
}