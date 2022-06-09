import React from "react";
import Button from "../Layouts/Button/Button";
import "../../Components/Footer/Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-contact_btn">
                <Button
                    class="btn-secondary3 contactus ff-poppins"
                    name="Contact Us"
                >
                    Contact Us
                </Button>
            </div>
        </div>
    );
};

export default Footer;
