var getTimeline=function(t,a){var s="",n=a.diff(t,"minutes"),m=a.diff(t,"hours");for(s+='<div class="timeline" style="width:'+4*n+'px;margin-left:150px;">',i=1;m>=i;i++)s+='<div class="hour"><span class="time text-right">'+t.add("hour",1).format("HH:mm")+"</span></div>";return s+="</div>"},getGrid=function(t){var a=4*t.mins,i=4*t.diff+150,s="left:"+i+"px;width:"+a+"px",n="";return""===t.community&&(t.community="COSCUP"),n+='<div class="pull-left agenda" style="'+s+'">',n+='<span class="community">['+t.lang+"]["+t.community+"]</span>",n+='<span class="title">'+t.subject+"</span>",n+='<span class="start">'+t.start_+"~"+t.end_+"</span>",n+='<span class="mins text-right">'+t.mins+"</span>",n+="</div>"},day1={},day2={};$.ajax({type:"GET",url:"https://coscup.org/2017-assets/json/submissions.json",dataType:"json"}).done(function(t){var a=moment("2017-08-05 8:45"),i=moment("2017-08-05 16:55"),s=moment("2017-08-06 9:00"),n=moment("2017-08-06 17:00"),m="";$.each(t,function(t,a){var i=moment(a.start).format("YYYY-MM-DD");"2017-08-05"===i?(day1.hasOwnProperty(a.room)||(day1[a.room]=[]),day1[a.room].push(a)):(day2.hasOwnProperty(a.room)||(day2[a.room]=[]),day2[a.room].push(a))}),m+='<h3 id="day1">Day 1</h3>',$.each(day1,function(t,s){var n=i.diff(a,"minutes");m+='<div class="list day1-list clearfix" style="width:'+(4*n+150)+'px">',m+='<div class="pull-left room">'+t+"</div>",$.each(s,function(t,i){var s=moment(i.start),n=moment(i.end);i.mins=n.diff(s,"minutes"),i.diff=s.diff(a,"minutes"),i.start_=s.format("HH:mm"),i.end_=n.format("HH:mm"),m+=getGrid(i)}),m+="</div>"}),m+='<h3 id="day2">Day 2</h3>',$.each(day2,function(t,a){var i=n.diff(s,"minutes");m+='<div class="list day2-list clearfix" style="width:'+(4*i+150)+'px">',m+='<div class="pull-left room">'+t+"</div>",$.each(a,function(t,a){var i=moment(a.start),n=moment(a.end);a.mins=n.diff(i,"minutes"),a.diff=i.diff(s,"minutes"),a.start_=i.format("HH:mm"),a.end_=n.format("HH:mm"),m+=getGrid(a)}),m+="</div>"}),$("#main").append(m);var e=getTimeline(a,i);$("#day1").after(e);var d=getTimeline(s,n);$("#day2").after(d)}).fail(function(){callback(null)});