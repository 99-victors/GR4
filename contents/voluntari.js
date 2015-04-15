// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

$(document).ready(function () {
    var ENTER = 13;
    
    $("#content").prop('data', 'Search/voluntariSearch.html?first=True');

    var performSearch = function () {
        $("#content").prop('data', 'Search/voluntariSearch.html?query=' + $('#searchBox').val());
    };

    $('#searchButton').click(performSearch);

    $('#searchBox').keypress(function (e) {
    	if (e.which === ENTER) {
    		performSearch();
    	}
    });

    $('#advancedSearch').click(function () {
    	
    });
});
