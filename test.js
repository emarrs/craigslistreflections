 console.log("hello from external script.js"); //just to check that your script is loading in console
 	

$(document).ready(function(){
	
	$('.dot').click(function(){
		// $('.star div').each(function(){
		// 	$(this).toggleClass('flash');
		// });

		$(this).css("background-image","url(handmirror.gif)");
	});



	// $('.child').click(function(){
	// 	$('.child').toggleClass('flash');
	// });


});