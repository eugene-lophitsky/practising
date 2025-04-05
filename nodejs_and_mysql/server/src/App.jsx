import "./App.css";

function App() {

  return (
    <>
     <form className="form">
      <label htmlFor="author">Имя:</label>
      <input type="text" name="author" id="author" className="author"/>
      <label htmlFor="author">Текст сообщения:</label>
      <textarea name="message" id="message" className="message" rows="6"></textarea>
      <button id="save-data" className="save-data" type="submit">создать запись</button>
     </form>
    </>
  )
}

export default App;
