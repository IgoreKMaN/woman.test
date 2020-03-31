//let elem = document.getElementsByClassName("in__total")[0].innerHTML;

let inTotal = document.getElementById("in__total").innerHTML;
let collected = document.getElementById("collected").innerHTML;
let percentageTotal = document.getElementById("percentage__total");
let percent = 0;

percent = (collected * 100 / inTotal).toFixed(1) + "%";
percentageTotal.innerText = percent;




$(".arrow__down").click(function(){
    if ($(".arrow__down").hasClass('arrow__reverce')){
        $(".arrow__down").removeClass("arrow__reverce");
        $(".all__document").removeClass("document__open");
    }
    else{
        $(".arrow__down").addClass("arrow__reverce");
        $(".all__document").addClass("document__open");
 
    }
});


