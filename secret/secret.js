setInterval(change,200);
function change() {
    var r = Math.floor((Math.random() * 256) + 1);
    var g = Math.floor((Math.random() * 256) + 1);
    var b = Math.floor((Math.random() * 256) + 1);
    var colors = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("color").style.color = colors;
    document.getElementById("linkcolor").style.color = colors;
}