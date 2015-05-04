$(document).ready(function() {
	$('#navbar').load('../partials/navbar.html', function() {
		$('#navbar-brand').attr('href', '../voluntari.html');
		$('#navbar-home').attr('href', '../voluntari.html');
      	$('#navbar-prof').attr('href', '../profile/profile.html');      
      	$('#navbar-logout').attr('href', '../homepage.html');
	});
  
  
//This script extracts parameters from the URL
//from jquery-howto.blogspot.com

    $.extend({
        getUrlVars : function() {
            var vars = [], hash;
            var hashes = window.location.href.slice(
                    window.location.href.indexOf('?') + 1).split('&');
            for ( var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar : function(name) {
            return $.getUrlVars()[name];
        }
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
    
   var type;
   var scope;
   if ($.getUrlVar('eventtype') != '' && $.getUrlVar('eventnum') != '') {
      i = $.getUrlVar('eventnum')  
      type = $.getUrlVar('eventtype')
      var event;
      if(type == "home"){
          event = data.homepage[i]            
       
          
      } else if(type == "homeless"){
          event = data.homeless[i]
      } else{
          event = data.women[i]          
      }
     
      console.log("got event~!")
      console.log(event.data.org)
      $('#banner').html(event.data.title)
      $('#org').html("- "+ event.data.org)
      $('#desc').html(event.data.desc)
      $('#time').html(event.data.time)
      
   }
  
  
  $('#submitButton').click(function(){
    console.log('Hi');
    var choice = confirm('Confirm registration?');
    if(choice){
      alert('Registration successful.');
      document.cookie="registered"+type+i+"=true"
      $('#submitButton').hide(); 
      $('#cancelButton').show();       
    }
  });
  
    $('#cancelButton').click(function(){
    console.log('Hi');
    var choice = confirm('Cancel registration?');
    if(choice){
      alert('Cancellation successful.');
      document.cookie="registered"+type+i+"=false"
      $('#submitButton').show(); 
      $('#cancelButton').hide();       
    }
  });
  
  if(getCookie("registered"+type+i) == "true"){
    $('#submitButton').hide(); 
    $('#cancelButton').show(); 
  } else{
    $('#submitButton').show(); 
    $('#cancelButton').hide();
  }
  
});
