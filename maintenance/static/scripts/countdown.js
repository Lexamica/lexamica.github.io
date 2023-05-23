function launchTimer() {
  console.log('Launch timer starting')
  var countDownDate = new Date("Oct 01, 2023 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    const timer = document.getElementById("launch-timer");

    if(!timer) {
      clearInterval(x);
      return;
    }
    
    timer.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s " + 'until Lexamica V1 launch';

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("launch-timer").innerHTML = "LEXAMICA IS LIVE";
    }
  }, 1000);
}

launchTimer();

function outageTimer() {
  let countDownDate;

  // get outage report from API
  const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            const data = this.response;
            if (data.expectedRestoration) {
              outageInterval(data.expectedRestoration)
            } else {
              console.log('Failed to get expected outage restoration information')
            }
          }
          else {
            console.log('Failed to get expected outage restoration information')
          }
        }
      }
      xhttp.open("GET", 'https://app.lexamica.com/api/v1/outage', true);
      xhttp.send();
}

function outageInterval (date) {
  countDownDate = new Date(date).getTime();
  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="outage-timer"
    const timer = document.getElementById("outage-timer");

    if(!timer) {
      clearInterval(x);
      return;
    }
    
    document.getElementById("outage-timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s until maintenance is over";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("outage-timer").innerHTML = "Any minute";
    }
  }, 1000);
}

outageTimer();