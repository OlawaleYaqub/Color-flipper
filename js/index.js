const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "cyan",
  "orange",
  "yellow",
];
const btn = document.querySelector(".btn");
const span = document.querySelector(".span");

btn.addEventListener("click", () => {
  let randNum = getRandomNum();
  document.body.style.backgroundColor = colors[randNum];
  span.textContent = colors[randNum];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
