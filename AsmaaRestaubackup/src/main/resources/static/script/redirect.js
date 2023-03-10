$('a').removeClass('active');
$('a:contains(Statistiques)').addClass('active');
$("#main-content").load("page/statistiques.html");

function show(page) {
	if (page == 'villes') {
		$('a').removeClass('active');
		$('a:contains(Ville)').addClass('active');
		$("#main-content").load("page/ville.html");

		event.preventDefault();
	}
	if (page == "statistiques") {
		$('a').removeClass('active');
		$('a:contains(Statistiques)').addClass('active');
		$("#main-content").load("page/statistiques.html");
		event.preventDefault();
	}
	if (page == "zones") {
		$('a').removeClass('active');
		$('a:contains(Zones)').addClass('active');
		$("#main-content").load("page/zone.html");
		event.preventDefault();
	}
	if (page == "restaurants") {
		$('a').removeClass('active');
		$('a:contains(Restaurants)').addClass('active');
		$("#main-content").load("page/restaurant.html");
		event.preventDefault();
	}
	if (page == 'series') {
		$('a').removeClass('active');
		$('a:contains(Series)').addClass('active');
		$("#main-content").load("page/serie.html");

		event.preventDefault();
	}
	if (page == 'specialites') {
		$('a').removeClass('active');
		$('a:contains(Specialites)').addClass('active');
		$("#main-content").load("page/specialite.html");

		event.preventDefault();
	}
	if (page == 'photos') {
		$('a').removeClass('active');
		$('a:contains(Photos)').addClass('active');
		$("#main-content").load("page/photo.html");

		event.preventDefault();
	}
}
