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
    document.cookie="usertype=Volunteer";

    $('#results').append(new Event({
        desc: 'Learn how to fix up bikes.',
        title: 'Mechanics Training',
        time: 'Sun: 1pm - 2pm',
        org: 'Bikes Not Bombs',
        tele: '555-555-5555',
        address: '18 Bartlett Sq. Jamaica Plain, MA 02130',
        skills: 'None'
    }).toHTML());

    $('#results').append(new Event({
        desc: 'Pack up books in boxes to be shipped to prisons.',
        title: 'Book Packing',
        time: 'Sun: 3pm - 8pm',
        org: 'Prison Books',
        tele: '555-555-5556', 
        address: '1306 Hancock St. Quincy, MA 02169',
        skills: 'None'
    }).toHTML());

    $('#results').append(new Event({
        desc: 'Help act as waiters for our guests and serve food.',
        title: 'Serving Food',
        time: 'Sun: 3pm - 9pm',
        org: 'Rosie\'s Place',
        tele: '555-555-5557',
        address: '889 Harisson Ave. Boston, MA 02118',
        skills: 'None'
    }).toHTML());  

    var performSearch = function () {
        //$('#content').prop('data', 'Search/voluntariSearch.html?query=' + $('#searchBox').val());
        var searchQuery =  $('#searchBox').val();    
        console.log("search");
        if(searchQuery.indexOf("home") > -1 || searchQuery.indexOf("less") > -1 || searchQuery.indexOf("center") > -1){
            $('#results').empty();
            $('#results').append(new Event({
                desc: 'Help cook for our soup kitchen.',
                title: 'Soup Kitchen Cooking',
                time: 'Sun: 10am - 3pm',
                org: 'Cambridge Homeless Center',
                tele: '555-555-5558',
                address: '537 Massachusetts Avenue, Cambridge, MA, 02319',
                skills: 'Cooking'
            }).toHTML());
        }

        if(searchQuery.indexOf("women") > -1) {
            $('#results').empty();
            $('#results').append(new Event({
                desc: 'Come find calm and discuss and connect with others over food.',
                title: 'Meditation and Discussion',
                time: 'Mon: 2pm - 7pm',
                org: 'Cambridge Women\'s Center',
                tele: '555-555-5559',
                address: '539 Massachusetts Avenue, Cambridge, MA, 02319',
                skills: 'Listening'
            }).toHTML());
            $('#results').append(new Event({
                desc: 'Help cook for our soup kitchen.',
                title: 'Daily Kitchen Cooking',
                time: 'Tues: 10am - 12pm',
                org: 'Cambridge Women\'s Center',
                tele: '555-555-5559',
                address: '539 Massachusetts Avenue, Cambridge, MA, 02319',
                skills: 'Cooking'
            }).toHTML());
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
