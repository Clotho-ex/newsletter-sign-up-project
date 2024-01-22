const form = document.querySelector("#form");
const submitEmail = document.querySelector("#submit-email");
const clearInput = document.querySelector("#email");
const signUp = document.querySelector("#signup");
const success = document.querySelector("#success");
const dismiss = document.querySelector("#dismiss");

const updateSuccessMessage = (email) => {
  // update strong tag with email
  submitEmail.textContent = email;
};

const switchPages = () => {
  signUp.classList.toggle("hidden");
  success.classList.toggle("hidden");
};

function isValid(str) {
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return reg.test(str);
}

function toggleErrors() {
  const errorMessage = document.querySelector(".error-message");
  const input = document.querySelector("#email");
  errorMessage.classList.remove("hidden");
  input.classList.add("error");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector("#email");
  const valid = isValid(email.value);
  if (!valid) {
    return toggleErrors();
  }
  if (valid) {
    updateSuccessMessage(email.value);
    switchPages();
  }
});

email.addEventListener("input", () => {
  if (email.value === "") {
    const errorMessage = document.querySelector(".error-message");
    clearInput.classList.remove("error");
    clearInput.classList.remove("invalid");
    errorMessage.classList.add("hidden");
  }
});

dismiss.addEventListener("click", () => {
  switchPages();
  updateSuccessMessage("");
  setTimeout(() => {
    clearInput.value = "";
  }, 50); // Delay clearing by 50 milliseconds
});
