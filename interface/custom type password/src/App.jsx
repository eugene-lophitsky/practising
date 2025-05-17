import { useState } from "react"
import './App.css';

function App() {

  const [inputType, setInputType] = useState('password');

  return (
    <div className="inputWrapper">
         <input type={inputType} name="text" className="textfield"  />
         <input type="checkbox" name="switcher" id="switcher" className="switcher" onChange={(event) => event.target.checked ? setInputType("text") : setInputType("password")} />
         <label htmlFor="switcher"></label>
    </div>
  )
}

export default App;
