function c2D(n) {
	n = String(n);
	if (n.length == 1)
		n = '0' + n;
	return n;
}


function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    if 

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = c2D(min);
    document.getElementById('seconds').innerHTML = c2D(sec);
}
setInterval(displayTime, 10);
