import React, {useState} from "react";

interface ButtonProps  {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'error' | 'link';
  disabled: boolean;
  children: React.ReactNode; 
}

function Button ({size, variant, disabled, children}: ButtonProps) {

  const [counter, setCounter] = useState<number>(0);

 function getIt () {
   fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(data => console.log(data));
  setCounter(counter+1);
 }

  return (
   <div className="button-wrapper">
     <button className="button" size={size} disabled={disabled} variant={variant} onClick={getIt}>{children} {counter > 0 ?  `нажата ${counter} ${"раз"}` : ""}</button>
   </div>
  )
}

export default Button;

