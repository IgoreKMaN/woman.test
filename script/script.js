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




function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    //rawFile.send(null);
}


readTextFile("summ.txt");