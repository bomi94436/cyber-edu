import React from "react";

const RegisterRadio = ({ title, name, value, setRegister }) => {
  return (
    <span>
      <label htmlFor={value + "-input"}>{title}</label>
      <input
        id={value + "-input"}
        type="radio"
        name={name}
        value={value}
        onChange={(event) =>
          setRegister({ name: name, value: event.target.value })
        }
      />
    </span>
  );
};

export default RegisterRadio;
