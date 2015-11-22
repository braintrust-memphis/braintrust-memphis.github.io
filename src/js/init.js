// INIT

$('a.section-link').each(function(i,el) {
	var id = $(el).attr('data-id')
	$(el).on('click', function(e) {
		console.log(id)
		window.open('#'+id,'_self')
		$('body').animate({scrollTop: '-=40px'},0)
		if($(window).width() <= 767) {
			$('button[data-target]').click()
			console.log('click')
		}
	})
})

$('body').scrollspy({ target: '#navbar-example' })

$('form').on('submit', function(e) {
	e.preventDefault();
	var mailto = `mailto:braintrust.memphis@gmail.com?subject=Interest%20in%20Braintrust&body=Please%20add%20me%20to%20your%20newsletter`
	window.open(mailto,"_top")
	$('form').html('<div class="alert alert-success"><p>Thank you for signing up <br class="mobile-only">for our newsletter.</p></div>')
})