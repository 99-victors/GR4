$(document).ready(function() {
    //$('#datepicker').datepicker({});
    $('#navbar').load('../partials/navbar.html', function() {
    	$('#navbar-brand').attr('href', '../voluntari.html');

      $('#navbar-home').attr('href', '../voluntari.html');
    	$('#navbar-prof').attr('href', 'profile.html');
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
  
    for (var i = 0; i < data.homepage.length; i++) {
        if(getCookie("registered"+data.homepage[i].data.type+data.homepage[i].data.num) == "true"){
          $('#eventsTab').append(data.homepage[i].toHTML());    
        }
    }
  
    for (var i = 0; i < data.homeless.length; i++) {
        if(getCookie("registered"+data.homeless[i].data.type+data.homeless[i].data.num) == "true"){
          $('#eventsTab').append(data.homeless[i].toHTML());    
        }
    }
  
      for (var i = 0; i < data.women.length; i++) {
        if(getCookie("registered"+data.women[i].data.type+data.women[i].data.num) == "true"){
          $('#eventsTab').append(data.women[i].toHTML());    
        }
    }
  
    $('#edit-button').click(function(e){
 		if (confirm('Are you sure you want to update this information?')) {          
          $('#interests').html($('#interest').val())
          $('#skill').html($('#skills').val())
          $('#location').html($('#locations').val())
          $('#email').html($('#hone').val()) 
      	  $('#tel').html($('#mail').val());
	      $('#edit-form').modal('hide');   
          }
        });
    
});