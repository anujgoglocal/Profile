import React, { useState, useEffect } from "react";
import Button from "../../../Utilities/Components/Button/Button";
import RadioButton from "../../../Utilities/Components/Radio Button/RadioButton";
import Modal from "../../../Utilities/Components/UI/Modal";
// import "./PackageForm.scss";
import "./AddressForm.scss"

const PackageForm = ({ onClose, setState, address, allAddress }) => {
    const initialState = address;

    const [addressState, setAddressState] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setAddressState({
                ...addressState,
                address_line1: parseFloat(addressState.address_line1),
                state: parseFloat(addressState.state),
                pin: parseFloat(addressState.pin),
            });
            setState(addressState);
            
            // onNext();
            onClose()
        }
    }, [formErrors]);


    const validate = (values) => {
        const errors = {};

        if (!values.address_line1) {
            errors.address_line1 = "Address is Required!";
        }
        if (!values.state) {
            errors.state = "State is required!";
        }
        if (!values.pin) {
            errors.pin = "Pin is required!";
        }
        return errors;
    };

    const onChangeHandler = (e) => {
        setAddressState((state) => {
            return {
                ...state,
                [e.target.name]: e.target.value,
            };
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(addressState));
        setIsSubmit(true);
    };

    return (
        <Modal onClose={onClose}>
            <form onSubmit={onSubmitHandler}>
                <div className="bf-container">
                    <div className="bf-heading">
                        <div className="bf-title ff-poppins f-m fw-sb">
                            Add Warehouse/Other Office
                        </div>
                        <div className="cross-icon" onClick={() => onClose()}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAx0lEQVRIie2U0QqCQBBFj31gW6H4UN9eUGSF/YGBPbSCyK7MjEpEe8AnZ+7ZXWeFROKfKIAncAU2ir4tcANqINdKM9/Y+qcBSkFf6Wu7vlorBnj0AiTyobQF7hbxLhAUk4ekjc8wkQcCX8ChV1NEavZWqUS+mLQjdpTSTzGJ0M4X26lUrpaulOLM+G4SoUEam/ZZ+MpwjV0ZyT2fXdoxu9wFArW/TGcRX4TSMfnZIq4U0pi8sogdnxUf0R2ZA06+d20RJxK/yRsz0J/5iLMyRAAAAABJRU5ErkJggg==" />
                        </div>
                    </div>
                    <div className="bf-input">
                        <label htmlFor="">Title</label>
                        <input
                            type="string"
                            className="fw-r f-xs "
                            // required
                            name="title"
                            value={addressState.title}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                    </div>
                    <div className="bf-input">
                        <label htmlFor="">Address Line 1*</label>
                        <input
                            type="string"
                            className="fw-r f-xs "
                            // required
                            name="address_line1"
                            value={addressState.address_line1}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.address_line1}</p>
                    </div>
                    <div className="bf-input">
                       <label htmlFor="">Address Line 2</label>
                        <input
                            type="string"
                            className="fw-r f-xs "
                            // required
                            name="address_line2"
                            value={addressState.address_line2}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                    </div>
                    <div className="bf-input">
                       <label htmlFor="">Landmark</label>
                        <input
                            type="string"
                            className="fw-r f-xs "
                            // required
                            name="landmark"
                            value={addressState.landmark}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        {/* <p className="err_msg">{formErrors.height}</p> */}
                    </div>
                   <div className="display-flex">
                    <div className="bf-input">
                       <label htmlFor="">State*</label>
                        <input
                            type="string"
                            placeholder=""
                            className="fw-r f-xs "
                            // required
                            name="state"
                            value={addressState.state}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.state}</p>
                    </div>
                    
                    <div className="bf-input sm-row">
                       <label htmlFor="">Pin*</label>
                        <input
                            type="string"
                            placeholder=""
                            className="fw-r f-xs "
                            // required
                            name="pin"
                            value={addressState.pin}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.pin}</p>
                    </div>

                    </div>
                   
                    <div className="pf-button-area">
                        <div className="next-button">
                            <Button
                                type="submit"
                                name="Next"
                                className="btn-primary f-xs"
                                // onClick={() => onClose()}
                            >
                                submit
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default PackageForm;
