import React from 'react';

export default function ColorButton (props) {
  const { bodycolor, selectColor, setSelectColor } = props;

  return (
    <li className="main-misc-params__clr-swatch">
      <label className="main-misc-params__btn">
        <input className="main-misc-params__input" type='radio' name='selected-color' value={`${bodycolor.color}`} defaultChecked={bodycolor.color === selectColor}
          onChange={() => {
            setSelectColor(`${bodycolor.color}`);
              localStorage.setItem('Выбран цвет:', bodycolor.color);
          }}
        />
        <span className="main-misc-params__imgbox"><img src={`${bodycolor.url}`} alt={`${bodycolor.alt}`} /></span>
      </label>
    </li>
  );
}