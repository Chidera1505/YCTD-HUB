let count = 0;

const countEl = document.getElementById("count");
const incBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");

incBtn.addEventListener("click", function () {
  count++;
  countEl.innerText = count;
});

decBtn.addEventListener("click", function () {
  count--;
  countEl.innerText = count;
});