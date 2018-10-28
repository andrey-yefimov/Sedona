$(document).ready(function(){
   $(".datepicker").datepicker();
    
    $(".number").each(function(i,e){
        $(e).find(".number-minus").click(function(){
            var $inp = $($(this).attr('for'));
            $inp.val(+$inp.val()-1); 
        });
        $(e).find(".number-plus").click(function(){
            var $inp = $($(this).attr('for'));
            $inp.val(+$inp.val()+1); 
        });
    });
});