$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        centerMode: true
        
        
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
                document.getElementById('collected').innerHTML =  allText;
            }
        }
    }
    rawFile.send(null);
}


readTextFile("summ.txt");
    
    

    
    
let inTotal = document.getElementById("in__total").innerHTML;
let collected = document.getElementById("collected").innerHTML;
let percentageTotal = document.getElementById("percentage__total");
let percent = 0;

percent = (collected * 100 / inTotal).toFixed(1) + "%";
percentageTotal.innerText = percent;
    
    
    
    
    
    
    
  
   $(".leaflets-img").click(function(){
       $("body").css({"overflow":"hidden"});
        
       let img = $(this);
       let src = img.attr("src");
       $(".leaflets").append("<div id='myModal' class='modal'>" +
            "<div class='modal-content'>" +
                "<div class='modal-header'>" +
                    "<span class='close'>&times;</span>" +
                "</div>" +
                "<div class='modal-body'>" +
                    "<img src='" + src + "' alt=''>" +
                "</div>" +
            "</div>" +
        "</div>");
       $("#myModal").fadeIn(800);
       
       $(".close").click(function(){
        $("#myModal").fadeOut(800);
           setTimeout(function(){
              $("#myModal").remove(); 
           }, 800);
        $("body").css({"overflow":"visible"});    
   });
       
   });
    
    
    
});








 