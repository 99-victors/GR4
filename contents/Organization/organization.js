$(document).ready(function() {
    $('#navbar').load('../partials/navbar.html', function() {
    	$('#navbar-brand').attr('href', '../voluntari.html');
    	$('#navbar-home').attr('href', '../voluntari.html');
      	$('#navbar-prof').attr('href', '../profile/profile.html');
      	$('#navbar-logout').attr('href', '../homepage.html');
    });

    $('#events-tab-content').load('events.html', function() {
    	$('#add-form').load('add.html', function() {
	    	$('#datetimepicker').datetimepicker();
	    	$('#add-event-button').click(function(e) {
	    		if (confirm('Are you sure you want to add this event?')) {
	    			var event = new Event({
	    				title: $('#title').val(),
	    				time: $('#datetimepicker').val(), 
	    				desc: $('#description').val(),
	    				skills: $('#skills').val(),
	    			});
	    			$('#events-tab-content').append(event.toHTML());
	    			$('#add-form').modal('hide');
	    		}
	    	});
	    });
    });

    /*var geocoder = new google.maps.Geocoder();
    // With backend, could supply address location without hardcoding
    var address = '46 Pleasant Street, Cambridge MA';
    // pick an arbitrary default starting location to be replaced
    var mapOptions = {
    	center: new google.maps.LatLng(54.00, -3.00),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};*/

    $('#info-tab-content').load('info.html', function() {
    	/*var map = new google.maps.Map($('#map-canvas')[0], mapOptions);
	    geocoder.geocode({'address': address}, function(results, status) {
	    	if (status == google.maps.GeocoderStatus.OK) {
	    		map.setCenter(results[0].geometry.location);
	    	}
	    });*/
    	$('#info-tab').on('shown.bs.tab', function() {
    		console.log('shown');
    		
		 	//google.maps.event.trigger(map, 'resize');
		});
    });

    

    //var mapOptions = {zoom: 8, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP};    
    //var map = new google.maps.Map(mapDiv, mapOptions);
});
