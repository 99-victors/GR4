$(document).ready(function() {
	$('#navbar').load('../partials/navbar.html', function() {
		$('#navbar-brand').attr('href', '../voluntari.html');
		$('#navbar-home').attr('href', '../voluntari.html');
	});

	$('#submitButton').click(function(){
    	console.log('test');
    });
});
