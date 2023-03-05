const word = document.querySelector(".word");
const letters = document.querySelector(".word").textContent;

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

const targets = document.querySelectorAll(".target");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      console.log(entry.target);
    } else {
      entry.target.classList.remove("show");
    }
  });
});
function callback() {}

targets.forEach((target) => observer.observe(target));
