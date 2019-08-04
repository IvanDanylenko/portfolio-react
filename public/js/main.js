/* -----------------------------------
			3. Isotope Portfolio Setup
	----------------------------------- */
/* if ($('.portfolio-items').length) {
	var $elements = $(".portfolio-items"),
		$filters = $('.portfolio-filter ul li');
	$elements.isotope();

	$filters.on('click', function () {
		$filters.removeClass('active');
		$(this).addClass('active');
		var selector = $(this).data('filter');
		$(".portfolio-items").isotope({
			filter: selector,
			hiddenStyle: {
				transform: 'scale(.2) skew(30deg)',
				opacity: 0
			},
			visibleStyle: {
				transform: 'scale(1) skew(0deg)',
				opacity: 1,
			},
			transitionDuration: '.5s'
		});
	});
} */

var elem = document.querySelector('.portfolio-items');
var iso = new Isotope(elem, {
	// options
	itemSelector: '.item',
	layoutMode: 'fitRows'
});

var filter = document.querySelector('.portfolio-filter ul');
filter.addEventListener('click', () => {
	console.log("Filter works");
});
