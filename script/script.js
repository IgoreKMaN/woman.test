//let elem = document.getElementsByClassName("in__total")[0].innerHTML;

let inTotal = document.getElementById("in__total").innerHTML;
let collected = document.getElementById("collected").innerHTML;
let percentageTotal = document.getElementById("percentage__total");
let percent = 0;

percent = (collected * 100 / inTotal).toFixed(1) + "%";
percentageTotal.innerText = percent;




$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        centerMode: true
        
        
    });

});
