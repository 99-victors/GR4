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
    
    var addEntry = function(event, organization){
        var entry = "<div>"+
            "<table class=\"event\" align=\"center\">" +
               " <tr><td><a class=\" "+ event.page +"\" href=\""+ event.link + "\">" + event.name + "</a></td></tr>"+
                "<tr><td><p>" + event.time + "</p></td> <td><button>See Map</button></td> <td><button>More Info</button></td></tr>"+
                "<tr><td class=\"Organization\">" + organization.name+ "</td> <td>"+organization.tel+"</td></tr>"+
                "<tr><td>"+organization.addr+"</td></tr>"+
              "</table>"+
            "</div>";
    };
    
    
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
            $("#banner").html("Displaying Search Results for: " +searchQuery);
    }
    
/**********************************************************************************************************************************
*
*                        Student Defined Listeners
*
***********************************************************************************************************************************/        
    
    
    
    
    });