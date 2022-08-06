const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".Color");

btn.addEventListener("click", () => {
  let hexcolor = "#";
  // Looping through the "Hex" values
  for (let i = 0; i < 6; i++) {
    hexcolor += hex[getRandNum()];
  }
  document.body.style.backgroundColor = hexcolor;
  color.textContent = hexcolor;
});
//Function to generate random numbers and round it down
function getRandNum() {
  return Math.floor(Math.random() * hex.length);
}
