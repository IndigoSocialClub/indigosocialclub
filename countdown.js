// Set the date we're counting down to
var countDownDate = new Date("May 7, 2022 21:30:00").getTime();

function makeMeTwoDigits(n){
    if (n==null) {
      n = 0
    }
    return (n < 10 ? "0" : "") + n;
}

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
  
  // if the variable is a single digit, make it two and tag it to HTML element accordingly
  document.getElementById("days").innerHTML = makeMeTwoDigits(days)
  document.getElementById("hours").innerHTML = makeMeTwoDigits(hours)
  document.getElementById("minutes").innerHTML = makeMeTwoDigits(minutes)
  document.getElementById("seconds").innerHTML = makeMeTwoDigits(seconds)
  // If the count down is finished, don't display
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").style.display= "none"
    document.getElementById("hours").style.display= "none"
    document.getElementById("minutes").style.display= "none"
    document.getElementById("seconds").style.display= "none";
    }
  }, 1000);
