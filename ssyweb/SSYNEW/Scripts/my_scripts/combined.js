$(document).ready(function () {
	
	$('#media').carousel({
		pause: true
		, interval: false
	, });
	$('.link').click(function () {
		// similar behavior as an HTTP redirect 
		//window.location.href="under.html"; 
		$('.link').attr('href', 'under.html')
	});
	$(window).on('resize', function () {
		var win = $(this);
		if (win.width() < 767) {
			$('header h3,header h4,header h5').addClass('.text-center');
		}
		else {
			$('header h3,header h4,header h5').removeClass('.text-center');
		}
	});
	$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
	});
	
	
});