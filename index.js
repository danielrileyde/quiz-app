const toggleBookmark = document.querySelector("[data-js='bookmark']");
// const toggleAnswer = document.querySelector('[data-js="button-answer"]');
// const answerClass = toggleAnswer.classList;
const buttonTitle = document.querySelector("[data-js='button-title']");

toggleBookmark.addEventListener("click", (event) => {
  const bookmark = event.currentTarget;
  const svg = bookmark.children[0];
  svg.classList.toggle("active");
});

// toggleAnswer.addEventListener("click", () => {
//   console.log("clicked");
//   const result = answerClass.toggle("None, it will always be difficult.");
//   toggleAnswer.textContent = `${result}; {$answerClass} `;
// });

// const showAnswer = document.querySelector(".button--answer");

function toggleAnswer() {
  var toggle = document.getElementById("question");
  if (
    toggle.innerHTML ===
    "If you dug a hole through the centre of the earth starting from Spain, which HTML tag would make your digging easier?"
  ) {
    toggle.innerHTML = "Nothing it will always be difficult";
  } else {
    toggle.innerHTML =
      "If you dug a hole through the centre of the earth starting from Spain, which HTML tag would make your digging easier?";
  }
}

buttonTitle.addEventListener("click", (event) => {
  const title = event.currentTarget;
  if (title.innerHTML === "Show Answer") title.innerHTML = "Hide Answer";
  else title.innerHTML = "Show Answer";
});

// function switchTitle() {
//   var title = document.getElementById("button-answer");

//   if (title.value === "Show Answer") title.value = "Hide Answer";
//   else title.value = "Show Answer";
// }
