$(document).ready(function() {
    $('#navbar').load('../partials/navbar.html', function() {
	$('#navbar-brand').attr('href', '../voluntari.html');
	$('#navbar-home').attr('href', '../voluntari.html');
    	$('#navbar-prof').attr('href', '../profile/profile.html');      
    });
    $('#submitButton').click(function(){
    });
});
