var cont = document.getElementsByClassName("cont")[0];
var i = document.getElementsByClassName("i")[0];

i.onclick= function () {
    i.id = "hide";
};


cont.onclick = function (event) {
    var img = event.target;

    var ii = document.getElementById("cimg");
    var i = document.getElementsByClassName("i")[0];
    var link = img.getAttribute("style");

    var s1 = link.split(";");
    var path= s1[0].slice(16,-5);
    var format= s1[0].slice(-5,-1);

    var ready = path+"-big"+format;
    i.id = "show";
    ii.setAttribute("src",ready);
    console.log(ready);
};