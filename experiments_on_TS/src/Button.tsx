import React from "react";

interface ButtonProps  {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'error' | 'link';
  disabled: boolean;
  children: React.ReactNode; 
}

function Button ({size, variant, disabled, children}: ButtonProps) {

  return (
   <div className="button-wrapper">
     <button className="button" size={size} disabled={disabled} variant={variant}>{children}</button>
   </div>
  )
}

export default Button;

