'use strict';
var flaga_schowaj=false;

function schowaj() {

   $('p').hide(5000, function() {
      if(flaga_schowaj == false) {
         console.log(">>Koniec.");
         flaga_schowaj=true;
      } 
   }
    ).show(1000);
}



$(document).ready( function() {
   
   $('#go').click( schowaj );
   
});

