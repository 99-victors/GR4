// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {

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
    
/**********************************************************************************************************************************
*
*                        Functions
*
***********************************************************************************************************************************/        
    
    
    
/**********************************************************************************************************************************
*
*                        On Start
*
***********************************************************************************************************************************/        
    
        
    var searchQuery = "";
    
    if($.getUrlVar('first') == "True"){
            $("#banner").html("Upcoming Events Near You");    
    }
    else{
        if($.getUrlVar('query')){
            searchQuery = $.getUrlVar('query');
        }    
        $("#banner").html("Search Results");
    }
    
    if(searchQuery.indexOf("home") > -1 || searchQuery.indexOf("less") > -1 || searchQuery.indexOf("center") > -1){
        $('#results').html(
           " <div class=\"row event\">" +
        "<div class=\"col-md-3\"></div>" +
        "<div class=\"col-md-8\"><a class=\"eventName\" href=\"https://www.google.com\">Soup Kitchen Cooking</a></div>" +
    "</div>" +
    "<div class=\"row entry\">" +
        "<div class=\"col-md-4\"></div>"+
        "<div class=\"col-md-2\">Sun: 10am - 3pm</div>"+
        "<div class=\"col-md-2\"><button>See Map</button> <button>More Info</button></div>"+
    "</div>"+
    "<div class=\"row entry\">"+
        "<div class=\"col-md-4\"></div>"+
        "<div class=\"col-md-2\"><a class=\"organization\">Cambridge Homeless Center</a></div>"+
        "<div class=\"col-md-2\">555-555-5556</div>"+
    "</div>"+
    "<div class=\"row entry\">"+
        "<div class=\"col-md-4\"></div>"+
        "<div class=\"col-md-4\">539 Massachusetts Avenue, Cambridge, MA, 02319</div>"+
    "</div>"
        );
    }
    
    if(searchQuery.indexOf("women") > -1){
        $('#results').html(
           " <div class=\"row event\">" +
        "<div class=\"col-md-3\"></div>" +
        "<div class=\"col-md-8\"><a class=\"eventName\" href=\"https://www.google.com\">Meditation and Discussion</a></div>" +
    "</div>" +
    "<div class=\"row entry\">" +
        "<div class=\"col-md-4\"></div>"+
        "<div class=\"col-md-2\">Mon: 2pm - 7pm</div>"+
        "<div class=\"col-md-2\"><button>See Map</button></div>"+
    "</div>"+
    "<div class=\"row entry\">"+
        "<div class=\"col-md-4\"></div>"+
        "<div class=\"col-md-2\"><a class=\"organization\" href=\"../Organization/organization.html\">Cambridge Women's Center</a></div>"+
        "<div class=\"col-md-2\">617-555-5555</div>"+
    "</div>"+
    "<div class=\"row entry\">"+
        "<div class=\"col-md-4\"></div>"+
        "<div class=\"col-md-4\">539 Massachusetts Avenue, Cambridge, MA, 02319</div>"+
    "</div>"+
            
    " <div class=\"row event\">" +
        "<div class=\"col-md-3\"></div>" +
        "<div class=\"col-md-8\"><a class=\"eventName\" href=\"https://www.google.com\">Soup Kitchen Cooking</a></div>" +
    "</div>" +
    "<div class=\"row entry\">" +
        "<div class=\"col-md-4\"></div>"+
        "<div class=\"col-md-2\">Tues: 10am - 12pm</div>"+
        "<div class=\"col-md-2\"><button>See Map</button></div>"+
    "</div>"+
    "<div class=\"row entry\">"+
        "<div class=\"col-md-4\"></div>"+
        "<div class=\"col-md-2\"><a class=\"organization\" href=\"../Organization/organization.html\">Cambridge Women's Center</a></div>"+
        "<div class=\"col-md-2\">617-555-5555</div>"+
    "</div>"+
    "<div class=\"row entry\">"+
        "<div class=\"col-md-4\"></div>"+
        "<div class=\"col-md-4\">539 Massachusetts Avenue, Cambridge, MA, 02319</div>"+
    "</div>"
            
        );
    }
    
/**********************************************************************************************************************************
*
*                        Student Defined Listeners
*
***********************************************************************************************************************************/        
    
    
    
    
});
