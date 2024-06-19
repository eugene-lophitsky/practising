"use strict";

const nameField = document.querySelector(".main-misc-feedback-user__name");
const evalField = document.querySelector(".main-misc-feedback-user__rate");
const nameError = document.querySelector(".main-misc-feedback-user__name-err");
const evalFieldEmpty = document.querySelector(".main-misc-feedback-user__val-err");
const formMain = document.querySelector(".main-misc-feedback-form");
const messageField = document.querySelector(".main-misc-feedback-msg__field");
let addedArticles = document.querySelector(".header-widgets__cart-count");
let cartButton = document.getElementById("cart-btn");

function validateName() {
  nameField.value = nameField.value.trim();
  if (nameField.value.length === 0) {
    nameError.textContent = "Вы забыли указать имя и фамилию!";
    nameError.style.backgroundColor = "#da4a0c";
    nameField.style.borderColor = "#da4a0c";
    return false;
  } else if (nameField.value.length < 2) {
    nameError.textContent = "Имя не может быть короче 2-х символов";
    nameError.style.backgroundColor = "#da4a0c";
    nameField.style.borderColor = "#da4a0c";
    return false;
  }
  return true;
}

function validateArticle() {
  if (evalField.value < 1 || evalField.value > 5) {
    evalField.style.borderColor = "#da4a0c";
    evalFieldEmpty.textContent = "Оценка должна быть от 1 до 5";
    evalFieldEmpty.style.backgroundColor = "#da4a0c";
    return false;
  }
  return true;
}

formMain.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (validateName()) {
    if (validateArticle()) {
      let result = await submitData(nameField.value, evalField.value);
      if (result) {
        nameField.value = "";
        evalField.value = "";
        messageField.value = "";
        localStorage.removeItem("nameField");
        localStorage.removeItem("evalField");
        localStorage.removeItem("messageField");
      } else {
        console.log("Ошибка запроса");
      }
    }
  }
});

let order = new Set();

function addToCart (e) {
  e.preventDefault();
  let someItem = localStorage.getItem("Товаров в корзине:");
  if(someItem !== null) {
    order.delete(e.target.id);
      localStorage.removeItem("Товаров в корзине:");
      cartButton.innerHTML = "Добавить в корзину";
      cartButton.classList.remove("main-commerce-cart-delivery__button_added");
      addedArticles.style.background = "transparent";
      addedArticles.innerHTML = "";
  }
  else {
  order.add(e.target.id);
  localStorage.setItem("Товаров в корзине:", order.size);
  showCartStatus();
  addedArticles.textContent = order.size;
  }
}
cartButton.addEventListener("click", addToCart);

nameField.addEventListener("input", (e) => { nameError.style.backgroundColor = "transparent"; nameField.style.borderColor = "#888888"; localStorage.setItem("nameField", nameField.value); });
evalField.addEventListener("input", (e) => { evalFieldEmpty.style.backgroundColor = "transparent"; evalField.style.borderColor = "#888888"; localStorage.setItem("evalField", evalField.value); });
messageField.addEventListener("input", (e) => { localStorage.setItem("messageField", messageField.value); });

let showCartStatus = () => { 
  cartButton.classList.add("main-commerce-cart-delivery__button_added"); 
  cartButton.innerHTML = "Товар уже в корзине"; 
  addedArticles.style.background = "#f36223";
}

function readStorage() {
  evalField.value = localStorage.getItem("evalField");
  nameField.value = localStorage.getItem("nameField");
  messageField.value = localStorage.getItem("messageField");
  if(+localStorage.getItem("Товаров в корзине:") !== 0) {
    showCartStatus();
    addedArticles.textContent = localStorage.getItem("Товаров в корзине:");
  } 
}
readStorage();

// Симуляция отправки на сервер. true - отправка успешная, false - отправка не удалась или запрос не принят

async function submitData(firstname, evaluate) {
  return true;
}



