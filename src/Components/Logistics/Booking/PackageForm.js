import React, { useState, useEffect } from "react";
import Button from "../../../Utilities/Components/Button/Button";
import RadioButton from "../../../Utilities/Components/Radio Button/RadioButton";
import Modal from "../../../Utilities/Components/UI/Modal";
import "./PackageForm.scss";

const PackageForm = ({ onClose, onNext, setState, pfData }) => {
    const initialState = pfData;

    const [pfState, setPFState] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setPFState({
                ...pfState,
                weight: parseFloat(pfState.weight),
                length: parseFloat(pfState.length),
                width: parseFloat(pfState.width),
                height: parseFloat(pfState.height),
            });
            setState(pfState);
            onNext();
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};

        if (!values.weight) {
            errors.weight = "Weight is required!";
        }
        if (!values.length) {
            errors.length = "Length is required!";
        }
        if (!values.width) {
            errors.width = "Width is required!";
        }
        if (!values.height) {
            errors.height = "Height is required!";
        }
        if (!values.load_type) {
            errors.load_type = "Load Type is required!";
        }
        if (!values.consignment_category) {
            errors.consignment_category = "Consignment Category is required!";
        }
        if (!values.description) {
            errors.description = "Description is required!";
        }
        if (!values.service_type) {
            errors.service_type = "Service Type is required!";
        }

        return errors;
    };

    const onChangeHandler = (e) => {
        setPFState((state) => {
            return {
                ...state,
                [e.target.name]: e.target.value,
            };
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(pfState));
        setIsSubmit(true);
    };

    return (
        <Modal onClose={onClose}>
            <form onSubmit={onSubmitHandler}>
                <div className="bf-container">
                    <div className="bf-heading">
                        <div className="bf-title ff-poppins f-m fw-sb">
                            Package Details
                        </div>
                        <div className="cross-icon" onClick={() => onClose()}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAx0lEQVRIie2U0QqCQBBFj31gW6H4UN9eUGSF/YGBPbSCyK7MjEpEe8AnZ+7ZXWeFROKfKIAncAU2ir4tcANqINdKM9/Y+qcBSkFf6Wu7vlorBnj0AiTyobQF7hbxLhAUk4ekjc8wkQcCX8ChV1NEavZWqUS+mLQjdpTSTzGJ0M4X26lUrpaulOLM+G4SoUEam/ZZ+MpwjV0ZyT2fXdoxu9wFArW/TGcRX4TSMfnZIq4U0pi8sogdnxUf0R2ZA06+d20RJxK/yRsz0J/5iLMyRAAAAABJRU5ErkJggg==" />
                        </div>
                    </div>
                    <div className="bf-input">
                        <input
                            type="string"
                            placeholder="Weight(in Kg)"
                            className="fw-r f-xs "
                            // required
                            name="weight"
                            value={pfState.weight}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.weight}</p>
                    </div>
                    <div className="bf-input">
                        <input
                            type="string"
                            placeholder="Length(in inch)"
                            className="fw-r f-xs "
                            // required
                            name="length"
                            value={pfState.length}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.length}</p>
                    </div>
                    <div className="bf-input">
                        <input
                            type="string"
                            placeholder="Width(in inch)"
                            className="fw-r f-xs "
                            // required
                            name="width"
                            value={pfState.width}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.width}</p>
                    </div>
                    <div className="bf-input">
                        <input
                            type="string"
                            placeholder="Height(in inch)"
                            className="fw-r f-xs "
                            // required
                            name="height"
                            value={pfState.height}
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.height}</p>
                    </div>
                    <div className="bf-rinput ff-poppins ">
                        <div className="bf-rinput-title f-xs fw-m">
                            Load Type
                        </div>
                        <RadioButton
                            name="load_type"
                            value="Non-Document"
                            checked={pfState.load_type === "Non-Document"}
                            onChange={(e) => onChangeHandler(e)}
                            id="nd"
                            labelClass="f-xs fw-m"
                        />
                        <RadioButton
                            name="load_type"
                            value="Document"
                            checked={pfState.load_type === "Document"}
                            onChange={(e) => onChangeHandler(e)}
                            id="d"
                            labelClass="f-xs fw-m"
                            // required
                        />
                    </div>
                    <p className="err_msg">{formErrors.load_type}</p>
                    <div className="bf-rinput ff-poppins ">
                        <div className="bf-rinput-title f-xs fw-m">
                            Consignment Category
                        </div>
                        <RadioButton
                            name="consignment_category"
                            value="Non-Document"
                            checked={
                                pfState.consignment_category === "Non-Document"
                            }
                            onChange={(e) => onChangeHandler(e)}
                            id="nd2"
                            labelClass="f-xs fw-m"
                        />
                        <RadioButton
                            name="consignment_category"
                            value="Document"
                            checked={
                                pfState.consignment_category === "Document"
                            }
                            onChange={(e) => onChangeHandler(e)}
                            id="d2"
                            labelClass="f-xs fw-m"
                        />
                    </div>
                    <p className="err_msg">{formErrors.consignment_category}</p>
                    <div className="bf-input">
                        <input
                            type="text"
                            placeholder="Description"
                            name="description"
                            value={pfState.description}
                            className="fw-r f-xs "
                            // required
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.description}</p>
                    </div>
                    <div className="bf-input">
                        <input
                            type="text"
                            placeholder="Service Type"
                            value={pfState.service_type}
                            name="service_type"
                            className="fw-r f-xs "
                            // required
                            onChange={(e) => {
                                onChangeHandler(e);
                            }}
                        />
                        <p className="err_msg">{formErrors.service_type}</p>
                    </div>
                    <div className="pf-button-area">
                        <div className="next-button">
                            <Button
                                type="submit"
                                name="Next"
                                className="btn-primary f-xs"
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default PackageForm;
