$(document).ready(function() {
	console.log("Is this working?");
   	$('<input type="checkbox" class="liChk" />').prependTo('#ingredients li');
   	$("#directions li").hover(
   		function () {
   			$(this).css({"background-color":"#E0E0E0"});
   		}, 
      	function () {
       		$(this).css({"background-color":"white"});
	});
	$('img').click(function(){
    	$(this).toggle();
  });
});