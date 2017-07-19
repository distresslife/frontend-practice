var getTimeline = function(start, end) {
	var html = "";
	var diff = end.diff(start, "minutes");
    var num = end.diff(start, "hours");
   	html += '<div class="timeline" style="width:'+(diff*4)+'px;margin-left:150px;">';

   	for(i = 1; i <= num; i++){
   		html += '<div class="hour"><span class="time text-right">'+start.add("hour", 1).format("HH:mm")+'</span></div>';
   	}
    html += '</div>';
    return html;
}
var getGrid = function(row) {
	var width = row.mins*4;
	var left = (row.diff*4)+150;
	var style = 'left:'+left+'px;width:'+width+'px';
	var grid = "";
	if (row.community === "") {
		row.community = "COSCUP";
	}

	grid += '<div class="pull-left agenda" style="'+style+'">';
	grid += '<span class="community">['+row.lang+']['+row.community+']</span>';
	grid += '<span class="title">'+row.subject+'</span>';
	grid += '<span class="start">'+row.start_+'~'+row.end_+'</span>';
	grid += '<span class="mins text-right">'+row.mins+'</span>';
	grid += '</div>';

	return grid;
}

var day1 = {};
var day2 = {};
$.ajax({
    type: "GET",
    url: "https://coscup.org/2017-assets/json/submissions.json",
    dataType: 'json',
}).done(function (output) {
    //timeline
    var day1_start = moment("2017-08-05 8:45");
    var day1_end = moment("2017-08-05 16:55");
    var day2_start = moment("2017-08-06 9:00");
    var day2_end = moment("2017-08-06 17:00");

    var html = "";
    $.each(output, function(k, v){
    	var start = moment(v.start).format("YYYY-MM-DD");
    	if (start === "2017-08-05") {
    		if (!day1.hasOwnProperty(v.room)) {
	    		day1[v.room] = [];
			}
			day1[v.room].push(v);
    	} else {
    		if (!day2.hasOwnProperty(v.room)) {
	    		day2[v.room] = [];
			}
			day2[v.room].push(v);
    	}
    });

	html += '<h3 id="day1">Day 1</h3>';
	$.each(day1, function(index, list){
		var diff = day1_end.diff(day1_start, "minutes");
		html += '<div class="list day1-list clearfix" style="width:'+((diff*4)+150)+'px">';
		html += '<div class="pull-left room">'+index+'</div>';

		$.each(list, function(key, v){
			var start = moment(v.start);
			var end = moment(v.end);

			v.mins = end.diff(start, "minutes");
			v.diff = start.diff(day1_start, "minutes");
			v.start_ = start.format("HH:mm");
			v.end_ = end.format("HH:mm");

			html += getGrid(v);
		});
		html += '</div>';
	});

	html += '<h3 id="day2">Day 2</h3>';
	$.each(day2, function(index, list){
		var diff = day2_end.diff(day2_start, "minutes");
		html += '<div class="list day2-list clearfix" style="width:'+((diff*4)+150)+'px">';
		html += '<div class="pull-left room">'+index+'</div>';

		$.each(list, function(key, v){
			var start = moment(v.start);
			var end = moment(v.end);

			v.mins = end.diff(start, "minutes");
			v.diff = start.diff(day2_start, "minutes");
			v.start_ = start.format("HH:mm");
			v.end_ = end.format("HH:mm");

			html += getGrid(v);
		});
		html += '</div>';
	});
	$('#main').append(html);

	var day1_timeline = getTimeline(day1_start, day1_end);
    $('#day1').after(day1_timeline);
    var day2_timeline = getTimeline(day2_start, day2_end);
    $('#day2').after(day2_timeline);

}).fail(function (jqXHR, textStatus) {
    callback(null);
});