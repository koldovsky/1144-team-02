const clockContainer = document.querySelector(".contacts__clock");
const textOutput = document.querySelector(".uotput__text");
const startWork = "15:59:59";
const endWork = "02:00:00";

function updateClock() {
  const currentTime = new Date().toLocaleTimeString("uk");
  clockContainer.innerText = new Date().toLocaleTimeString("en-US");
  if (currentTime > startWork || currentTime < endWork) {
    textOutput.innerText = "WE ARE OPEN NOW";
    textOutput.style.color = "#0fbf0f";
  } else {
    textOutput.innerText = `SORRY, WE ARE
                            CLOSED NOW`;
    textOutput.style.color = "red";
  }
}

updateClock();

setInterval(updateClock, 1000);
