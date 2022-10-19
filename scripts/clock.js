// For analog clock
const setTime = () => {

	const clock = $("#canvas");
	const ctx = clock.get(0).getContext("2d");
	
  // draw circle  
  ctx.fillStyle = "#232323";

  ctx.beginPath();
  ctx.arc(255, 255, 250, 0, 2*Math.PI);
  ctx.fill();

  ctx.fillStyle = "#eaecc6";

  ctx.beginPath();
  ctx.arc(255, 255, 10, 0, 2*Math.PI);
  ctx.fill();

  // numbers
  ctx.font = "25px Helvetica";
  ctx.fillStyle = "#2bc0e4";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for(var i = 1; i <= 12; i++){

      ctx.fillText(i, 255 + 255 * 0.9 * Math.sin(i * 2*Math.PI/12), 255 - (255 * 0.9 * Math.cos(i * 2*Math.PI/12) ));
  }

  const date    = new Date(),
        hours   = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

  const fullHours    = (hours % 12) + (minutes / 60) + (seconds / 3600),
        hoursAngle   = fullHours * 2* Math.PI / 12,
        minutesAngle = minutes * 2* Math.PI / 60,
        secondsAngle = seconds * 2* Math.PI / 60;

  // draw lines
  ctx.strokeStyle = "#eaecc6";

  // hourHand
  ctx.moveTo(255, 255);
  ctx.lineTo(255 + 255 * 0.6 * Math.sin( hoursAngle), 255 - (255 * 0.6 * Math.cos(hoursAngle) ));
  ctx.lineWidth = 5;
  ctx.stroke();

  // minuteHand
  ctx.moveTo(255, 255);
  ctx.lineTo(255 + 255 * 0.8 * Math.sin(minutesAngle), 255 - (255 * 0.8 * Math.cos(minutesAngle) ));
  ctx.lineWidth = 3;
  ctx.stroke();

  // secondHand
  ctx.moveTo(255, 255);
  ctx.lineTo(255 + 255 * 0.9 * Math.sin(secondsAngle), 255 - (255 * 0.9 * Math.cos(secondsAngle) ));
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#eaecc6"
  ctx.stroke();
}  

const showTime = () => setInterval(setTime, 1000);

showTime();

// For digital clock
const timeDisplay = () => {

    var hourDisplay   = new Date().getHours(),
        minuteDisplay = new Date().getMinutes(),
        secondDisplay = new Date().getSeconds();
        
    const ampm = hourDisplay >= 12 ? 'PM' : 'AM';

    hourDisplay = hourDisplay % 12;
    hourDisplay = hourDisplay ? hourDisplay : 12;
    minuteDisplay = minuteDisplay < 10 ? '0' + minuteDisplay : minuteDisplay;
    secondDisplay = secondDisplay < 10 ? '0' + secondDisplay : secondDisplay;

    $("#time").html(hourDisplay + " : " + minuteDisplay +  " : " + secondDisplay +
                                                         " " + ampm);
}

const showTimeDigital = () => setInterval(timeDisplay, 1000);

showTimeDigital();