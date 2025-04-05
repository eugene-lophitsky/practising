import "./App.css";
import {useState} from "react";

function App() {

    const [inputText, setInputText] = useState("");
    const [message, setMessage] = useState("");

    const requestData = {
        nickname: inputText,
        message: message,
    }

   function handleClickRequest (e) {
        e.preventDefault();
       fetch('http://localhost:3030/message', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
           },
           body: new URLSearchParams(JSON.stringify(requestData)),
       })
           .then(response =>{
               return response.text();
           })
           .then(data => {
              return console.log(data);
           })
   }

  return (
    <>
     <form className="form">
      <label htmlFor="nickname">Имя:</label>
      <input type="text" name="nickname" id="nickname" className="nickname" value={inputText} onChange={(e)=> setInputText(e.target.value)}/>
      <label htmlFor="nickname">Текст сообщения:</label>
      <textarea name="message" id="message" className="message" rows="6" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
      <button id="save-data" className="save-data" type="submit" onClick={handleClickRequest}>создать запись</button>
     </form>
    </>
  )
}

export default App;
