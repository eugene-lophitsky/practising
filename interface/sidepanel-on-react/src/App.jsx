import { useState } from "react";
import "./css/App.css";

function App() {
  
  const [openPanel, setOpenPanel] = useState("hidePanel");
  const [buttonText, setButtonText] = useState();

 function handleClick () {
    setOpenPanel(!openPanel);
    setButtonText(!buttonText);
  }

  return (
    <div>
      <div className="sidepanel" id={openPanel ? "openPanel" : "hidePanel"}>
        <a href="https://react.dev/" className="sidepanel-link" target="_blank" rel="noopener noreferrer">React</a>
        <a href="https://mui.com/" className="sidepanel-link" target="_blank" rel="noopener noreferrer">Material UI</a>
        <a href="https://redux-toolkit.js.org/" className="sidepanel-link" target="_blank" rel="noopener noreferrer">Redux Toolkit</a>
        <a href="https://getbootstrap.com/" className="sidepanel-link" target="_blank" rel="noopener noreferrer">Bootstrap</a>
        <a href="https://laravel.com/" className="sidepanel-link" target="_blank" rel="noopener noreferrer">Laravel</a>
        <a href="https://spring.io/" className="sidepanel-link" target="_blank" rel="noopener noreferrer">Spring</a>
      </div>
      <a id="button" onClick={handleClick}>{buttonText ? "закрыть" : "открыть"}</a>
    </div>
  );
}

export default App;
