'use strict';
var flaga_schowaj=false;

function schowaj() {
   $('p').hide(5000, koniec).show(1000);
}

function fejdy() {
   $('h1').fadeOut(1000).fadeIn(1000);
   
}

function slajdy() {
   $('h1').slideUp(100).slideDown(1000);
}

function koniec() {
   if(flaga_schowaj == false) {
   console.log(">>Koniec.");
   flaga_schowaj = true;
   }
}

function zakonczDrugaAnimacje(){
   console.log(" >zakonczona druga animacje.");
}

function animacja() {
   console.log(" >teraz startuje druga ");
   $('h3').animate({'font-size':'1em', 'margin-left':'0'},2000, zakonczDrugaAnimacje );
   
}

function onclickAnimacja() {
   console.log(" >start pierwszej");
   $('h3').animate({'font-size':'3em', 'margin-left':'100px'},2000, animacja);
}

$(document).ready( function() {
   $('#go').click(schowaj);
   $('h3').click(onclickAnimacja);
     
});


