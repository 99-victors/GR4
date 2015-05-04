$(document).ready(function() {
    //$('#datepicker').datepicker({});
    $('#navbar').load('../partials/navbar.html', function() {
    	$('#navbar-brand').attr('href', '../voluntari.html');
    	$('#navbar-home').attr('href', '../voluntari.html');
      	$('#navbar-prof').attr('href', '../profile/profile.html');

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
  
    console.log("cookie:" +  getCookie("usertype"))
    var isVol = getCookie("usertype") == "Volunteer";

  
    if (isVol) {
      $('#addbutton').hide()
    }
  
    var mapOptions = {zoom: 8, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP};    
    var map = new google.maps.Map(mapDiv, mapOptions);

});
