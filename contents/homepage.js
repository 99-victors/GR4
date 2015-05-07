$(document).ready(function () {

  document.cookie="path=/";
  $('#orglink').attr('href', 'Organization/organization.html');

  $('#volunteerLink').attr('href', 'voluntari.html');

  
  
  $('#volunteerLink').click(function(e){
    document.cookie="usertype=Volunteer";
    console.log("clicked")
  });
  
  $('#orglink').click(function(e){
    document.cookie="usertype=Organization";
  }); 
});