var timer = document.getElementById("timer");
var time = 0;
var intervalId;
var selectedTime = 0;

function addTime(sec) {
  selectedTime += sec;
  startTimer();
}

function resetTime() {
  time = 0;
  updateTimer();
  clearInterval(intervalId);
}

function updateTimer() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.innerHTML = minutes + ":" + seconds;
      
  if (time <= 0) {
    clearInterval(intervalId);
    document.body.style.backgroundColor = "black";
    timer.classList.remove("red");
  } else if (time <= 300) {
    timer.classList.add("red");
  }
  if (time <= 0) {
    clearInterval(intervalId);
    document.body.style.backgroundColor = "black";
    timer.classList.remove("yellow");
  } else if (time <= 600) {
    timer.classList.add("yellow");
  }
  
}

function startTimer() {
  time += selectedTime;
  updateTimer();
  clearInterval(intervalId);
  intervalId = setInterval(function() {
    time--;
    updateTimer();
  }, 1000);
  selectedTime = 0;
}

document.addEventListener("DOMContentLoaded", function() {
  updateTimer();
});