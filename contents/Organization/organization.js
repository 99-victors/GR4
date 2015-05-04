$(document).ready(function() {
    $('#navbar').load('../partials/navbar.html', function() {
    	$('#navbar-brand').attr('href', '../voluntari.html');
    	$('#navbar-home').attr('href', '../voluntari.html');
      	$('#navbar-prof').attr('href', '../profile/profile.html');
      	$('#navbar-logout').attr('href', '../homepage.html');
    });

    $('#events-tab').load('events.html');
    $('#info-tab').load('info.html');

    $('#add-form').load('add.html', function() {
    	$('#datetimepicker').datetimepicker();
    	$('#add-event-button').click(function(e) {
    		if (confirm('Are you sure you want to add this event?')) {
    			var event = new Event({
    				name: 'a',
    				time: 'a', 
    				desc: 'a',
    				skills: 'a',
    			});
    			$('#events-tab').append(event.toHTML());
    		}
    	});
    });

    //var mapOptions = {zoom: 8, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP};    
    //var map = new google.maps.Map(mapDiv, mapOptions);
});
