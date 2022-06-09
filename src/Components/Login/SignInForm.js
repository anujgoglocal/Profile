import { React, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input/input";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import "./login.css";
import URL from "../../URL/URL";

export default function SignInForm() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        let data = { phone, password };
        data = JSON.stringify(data);

        console.log(data);
        try {
            // const url = `https://goglocal.azurewebsites.net/user/login/`;
            // const config = {
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // };
            // const body = JSON.stringify(data);
            // const res = await axios.post(url, data:{body}, config);
            const res = await axios({
                url: `${URL.backend}/user/login/`,
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
                method: "POST",
            });

            console.log(res);
            let path = "/landing";
            history.push(path);
        } catch (err) {
            let path = "/landing";
            history.push(path);
            console.log(err);
        }
    };

    const history1 = useHistory();

    function SwitchSignup() {
        history1.push("/signup");
    }

    return (
        <div className="App">
            <div className="appAside" />
            <div className="appForm">
                <div className="formCenter">
                    <form action="">
                        <div className="formField">
                            <h3>Sign in</h3>
                            <label className="formFieldLabel" htmlFor="phone">
                                {" "}
                                Mobile{" "}
                            </label>

                            <PhoneInput
                                className="formFieldInput"
                                placeholder="Enter Your Number"
                                value={phone}
                                onChange={setPhone}
                                error={
                                    phone
                                        ? isValidPhoneNumber(phone)
                                            ? undefined
                                            : "Invalid phone number"
                                        : "Phone number required"
                                }
                            />
                            <label className="formFieldLabel" htmlFor="phone">
                                {" "}
                                Password{" "}
                            </label>
                            <input
                                className="formFieldInput"
                                type="text"
                                id="password"
                                name="password"
                                autoComplete="off"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button
                                className="formFieldButton"
                                type="submit"
                                onClick={handleClick}
                            >
                                {" "}
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="button">
                        <span>Don't have an account?</span>
                        <button className="pageSwitcher" onClick={SwitchSignup}>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
