const form = document.querySelector(".contacts__forms-reservation");

async function confirmSubmit(input) {
  input.preventDefault();
  const status = document.querySelector(".notification");
  const response = await fetch(input.target.action, {
    method: form.method,
    body: new FormData(input.target),
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    const inputValue = document.querySelector(
      ".contacts__forms-reservation-field"
    ).value;
    status.style.display = "block";
    status.innerText = `Thank you ${inputValue} 
                          We can’t wait to see you!`;
    form.reset();
  } else {
    status.innerText = "Oops, something went wrong";
  }
  setTimeout(function () {
    status.style.opacity = "0";
    status.style.transition = "opacity 1s ease-in-out";
  }, 2000);
  setTimeout(function () {
    status.style.display = "none";
    status.innerText = "";
    status.style.opacity = "1";
  }, 3000);
}

form.addEventListener("submit", confirmSubmit);

