'use strict';



function oblicz() {
   console.log("słowo testowe na d.");
   
   var wplata = document.getElementById("hajs");
   wplata = wplata.value;
   console.log(wplata,' PLN');
   
   var okresKapitalizacji =document.getElementById("kapitalizacja");
   okresKapitalizacji = okresKapitalizacji.value;
   console.log(okresKapitalizacji,' mc/kapitalizacja ');
   
   var iloscLat = document.getElementById("lat");
   iloscLat = iloscLat.value;
   console.log(iloscLat,' lat');
   
   var oprocentowanie = document.getElementById("proc");
   oprocentowanie = oprocentowanie.value/100;
   console.log(oprocentowanie*100,' %');
   
   var podatek = document.getElementById("tax");
   podatek = podatek.value;
   console.log(podatek,' PLN tax');

   var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, oprocentowanie, podatek) ;
   
   console.log("---wynik---")
   console.log(' ',wynik, 'PLN')
 }

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek){
   
   var wplata = wplata;
   
   for(var i=0; i<okresKapitalizacji; i++){
      
      var odsetki = wplata*1/okresKapitalizacji*iloscLat*oprocentowanie
      wplata += odsetki;
      
      }
   
   return odsetki;
}

document.getElementById("przelicz").addEventListener('click',  function(e){
   //e.preventDefault();
   oblicz();
} );

//document.getElementById('wynik').innerHTML