import React from "react";
import "./Button.scss";

const Button = (props) => {
    return (
        <button
            type={props.type}
            className={`${props.className} btn`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
