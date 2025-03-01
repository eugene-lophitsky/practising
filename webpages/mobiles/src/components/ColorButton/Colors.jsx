import React, { useState } from 'react';
import colors from "../ColorButton/vendor_info.js";
import ColorButton from '../ColorButton/ColorButton';
import "../ColorButton/colorbutton.css";

export default function Colors() {
  const [selectedColor, setSelectedColor] = useState(localStorage.getItem('Выбран цвет:') || "морской синий");
  return (
    <>
      <div className="main-misc-params__current-color">
        Цвет товара: <span id="body-color">{selectedColor}</span>
      </div>
      <ul className="main-misc-params__colors">
        {colors.map((color) => (
          <ColorButton key={color.id} bodycolor={color} selectColor={selectedColor}
          setSelectColor={setSelectedColor}
          />
        ))}
      </ul>
    </>
  );
}
