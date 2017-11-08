document.onmousemove = move;
window.onscroll = function () {
    progress();
    logo();
}
load();
scrolling();
logo();


function scrollTop() {
    //возвращяет текущий скролл
    var html = document.documentElement;
    var body = document.body;
    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)
    return scrollTop;
}

function load() {
    if (window.onload) {
        var c = document.getElementById("load");
        c.style = "display:none;"
    } else {
        var c = document.getElementById("load");
        c.style = "display:block;"
    }
}

function page(n) {

    var container = document.getElementsByClassName("container")[0];
    for (var i = 0; i < container.children.length; i++) {
        container.children[i].classList = "page"
    }
    container.children[n - 1].classList = "page show";
    if (n == 1) {
        document.querySelector(".subMenu").id = "hide";

    } else {
        document.querySelector(".subMenu").id = "sh";
    }

}

function move(event) {
    const ship1 = document.getElementById('ship1');
    const bg = document.getElementById('bg-black');
    const p2_1 = document.getElementById('p2-1');
    var w = document.body.clientWidth;
    var h = document.body.clientHeight;
    var x = event.clientX;
    var y = event.clientY;

    bg.style.width = x / 100 + w / 2 - ((w * 4) / 100) + 'px';

    if (w > 1400) {
        p2_1.style.left = x / 30 + (w / 2) - 500 + 'px';
    } else {
        p2_1.style.left = x / 30 + (w / 2) - 400 + 'px';
    }

    console.log(w);
}

function scrolling() {
    var linkNav = document.querySelectorAll('[href^="#nav"]'),
        V = 0.2;  // скорость, может иметь дробное значение через точку
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].onclick = function () {
            var w = window.pageYOffset,
                hash = this.href.replace(/[^#]*(.*)/, '$1'),
                t = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step);

            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash
                }
            }

            return false;
        }
    }
}

function progress() {
    var top1 = scrollTop();
    var lastPageH = document.querySelectorAll(".p")[document.querySelectorAll(".p").length-1].clientHeight;
    var maxScroll = 4000;
    var el = document.getElementById("pr");
    var o = top1 / maxScroll;
    el.style.width = (o * 100 | 0) + "%";
    console.log(maxScroll);
}

function logo() {
    var scroll = scrollTop();
    var page = document.querySelectorAll(".p");
    var h=[];
    var logo = document.getElementById("logo").children[0].children[0];
    for(var i =0;i<page.length;i++){

        h[i] = (i === 0)?document.querySelectorAll(".p")[i].clientHeight-75:h[i-1]+document.querySelectorAll(".p")[i].clientHeight-75;
    }
    logo.style.filter = "invert(1)";
    if(scroll>h[0] && scroll<h[1]){
        logo.style.filter = "invert(0)";
    }
    if(scroll>h[1] && scroll<h[2]){
        logo.style.filter = "invert(1)";
    }
    if(scroll>h[2] && scroll<h[3]){
        logo.style.filter = "invert(0)";
    }
    if(scroll>h[3] && scroll<h[4]){
        logo.style.filter = "invert(1)";
    }
    if(scroll>h[4]){
        logo.style.filter = "invert(0)";
    }
    // console.log(scroll,);

}