$(function() {
	// hamburger menu toggle
	$('#menu-toggler').click(function() {
	
		$(this).toggleClass('open');

		// menu open
		$('.menu').toggleClass('open');

		// toggle open class for our main content
		$('#main').toggleClass('open');

		return false; // prevent the link from performing its default behavior
	});
});