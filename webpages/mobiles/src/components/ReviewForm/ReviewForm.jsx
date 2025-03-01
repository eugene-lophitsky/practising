import React from "react";
import { useState } from "react";
import "../ReviewForm/writeReview.css";

function ReviewForm() {

  const [name, setName] = useState(localStorage.getItem("name") ?? "");
  const [rate, setRate] = useState(localStorage.getItem("rate") ?? "");
  const [msg, setMsg] = useState(localStorage.getItem("msg") ?? "");
  const [nameError, setNameError] = useState("");
  const [rateError, setRateError] = useState("");

  function handleSubmit (e) {
    e.preventDefault();
    validateName();
    validateRate();
    clearForm();
  }

  let correctName = false, correctRate = false;

  const validateName = () => {
    let validName = name.trim();
    if (validName === "" || validName.length === 0) {
      setNameError("Вы забыли указать имя и фамилию!");
    }
    if (validName.length < 2) {
      setNameError("Имя не может быть короче 2 символов!");
    } else {
      correctName = true;
    }
  }

  const validateRate = () => {
    if (rate >= 1 && rate <= 5) {
      correctRate = true;
    } else {
      setRateError('Оценка должна быть от 1 до 5!');
    }
  }

  function clearForm () {
    if (correctName === false && correctRate === false) {
      setRateError("")
    }
    if (correctName === true && correctRate === true) {
      setName('');
      setRate('');
      setMsg('');
      localStorage.removeItem("name");
      localStorage.removeItem("rate");
      localStorage.removeItem("msg");
      alert("Ваш отзыв был успешно отправлен и будет отображён после модерации");
    }
  }

  return (
    <>
      <div className="main-misc-feedback">
        <span className="main-misc-feedback__header">Добавить свой отзыв</span>
        <form
          className="main-misc-feedback-form"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="main-misc-feedback-user">
            <div className="main-misc-feedback-user__fields">
              <input 
              onChange={(e) => { setName(e.target.value); 
              setNameError(""); 
              localStorage.setItem("name", e.target.value) 
            }} 
                className={ nameError ? "main-misc-feedback-user__name-blank" : "main-misc-feedback-user__name" }
                type="text"
                name="name"
                placeholder="Имя и фамилия"
                value={name} id="name"
              >
              </input>
              <input 
            onChange={(e) => { setRate(e.target.value); 
            setRateError(""); 
            localStorage.setItem("rate", e.target.value) 
          }}
                className={ rateError ? "main-misc-feedback-user__rate-blank" : "main-misc-feedback-user__rate" }
                type="number"  
                min="1"
                max="5"
                placeholder="Оценка"
                value={rate}
              />
            </div>

            <div className="main-misc-feedback-user__errs">
              <div className={nameError ? "__name-err_show-err" : "main-misc-feedback-user__name-err"}>{nameError}</div>
              <div className={rateError ? "__val-err_show-err" : "main-misc-feedback-user__val-err"}>{rateError}</div>
            </div>
          </div>

          <div className="main-misc-feedback-msg main-misc-feedback_bottom-30">
            <textarea
              className="main-misc-feedback-msg__field" 
              onInput={(e)=> {
                setMsg(e.target.value)
                localStorage.setItem("msg", e.target.value);
              }}
              name="message"
              rows="10"
              placeholder="Текст отзыва"
              value={msg}
            >{msg}</textarea>
          </div>

          <button
            type="submit"
            className="main-misc-feedback-user__button"
            id="send-review"
          >
            Отправить отзыв
          </button>
        </form>
      </div>
    </>
  );
}

export default ReviewForm;
