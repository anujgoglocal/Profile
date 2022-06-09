import React, { useState, useEffect } from "react";
import Button from "../../../Utilities/Components/Button/Button";
import Modal from "../../../Utilities/Components/UI/Modal";
import "./DestForm.scss";

const DestForm = ({ onClose, onNext, onPrev, DFData, setState }) => {
    const initialState = DFData;

    const [DFState, setDFState] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setState(DFState);
            onNext();
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};

        if (!values.first_name) {
            errors.first_name = "First Name is required!";
        }
        if (!values.last_name) {
            errors.last_name = "Last Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        }
        if (!values.phone) {
            errors.phone = "Mobile Number is required!";
        }
        if (!values.address_line1) {
            errors.address_line1 = "Address is required!";
        }
        if (!values.city) {
            errors.city = "City is required!";
        }
        if (!values.state) {
            errors.state = "State is required!";
        }
        if (!values.pincode) {
            errors.pincode = "Pincode is required!";
        }
        if (!values.country) {
            errors.country = "Country is required!";
        }

        return errors;
    };

    const onChangeHandler = (e) => {
        setDFState((state) => {
            return {
                ...state,
                [e.target.name]: e.target.value,
            };
        });
    };

    const prevHandler = () => {
        onPrev();
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(DFState));
        setIsSubmit(true);
    };
    return (
        <Modal onClose={onClose}>
            <form onSubmit={onSubmitHandler}>
                <div className="bf-container">
                    <div className="bf-heading">
                        <div className="bf-title ff-poppins f-m fw-sb">
                            Reciever's Details
                        </div>
                        <div className="cross-icon" onClick={() => onClose()}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAx0lEQVRIie2U0QqCQBBFj31gW6H4UN9eUGSF/YGBPbSCyK7MjEpEe8AnZ+7ZXWeFROKfKIAncAU2ir4tcANqINdKM9/Y+qcBSkFf6Wu7vlorBnj0AiTyobQF7hbxLhAUk4ekjc8wkQcCX8ChV1NEavZWqUS+mLQjdpTSTzGJ0M4X26lUrpaulOLM+G4SoUEam/ZZ+MpwjV0ZyT2fXdoxu9wFArW/TGcRX4TSMfnZIq4U0pi8sogdnxUf0R2ZA06+d20RJxK/yRsz0J/5iLMyRAAAAABJRU5ErkJggg==" />
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="bf-input">
                            <input
                                type="text"
                                placeholder="First Name"
                                name="first_name"
                                value={DFState.first_name}
                                className="fw-r f-xs "
                                // required
                                onChange={(e) => {
                                    onChangeHandler(e);
                                }}
                            />
                            <p className="err_msg">{formErrors.first_name}</p>
                        </div>
                        <div className="bf-input">
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={DFState.last_name}
                                name="last_name"
                                className="fw-r f-xs "
                                // required
                                onChange={(e) => {
                                    onChangeHandler(e);
                                }}
                            />
                            <p className="err_msg">{formErrors.last_name}</p>
                        </div>
                    </div>
                    <div className="bf-input">
                        <input
                            type="email"
                            placeholder="Email"
                            value={DFState.email}
                            name="email"
                            className="fw-r f-xs "
                            // required
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.email}</p>
                    </div>
                    <div className="bf-input">
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            value={DFState.phone}
                            name="phone"
                            className="fw-r f-xs "
                            // required
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.phone}</p>
                    </div>
                    <div className="bf-input">
                        <input
                            type="text"
                            placeholder="Address Line 1"
                            value={DFState.address_line1}
                            name="address_line1"
                            className="fw-r f-xs "
                            // required
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.address_line1}</p>
                    </div>
                    <div className="bf-input">
                        <input
                            type="text"
                            placeholder="Address Line 2"
                            value={DFState.address_line2}
                            name="address_line2"
                            className="fw-r f-xs "
                            // required
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                    </div>
                    <div className="flex-row">
                        <div className="bf-input">
                            <input
                                type="text"
                                placeholder="City"
                                value={DFState.city}
                                name="city"
                                className="fw-r f-xs "
                                // required
                                onChange={(e) => {
                                    onChangeHandler(e);
                                }}
                            />
                            <p className="err_msg">{formErrors.city}</p>
                        </div>
                        <div className="bf-input">
                            <input
                                type="text"
                                placeholder="State"
                                value={DFState.state}
                                name="state"
                                className="fw-r f-xs "
                                // required
                                onChange={(e) => {
                                    onChangeHandler(e);
                                }}
                            />
                            <p className="err_msg">{formErrors.state}</p>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="bf-input">
                            <input
                                type="number"
                                name="pincode"
                                value={DFState.pincode}
                                placeholder="Pincode"
                                className="fw-r f-xs "
                                // required
                                onChange={(e) => {
                                    onChangeHandler(e);
                                }}
                            />
                            <p className="err_msg">{formErrors.pincode}</p>
                        </div>
                        <div className="bf-input">
                            <input
                                type="text"
                                placeholder="Country"
                                value={DFState.country}
                                name="country"
                                className="fw-r f-xs "
                                // required
                                onChange={(e) => {
                                    onChangeHandler(e);
                                }}
                            />
                            <p className="err_msg">{formErrors.country}</p>
                        </div>
                    </div>
                    <div className="pf-button-area">
                        <div className="next-button">
                            <Button
                                name="Prev"
                                className="btn-secondary3 f-xs"
                                onClick={prevHandler}
                                type="submit"
                            >
                                Prev
                            </Button>
                        </div>
                        <div className="next-button">
                            <Button
                                name="Submit"
                                className="btn-primary f-xs"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default DestForm;
