const olddiv = document.querySelector(".items");
const newdiv = document.querySelector(".items-2");

const cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((element) => {
  element.addEventListener("click", function () {
    olddiv.classList.add("hidden");
    newdiv.classList.remove("hidden");
  });
});
