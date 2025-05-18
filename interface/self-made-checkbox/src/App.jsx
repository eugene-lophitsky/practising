import { useState } from 'react'

function App() {

  const [checkbox, setCheckbox] = useState("checkbox");

  function handleClick () {
      setCheckbox((selfMadeCheckbox) => !selfMadeCheckbox);
  }

  return (
    <>
   <div className={checkbox ? "checkbox checked" : "checkbox"} onClick={handleClick}></div>
    </>
  )
}

export default App
