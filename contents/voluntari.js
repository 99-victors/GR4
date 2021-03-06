// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

$(document).ready(function () {
    var ENTER = 13;
    $('#navbar').load('partials/navbar.html', function() {
        // set the loaded navbar's title's link
        $('#navbar-brand').attr('href', './voluntari.html');
        $('#navbar-home').attr('href', './voluntari.html');
        $('#navbar-logout').attr('href', './homepage.html');
    }); 

  console.log(document.cookie);
    for (var i = 0; i < data.homepage.length; i++) {
        console.log(data.homepage[i])
        $('#results').append(data.homepage[i].toHTML());    
    }

    var performSearch = function () {
        //$('#content').prop('data', 'Search/voluntariSearch.html?query=' + $('#searchBox').val());
        var searchQuery =  $('#searchBox').val();    
        console.log("search");
        if(searchQuery.indexOf("home") > -1 || searchQuery.indexOf("less") > -1 || searchQuery.indexOf("center") > -1){
            $('#results').empty();
            for (var i = 0; i < data.homeless.length; i++) {
                $('#results').append(data.homeless[i].toHTML());    
            }
        }

        if(searchQuery.indexOf("women") > -1) {
            $('#results').empty();
            for (var i = 0; i < data.homepage.length; i++) {
                $('#results').append(data.women[i].toHTML());
            }
        }  
    };

    $('#searchButton').click(performSearch);

    $('#searchBox').keypress(function (e) {
    	if (e.which === ENTER) {
    		performSearch();
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
  
    console.log("cookie:" +  getCookie("usertype"))
  
  
    $('#advancedSearch').click(function () {
    	
    });
});
