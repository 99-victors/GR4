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
    
    console.log("lol");
    
        
    var searchQuery = "";
        
    if($.getUrlVar('query')){
        searchQuery = $.getUrlVar('query');
    }
    
    $("#banner").html(searchQuery);
    
    
    
    
    
    
    });