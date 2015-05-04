$(document).ready(function() {
    $('#navbar').load('../partials/navbar.html', function() {
    	$('#navbar-brand').attr('href', '../voluntari.html');
    	$('#navbar-home').attr('href', '../voluntari.html');
      	$('#navbar-prof').attr('href', '../profile/profile.html');
      	$('#navbar-logout').attr('href', '../homepage.html');
    });

  
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    } 
  
    var isVol = getCookie("usertype") == "Volunteer";
  
    $('#events-tab').load('events.html', function() {
        
        if (isVol) {
          $('#addbutton').hide()
        }

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
	    			$('#events-tab').append(event.toHTML());
	    			$('#add-form').modal('hide');
	    		}
	    	});
	    });
    });

    $('#info-tab').load('info.html');




    //var mapOptions = {zoom: 8, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP};    
    //var map = new google.maps.Map(mapDiv, mapOptions);

});
