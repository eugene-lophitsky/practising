let txtElement = document.getElementById("userData");
let sendButton = document.querySelector("button");
let output = document.getElementById("label");

function checkMail(e) {
  e.preventDefault();
  let isEmail = txtElement.value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  console.log(isEmail);
  if(isEmail === null) {
    output.innerHTML = "email не валидный";
  } else {
    output.innerHTML = "";
  }
}
sendButton.addEventListener("click", checkMail);

const validateEmail = (email) => {
  return String(email);
};


let nickname = "Уася";
let helloName = `привет, ${nickname}`;
console.log(helloName);