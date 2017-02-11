function logg(param){
   console.log(param);
}

$( function(){
   'use strict';
   
   $('body').find('p').eq(1).css({'color':'green'});
   logg("dupa");
   
   $('p').each(function(index) {
      $(this).addClass('paragraf-' + index);
      logg($(this))
   });
      
   $("p.guzik").click( function() {
                        logg("RADIO");
                        $('p.guzik').css({ 'color': 'inherit' });
                        $(this).css({ 'color': 'red' });
                     });
   
   

});