setSeconds();
setMinutes();
setHours();
setDate();
function setDate(){
  
}
setInterval(setSeconds, 1000);
function setSeconds() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() * 6;
  const secondHand = document.querySelector(".clock__hand--seconds");
  secondHand.style.setProperty("--rotation-seconds", secondsRatio);
}

setInterval(setMinutes, 1000);
function setMinutes() {
  const currentDate = new Date();
  const minuteRatio = currentDate.getMinutes() * 6;
  const minuteHand = document.querySelector(".clock__hand--minute");
  minuteHand.style.setProperty("--rotation-minutes", minuteRatio);
}

setInterval(setHours, 1000);
function setHours() {
  const currentDate = new Date();
  const hoursRatio = currentDate.getHours() % 12;
  const hoursHand = document.querySelector(".clock__hand--hour");
  hoursHand.style.setProperty("--rotation-hours", hoursRatio * 30);
}
