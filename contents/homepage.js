$(document).ready(function () {

  document.cookie="usertype=Volunteer";
  $('#orglink').attr('href', 'Organization/organization.html');

  $('#volunteerLink').attr('href', 'voluntari.html');

  
  
  $('#volunteerLink').click(function(){
    document.cookie="usertype=Volunteer ;domain=.contents;path=/";
  });
  
  $('#orglink').click(function(){
    document.cookie="usertype=Organization ;domain=.contents ;path=/";
  }); 
});