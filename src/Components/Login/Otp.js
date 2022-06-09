import { React, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import "./login.css";
import URL from "../../URL/URL";

export default function Otp() {
    const [otp, setOtp] = useState("");
    const history = useHistory();
    const location = useLocation();
    const phone = location.state.phone;

    const handleClick = async (e) => {
        e.preventDefault();
        let data = { otp, phone };
        console.log(data);
        try {
            const url = `${URL.backend}/user/verify_otp/`;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify(data);
            const res = await axios.post(url, body, config);
            console.log(res);
            localStorage.setItem("token", res.data.token);

            let path = "/landing";
            history.push(path);
        } catch (err) {
            console.log(err);
            alert("Wrong OTP! Try again");
        }
    };

    return (
        <div className="box-container">
            <div className="d-flex align-items-center justify-content-center my-3">
                <img src="/images/GoGlocal.png" alt="" />
            </div>
            <div className="otp-menu">
                <div className="otp-num">Please enter OTP sent on {phone}</div>

                <form action="">
                    <div className="otpField">
                        <label className="formFieldLabel " htmlFor="phone">
                            {" "}
                            OTP{" "}
                        </label>
                        <input
                            className="formFieldInput"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter 6 -digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </div>
                </form>
                <div>
                    <button
                        className="formFieldButton otp-button"
                        type="submit"
                        onClick={handleClick}
                    >
                        {" "}
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
