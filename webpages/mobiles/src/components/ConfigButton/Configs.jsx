import React, { useState } from 'react';
import mem_capacity from "../ConfigButton/memory_volume";
import ConfigButton from "../ConfigButton/ConfigButton"
import "../ConfigButton/configbutton.css";

export default function Configs () {
  const [selectMemory, setSelectMemory] = useState(
    localStorage.getItem("Указан объём:") || '128 ГБ'
  );

  return (
    <div className="main-misc-memory">
      <div className="main-misc-memory__default-volume">
        Конфигурация памяти: {""}
        <span>{selectMemory}</span>
    </div>
    <ul className="main-misc-memory__check-volume">
        {mem_capacity.map((memory) => (
          <ConfigButton
            key={memory.id}
            memory={memory}
            selectMemory={selectMemory}
            setSelectMemory={setSelectMemory}
          />
        ))}
      </ul>
    </div>
  );
}




    
              
