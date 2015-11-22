'use strict';

// INIT

$('a.section-link').each(function (i, el) {
	var id = $(el).attr('data-id');
	$(el).on('click', function (e) {
		console.log(id);
		window.open('#' + id, '_self');
		$('body').animate({ scrollTop: '-=40px' }, 0);
	});
});

$('body').scrollspy({ target: '#navbar-example' });
//# sourceMappingURL=init.js.map
