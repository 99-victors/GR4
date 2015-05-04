$(document).ready(function() {
    //$('#datepicker').datepicker({});
    $('#navbar').load('../partials/navbar.html', function() {
    	$('#navbar-brand').attr('href', '../voluntari.html');

      $('#navbar-home').attr('href', '../voluntari.html');
    	$('#navbar-prof').attr('href', 'profile.html');
        $('#navbar-logout').attr('href', '../homepage.html');
                               
    });
  
  
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