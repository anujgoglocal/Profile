import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Utilities/Components/Button/Button";
import "./component.css";
import { useHistory, useLocation } from "react-router-dom";

export default function Navbar() {
    const history = useHistory();

    function handleSignin() {
        let path = "/signin";
        history.push(path);
    }

    function handleSignup() {
        let path = "/signup";
        history.push(path);
    }

    return (
        <div className="navbar">
            <div className="logo"></div>
            {/* <div className="nav-buttons">

                <button className="button btn-home" to="/">Home</button>
                <button className="button btn-career" to="/">Careers</button>
                <button className="button  btn-about" to="/">About Us</button>
                <button className="button btn-faq " to="/">FAQ</button>
                
          </div> */}

            <div className="login">
                <div className="btn-sign-in">
                    <Button
                        className="btn btn-primary"
                        name="Sign in"
                        onClick={handleSignin}
                    >
                        Sign in
                    </Button>
                </div>
                <div className="btn-sign-up">
                    <Button
                        className="btn btn-secondary3"
                        name="Sign up"
                        onClick={handleSignup}
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    );
}
