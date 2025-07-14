var things = 0
function spin() {
    var i;
    var x = document.getElementsByClassName("images");

    for (i = 0; i < x.length; i++) {``
        x[i].style.display = "none";
    }

    things++;
    if (things > x.length) {
        things = 1;
    }

    x[things - 1].style.display = "block";

    setTimeout(spin, 5000);
}
spin();