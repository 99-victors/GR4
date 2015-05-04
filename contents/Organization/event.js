var Event = function(data) {
	this.data = data;
	this.toHTML = function() {
		var output = '';
		output += '<div class="row event">';
		output += '  <div class="col-md-8"><a class="eventName" href="https://www.google.com">' + data.title + '</a></div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-2 time"><b>' + data.time + '</b></div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-5">' + data.desc + '</div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-5"><em>' + data.skills + '</em></div>';
		output += '</div>';

		return output;
	}
}