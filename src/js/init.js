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