'use strict';
/*

$(function() {
   });

*/

function przeszukaj() {
   
   var all = document.getElementsByTagName("form")[0].childNodes;
      
   all.forEach(function(element) {
      if(element.name == 'imie') console.log(element.value);
      if(element.name == 'nazwisko') console.log(element.value);      
   });
}

document.getElementsByName("wyslij")[0].addEventListener('click',  function(e){
   e.preventDefault();
   przeszukaj();
   console.log('  >> przeszukiwanie : 100%')
} );

