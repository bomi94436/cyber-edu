import React from "react";

const RegisterRadio = ({ title, name, value, checked, setRegister }) => {
  return (
    <span>
      <label htmlFor={value + "-input"}>{title}</label>
      <input
        id={value + "-input"}
        type="radio"
        name={name}
        value={value}
        defaultChecked={checked}
        onChange={(event) =>
          setRegister({ name: name, value: event.target.value })
        }
      />
    </span>
  );
};

export default RegisterRadio;
