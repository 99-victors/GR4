$(document).ready(function() {
	$('#navbar').load('../partials/navbar.html', function() {
		$('#navbar-home').attr('href', '../voluntari.html');
	});
});
