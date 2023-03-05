const word = document.querySelector(".word");
const letters = document.querySelector(".word").textContent;
console.log(letters);

word.textContent = "";
let trans = 0;

for (i of letters) {
  let temp = spanWrapper(i);
  word.appendChild(temp);
  trans += 50;
}

function spanWrapper(letter) {
  let temp = document.createElement("span");
  temp.textContent = letter;
  temp.classList.add("letter");
  temp.style.animationDelay = `${trans}ms`;
  return temp;
}
