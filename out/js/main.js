function correctShip() {
    var r = document.getElementsByClassName("bg-black")[0].children[1];
    var h = r.clientHeight;
    r.style.marginTop = "-" + Math.round(h / 1.6) + "px";
    r.style.marginLeft = "0px";

}
correctShip();

document.addEventListener('DOMContentLoaded', function() {
    correctShip();
});

document.addEventListener('load', function() {
    correctShip();
});