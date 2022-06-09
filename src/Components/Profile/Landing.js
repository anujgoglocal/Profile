import React from "react";
import "./Landing.scss";
import Navbar from "../../Utilities/Components/Navbar/Navbar";
// import Booking from "./Booking/Booking";
import Profile from "./Profile/Profile.jsx";

const Landing = ({}) => {
    return (
        <div className="main-container">
            <Navbar title="Logistics" />

            {/* REPLACE BOOKING */}
            {/* <Booking /> */}
            <Profile />
        </div>
    );
};

export default Landing;
