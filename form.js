// function test() {
//   alert("working");
// }

// test();

const form = document.querySelector('[data-js="form"]');
const newCards = document.querySelector('[data-js="newCards"]');
const questionElement = document.querySelector('[data-js="yourQuestion"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');

const answerElement = document.querySelector('[data-js="yourAnswer"]');
const amountRight = document.querySelector('[ data-js="amountRight"]');

const maxLength = questionElement.getAttribute("maxlegth");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  const newQandA = document.createElement("section");
  newQandA.classList.add("card");

  const newCard = createCard(data);

  newCards.innerHTML = newCard;

  event.target.reset();
  document.getElementById("your-question").focus();
});

const createCard = (formData) => {
  return `
    <section class="question--card">
    <p class="question"> ${formData.yourQuestion}</p>
    <button class="button--answer">Show Answer</button>
    <div class="tags" >
      <button class="button--tag" >${formData.tagInput}</button>
    </div>
  </section>`;
};

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);
console.log(maxLength);

questionElement.addEventListener("input", () => {
  updateAmountLeft(questionElement.value.length - maxLength);
});

const updateAmountRight = (value) => {
  amountRight.innerText = value;
};

updateAmountRight(maxLength);

answerElement.addEventListener("input", () => {
  updateAmountRight(answerElement.value.length - maxLength);
});

// const doubleInput(value)
