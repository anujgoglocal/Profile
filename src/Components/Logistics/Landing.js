import React from "react";
import "./Landing.scss";
import Navbar from "../../Utilities/Components/Navbar/Navbar";
import Booking from "./Booking/Booking";

const Landing = ({}) => {
    return (
        <div className="main-container">
            <Navbar title="Logistics" />

            {/* REPLACE BOOKING */}
            <Booking />
        </div>
    );
};

export default Landing;
