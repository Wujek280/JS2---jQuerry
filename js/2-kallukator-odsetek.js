'use strict';


function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
   
   var oprocentowanieOpodatkowane = oprocentowanie;
   if(podatek == true) {oprocentowanieOpodatkowane *= (1-.19);}
   
   var Ko = parseFloat(wplata); 
   var n = iloscLat*okresKapitalizacji;
   var base = (1+oprocentowanieOpodatkowane/okresKapitalizacji);
   var exp = Math.pow(base, n);
   var kapital = Ko*exp;
   
   kapital=kapital.toFixed(2);
   return kapital;
      
}

function oblicz() {
   
   console.log("słowo testowe na d.");
   
   var wplata = document.getElementById("hajs");
   wplata = wplata.value;
   wplata = parseInt(wplata);
   console.log(wplata,' PLN');
   
   var okresKapitalizacji =document.getElementById("kapitalizacja");
   okresKapitalizacji = okresKapitalizacji.value;
   console.log(okresKapitalizacji,' kapitalizacji/rok ');
   
   var iloscLat = document.getElementById("lat");
   iloscLat = iloscLat.value;
   console.log(iloscLat,' lat');
   
   var oprocentowanie = document.getElementById("proc");
   oprocentowanie = oprocentowanie.value/100;
   console.log(oprocentowanie*100,' %');
   
   var podatek = document.getElementById("tax");
   podatek = podatek.checked;
   console.log(podatek,'[podatek belki]');

   var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
   
   console.log("---wynik---");
   console.log(' ',wynik, 'PLN');
   
   var kapitalKoncowyParagraf = document.querySelectorAll("p > span")[0];

   kapitalKoncowyParagraf.innerHTML = wynik;
 }


document.getElementById("przelicz").addEventListener('click', function(e){
   oblicz();
} );
