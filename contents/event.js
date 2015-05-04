var Event = function(data) {
	this.data = data;

	this.toHTML = function() {
		var output = '';
		
		output += '<div class="row event">';
		output += '  <div class="col-md-3"></div>';
		output += '  <div class="col-md-8"><a class="eventName" href="https://www.google.com">' + data.title + '</a></div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-3"></div>';
		output += '  <div class="col-md-5">' + data.desc + '</div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-4"></div>';
		output += '  <div class="col-md-3">' + data.time + '</div>';
		output += '  <div class="col-md-2"><button>See Map</button></div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-4"></div>';
		output += '  <div class="col-md-3"><a class="organization" href="' + data.orgLink + '">' + data.org + '</a></div>';
		output += '  <div class="col-md-2"><span class="glyphicon glyphicon-earphone"></span>' + data.tele + '</div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-4"></div>';
		output += '  <div class="col-md-4">' + data.address + '</div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-4"></div>';
		output += '  <div class="col-md-4"><em>Skills Needed: ' + data.skills + '</em></div>';
		output += '</div>';

		return output;
	};

	this.toOrgHTML = function() {
		var output = '';
		output += '<div class="row event">';
		output += '  <div class="col-md-8"><a class="eventName" href="https://www.google.com">' + data.title + '</a></div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-2 time"><b>' + data.time + '</b></div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-5 time">' + data.address + '</div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-5">' + data.desc + '</div>';
		output += '</div>';
		output += '<div class="row entry">';
		output += '  <div class="col-md-5"><em>Skills Needed: ' + data.skills + '</em></div>';
		output += '</div>';

		return output;
	}
};