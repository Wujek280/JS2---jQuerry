'use strict';

function oblicz() {
   console.log("słowo testowe na d.");
   
   var wplata = document.getElementById("hajs");
   wplata = wplata.value;
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
      //   var odsetkiParagraf = document.querySelectorAll("p > span")[1];
      //   var odsetki = document.querySelectorAll("p > span")[3];

   kapitalKoncowyParagraf.innerHTML = wynik;
      //odsetkiParagraf.innerHTML = (wynik - wplata).toFixed(2) ;
 }

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






document.getElementById("przelicz").addEventListener('click', function(e){
   //e.preventDefault();
   oblicz();
} );

//document.getElementById('wynik').innerHTML
   
   /*
    if(podatek == true) { 
         var answer = (ans-wplata)*0.81;
         answer += Ko;
         return answer.toFixed(2);
      }else{
         return ans.toFixed(2);
   
      }*/