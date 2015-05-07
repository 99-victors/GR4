$(document).ready(function() {
  
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

  
    $('#navbar').load('../partials/navbar.html', function() {

        if(isVol){
     	 $('#navbar-brand').attr('href', '../voluntari.html');
    	 $('#navbar-home').attr('href', '../voluntari.html');          
      	 $('#navbar-prof').attr('href', '../profile/profile.html');
        } else{
         $('#navbar-prof').attr('href', '../Organization/organization.html');
        }
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
  
    
   var type,i,name,numReg;
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
      name = event.data.title;
      console.log("got event~!")
      console.log(event.data.org)
      $('#banner').html(event.data.title)
      $('#orgLink').html("  "+ event.data.org)
      $('#orgLink').attr("href","../" + event.data.orgLink)      
      $('#desc').html(event.data.desc)
      $('#time').html(event.data.time)
      
   }
  
  if(getCookie("registered"+type+i+"num") != ""){
    $('#people').html(parseInt(getCookie("registered"+type+i+"num")));
  } else{
    $('#people').html(20);
    document.cookie = "registered"+type+i+"num=20"
  }
  
  $('#submitButton').click(function(){
    console.log('Hi');
    if($('#ques1').is(':checked') || $('#ques2').is(':checked')){
      var numPeople;
      if($('#ques1').is(':checked')){
        numPeople = 1;        
      }else{
        numPeople = parseInt($('#others').val())
        if(numPeople >parseInt(getCookie("registered"+type+i+"num"))){
            alert("Too many people to register!");
            return;
        }
      }
      
      
      
      
      var choice = confirm('Confirm registration?');
      if(choice){
        document.cookie="registered"+type+i+"=true"
        $('#submitButton').hide(); 
        $('#cancelButton').show(); 
        $('#people').html(20 - numPeople);
        document.cookie = "registered"+type+i+"num=" + toString(20 - numPeople);
        
      }
    }else{
      alert("Please indicate how many people are coming.")
    }
  });
  
    $('#cancelButton').click(function(){
    console.log('Hi');
    var choice = confirm('Cancel registration?');
    if(choice){
      document.cookie="registered"+type+i+"=false"
      $('#submitButton').show(); 
      $('#cancelButton').hide();       
      $('#people').html(20);      
      document.cookie = "registered"+type+i+"num=20"      
    }
  });
  
  
  
  
  if(getCookie("registered"+type+i) == "true"){
    
    $('#submitButton').hide(); 
    $('#cancelButton').show(); 
    console.log("registered for "+ name);
    console.log(getCookie("registered"+type+i));
  } else{
    $('#submitButton').show(); 
    $('#cancelButton').hide();
    console.log("NOT registered for "+ name);    
  }
  
  if(!isVol){
      $('#submitButton').hide(); 
      $('#cancelButton').hide();
      $('#ques1').hide(); 
      $('#ques2').hide();
      $('#que1').hide(); 
      $('#que2').hide();    
      $('#textColumn').append('<div class="row entry"><div class="col-md-1"></div>  <div class="col-md-10" id="eventInfo">      <p id="que1">  <strong>Registered: </strong><br/>Victor Rodriguez<br/>Victoria Rosenthal<br/>Vicky Schwartz<br/>Vi O. Lin<br/>Vick Torrie</p></div>      </div>');
  }
  
});
