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
        $('#results').load('../partials/homelessSearch.html');
    }
    
    if(searchQuery.indexOf("women") > -1){
        $('#results').load('../partials/womenSearch.html');
    }
    
/**********************************************************************************************************************************
*
*                        Student Defined Listeners
*
***********************************************************************************************************************************/        
    
});
