jQuery(document).ready(function(){
   'use strict';
   
   var tekstParagrafuPierwszego = $('#first').text();
   console.log(tekstParagrafuPierwszego);
   
   $(".paragraf").text(tekstParagrafuPierwszego); // skopiowanie titla do paragrafu o klasie paragraf
   
   
   $(".paragrafnext").html("To jest <strong>MOCNY</strong> tekst :o ");
   
    // za selektorem
   $(".paragrafnext").append(" >>za selektorem<< ");
    // potomny
   $(".paragrafnext").after(" >za selektorem potomnie< ");
    // usuwa element 
   $("strong").remove();
    // czysci innerHMTL
   $(".paragrafnext").empty();
    //dodawanie CSS
   $("h1").css( {'font-size':'3em', 'color': 'green'} );
    //dodawanie klasy
   $("h1").addClass('blue');
    //dodawanie atrybutu
   $('h1').attr("imie", "marcin");
   //$('h1').removeAttr("imie");
   $('h1').removeProp('color');
   
   
});