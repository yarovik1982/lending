setInterval(function() {var time = document.getElementById('servertime').innerHTML;
	time = time.split(':');var hour = parseInt(time[0]);var minute = parseInt(time[1]);
	var second = parseInt(time[2]);++second;if(second >= 60) {second = 0;++minute;if(minute >= 60) {minute = 0;++hour;
	if(hour >= 24) {hour = 0;}}}document.getElementById('servertime').innerHTML = (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);}, 1000);