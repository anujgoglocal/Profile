import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import "./Modal.scss";

const Backdrop = (props) => {
    return <div className="modal_backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className="modal">
            <div className="modal_content">{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById("modal-overlays")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay {...props} />,
                document.getElementById("modal-overlays")
            )}
        </Fragment>
    );
};

export default Modal;
