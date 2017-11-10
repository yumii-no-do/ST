document.onmousemove = move;
window.onscroll = function () {
    progress2();
    logo();
}

load();
scrolling();
setColor();


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
    var d = n;
    var container = document.getElementsByClassName("container")[0];
    for (var i = 0; i < container.children.length; i++) {
        container.children[i].classList = "page"
    }
    container.children[n - 1].classList = "page show";
    document.querySelector(".subMenu").id = "hide";
    document.getElementById("pr").style.opacity = "0";

    if (d === 1) {
        document.querySelector(".subMenu").id = "hide";
        var logo = document.getElementById("logo").children[0].children[0];
        logo.style.filter = "invert(1)";
    }
    if (d === 2) {
        document.getElementById("pr").style.opacity = "1";
        document.querySelector(".subMenu").id = "sh";
    }
    if (d === 3) {

        window.onscroll = function () {
            var logo = document.getElementById("logo").children[0].children[0];
            logo.style.filter = "invert(0)";
        }
    }

}

function move(event) {
    const ship1 = document.getElementById('ship1');
    const bg = document.getElementById('bg-black');
    const p2_1 = document.getElementById('p2-1');
    const p2_2 = document.getElementById('p2-2');
    const p23img = document.getElementById('p2-3-1img');
    const p24img = document.getElementById('p2-3-2img');
    const p251img = document.getElementById('p2-4-1img');
    const p252img = document.getElementById('p2-4-2img');
    var w = document.body.clientWidth;
    var h = document.body.clientHeight;
    var x = event.clientX;
    var y = event.clientY;

    bg.style.width = x / 100 + w / 2 - ((w * 4) / 100) + 'px';

    if (w > 1600) {
        p2_1.style.left = -x / 30 + (w / 2) - 500 + 'px';
        p2_2.style.left = x / 30 + (w / 2) - 1100 + 'px';
        p2_2.style.top = y / 50 + (h / 2) - 0 + 'px';

        p23img.style.top = -y / 70 + (h / 2) - 500 + 'px';
        p23img.style.left = -x / 80 + (w / 2) - 800 + 'px';
        p24img.style.top = y / 70 + (h / 2) - 450 + 'px';
        p24img.style.left = x / 80 + (w / 2) - 850 + 'px';

        p251img.style.top = -y / 70 + (h / 2) - 500 + 'px';
        p251img.style.left = -x / 80 + (w / 2) - 850 + 'px';
        p252img.style.top = y / 70 + (h / 2) - 500 + 'px';
        p252img.style.left = x / 80 + (w / 2) - 1000 + 'px';
    } else {
        p2_1.style.left = -x / 30 + (w / 2) - 400 + 'px';
        p2_2.style.left = x / 30 + (w / 2) - 900 + 'px';
        p2_2.style.top = y / 50 + (h / 2) - 0 + 'px';

        p23img.style.top = -y / 70 + (h / 2) - 450 + 'px';
        p23img.style.left = -x / 80 + (w / 2) - 600 + 'px';
        p24img.style.top = y / 70 + (h / 2) - 450 + 'px';
        p24img.style.left = x / 80 + (w / 2) - 600 + 'px';

        p251img.style.top = -y / 70 + (h / 2) - 400 + 'px';
        p251img.style.left = -x / 80 + (w / 2) - 550 + 'px';
        p252img.style.top = y / 70 + (h / 2) - 400 + 'px';
        p252img.style.left = x / 80 + (w / 2) - 800 + 'px';
    }
    if (w < 1200) {
        p2_1.style.left = "";
        p2_2.style.left = "";
        p2_2.style.top = "";
        p23img.style.top = "";
        p23img.style.left = "";
        p24img.style.top = "";
        p24img.style.left = "";
        p251img.style.top = "";
        p251img.style.left = "";
        p252img.style.top = "";
        p252img.style.left = "";
    }

    // console.log(w);
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

function progress2() {
    var top1 = scrollTop();
    var lastPageH = document.querySelectorAll(".p")[document.querySelectorAll(".p").length - 1].clientHeight;
    var p3 = document.getElementsByClassName("p3-cont")[0].clientHeight;
    var maxScroll = 5427;
    var el = document.getElementById("pr");
    var o = top1 / maxScroll;
    el.style.width = (o * 100 | 0) + "%";

}

function logo() {
    var scroll = scrollTop();
    var page = document.querySelectorAll(".p");
    var h = [];
    var logo = document.getElementById("logo").children[0].children[0];
    for (var i = 0; i < page.length; i++) {

        h[i] = (i === 0) ? document.querySelectorAll(".p")[i].clientHeight - 75 : h[i - 1] + document.querySelectorAll(".p")[i].clientHeight - 75;
    }
    logo.style.filter = "invert(1)";
    if (scroll > h[0] && scroll < h[1]) {
        logo.style.filter = "invert(0)";
    }
    if (scroll > h[1] + 10 && scroll < h[1] + 230) {
        logo.style.filter = "invert(1)";
    }
    if (scroll > h[1] + 230) {
        logo.style.filter = "invert(0)";
    }
    if (scroll > h[2] + 120 && scroll < h[2]) {
        logo.style.filter = "invert(0)";
    }
    if (scroll > h[3] && h[3] + 300) {
        logo.style.filter = "invert(1)";
    }
    if (scroll > h[3] + 400) {
        logo.style.filter = "invert(0)";
    }
    // console.log(scroll, h);

}

function randomColor() {
    function rand() {
        var c = Math.random();
        var q = c * 1000000;
        var d = Math.round(q);
        return d;
    }

    var d = rand();
    if (d < 100000) {
        d = rand();
    }

    return "#" + d;
}

function setColor() {
    var text = document.querySelectorAll(".textss");
    var i = 0;
    for (i; i < text.length; i++) {
        text[i].style.background = randomColor();
    }
    i = 0;
    for (i; i < text.length; i++) {
        if (text[i].style.background == "") {
            text[i].style.background = randomColor();
        }
    }
    // var sh = document.getElementById("h");
    // sh.onmouseover =
}

