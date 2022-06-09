import React from "react";
import "./RadioButton.scss";
const RadioButton = ({ name, value, id, labelClass, checked, onChange }) => {
    return (
        <label htmlFor={id} className={`${labelClass} radioContainer`}>
            <input
                type="radio"
                name={name}
                value={value}
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <span className="checkmark" />
            {value}
        </label>
    );
};

export default RadioButton;
