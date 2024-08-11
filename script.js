const rateContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const submitButton = document.querySelector(".submit-btn");
const rateBtn = document.querySelectorAll(".btn");
const rating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
  if (rating.textContent === "") {
    window.alert("Select a rating");
  } else {
    thankYouContainer.classList.remove("hidden");
    rateContainer.style.display = "none";
  }
});

rateBtn.forEach((button) => {
  button.addEventListener("click", () => {
    rating.textContent = button.value;
  });
});
