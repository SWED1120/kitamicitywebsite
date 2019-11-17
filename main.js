jQuery(function($){
	var headerHeight = $('.container').outerHeight();
	$('a[href^="#"]').click(function() {
		var href= $(this).attr("href");
		var target = $(href);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop:position}, 500);
	});
});