const cardselect = document.getElementById("card_select");
const cardrating = document.getElementById("card_rating");

var rating = null;

submit.addEventListener("click", function () {
  if (rating >= 1 && rating <= 5) {
    cardselect.style.display = "none";
    cardrating.style.display = "grid";
    document.getElementById("card_result").innerHTML = rating;
  } else {
    document.getElementById("missingInfo").style.display = "block";
    document.getElementById("missingInfo").innerHTML =
      "Please Select a Number from 1 to 5";
  }
});
