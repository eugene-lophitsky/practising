import React from 'react';

export default function ConfigButton (props) {
  const { memory, selectMemory, setSelectMemory } = props;

  return (
    <li className="main-misc-memory__volume-value">
      <label className="main-misc-memory__btn">
        <input className="main-misc-memory__input" value={memory.volume}
          type="radio" name="selected-memory" 
          defaultChecked={memory.volume === selectMemory}
          onChange={() => {
            setSelectMemory(memory.volume);
            localStorage.setItem("Указан объём:", memory.volume);
          }}
        />
        <span className="main-misc-memory__body">{memory.volume}</span>
      </label>
    </li>
  );
}

























// import React from "react";
// import configs from "./configs.js";
// import { useState } from "react";
// import "../ConfigButton/configbutton.css";

// function MemoryVolume(props) {
//   const { volume } = props;
 

//   return (
//         <li className="main-misc-memory__volume-value">
//           <input id={`${volume.id}`} type="radio" name="storage-volume" defaultChecked={volume.id === "volume-min" ? "defaultChecked" : ""}/>
//           <label htmlFor={`${volume.id}`}
         
//           >{`${volume.volume}`}</label>
//         </li>
//   );
// }

// function ConfigButton() {
//   return (
//       <ul className="main-misc-memory__check-volume">
//       {configs.map((volume) => (
//         <MemoryVolume volume={volume} key={volume.id} />
//       ))}
//     </ul>
//   );
// }



// export default ConfigButton;





























 // const [backGroundValue, setBackGroundValue] = useState("");
  // const [borderColor, setBorderColor] = useState("");
  // const [checked, setChecked] = useState();

  // const handleMouseOver = () => { setBackGroundValue("#f2f2f2");};
  // const handleMouseOut = () => { setBackGroundValue("");};
  // const handleMouseDown = () => { setBorderColor("2px solid #a93a09");};
  // const handleMouseUp = () => { setBorderColor("");};
  

   // onMouseOver={handleMouseOver}
          // onMouseOut={handleMouseOut} 
          // onMouseDown={handleMouseDown}
          // onMouseUp={handleMouseUp}
          // style={{ background: backGroundValue, border: borderColor}}  