import React from "react";

const RegisterRadio = ({ title, name, value, checked, setRegister }) => {
  return (
    <span>
      <label htmlFor={name + "-input"}>{title}</label>
      <input
        id={name + "-input"}
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
