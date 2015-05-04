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
  
  $('#submitButton').click(function(){
    console.log('Hi');
    var choice = confirm('Confirm registration?');
    if(choice){
      alert('Registration successful.');
      document.cookie="registered=true"
      $('#submitButton').hide(); 
      $('#cancelButton').show();       
    }
  });
  
    $('#cancelButton').click(function(){
    console.log('Hi');
    var choice = confirm('Cancel registration?');
    if(choice){
      alert('Cancellation successful.');
      document.cookie="registered=false"
      $('#submitButton').show(); 
      $('#cancelButton').hide();       
    }
  });
  
  if(getCookie("registered") == "true"){
    $('#submitButton').hide(); 
    $('#cancelButton').show(); 
  } else{
    $('#submitButton').show(); 
    $('#cancelButton').hide();
  }
  
});
