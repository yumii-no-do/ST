var d = document.getElementsByClassName("cont")[0];

d.onclick =function (event) {
    var target = event.target;
    console.log(target);
    play_pause(target);
};

function play_pause(video) {

    var button = video.parentNode.children[0];
    console.log(button);
    if (video.paused) {
        video.play();
        button.style.visibility = "hidden";
    } else {
        video.pause();
        button.style.visibility = "visible";
    }
}