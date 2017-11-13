// document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
//                                                           // Если должен быть найден один элемент
//     if((e = document.querySelector("#form_error_message_frontend + div > div:last-child label")) !== null)
//         e.classList.add('last'); // Аналог выборки и присвоения класса
//     // Если элементов будет много
//     Array.prototype.forEach.call(document.querySelectorAll("#form_error_message_frontend + div > div:last-child label"), function(e){
//         e.classList.add('last');
//     });
// });
correctShip();

function  correctShip() {
    var r = document.getElementsByClassName("bg-black")[0].children[1];
    var h = r.clientHeight;
    r.style.marginTop = "-"+ Math.round(h/1.6)+"px";
    if(h/1.6 <50){
        correctShip();
    }
    // var f = setInterval(correctShip,3000);
}


