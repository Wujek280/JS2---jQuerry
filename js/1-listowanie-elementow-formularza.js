'use strict';

var forma = document.createElement('form');
   forma.name = "formularz";

var input1 = document.createElement('input');
   input1.name ="imie";
   input1.type ="text";
      input1.value ="Marcin";
var input2 = document.createElement('input');
   input2.name ="nazwisko";
   input2.type ="text";
      input2.value ="Wójcik";
var input3 = document.createElement('input');
   input3.type ="submit";
   input3.name ="przyciskWyslij";
      input3.value ="Wyślij";

document.body.appendChild(forma);
document.getElementsByTagName("form")[0].appendChild(input1);
document.getElementsByTagName("form")[0].appendChild(input2);
document.getElementsByTagName("form")[0].appendChild(input3);

function przeszukaj() {
   
   var all = document.getElementsByTagName("form")[0].childNodes;
      
   all.forEach(function(element) {
      if(element.name == 'imie') console.log(element.value);
      if(element.name == 'nazwisko') console.log(element.value);           
   });
}


document.getElementsByName("przyciskWyslij")[0].addEventListener('click',  function(e){
   e.preventDefault();
   przeszukaj();
   console.log('  >> przeszukiwanie zakonczone ')
} );