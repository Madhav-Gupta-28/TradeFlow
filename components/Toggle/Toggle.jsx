import React from 'react';
import Style from "./Toggle.module.css";



const Toggle = ({label}) => {
  return (
    <div className={Style.container}>
   
    <div className={Style.toggleswitch}>
      <input type="checkbox" className={Style.checkbox}  
             name={label} id={label} />
      <label className={Style.label} htmlFor={label}>
        <span className={Style.inner} />
        <span className={Style.switch} />
      </label>
    </div>
  </div>
  );
}

export default Toggle