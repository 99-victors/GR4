// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {

    $('#searchButton').click(function(){
        $("#content").prop('data','Search/voluntariSearch.html?query=' + $('#searchBox').val());
    })
});