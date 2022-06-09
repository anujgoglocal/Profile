import React, { useState } from "react";
import "./LogisticsMainPage.scss";
import Sidebar from "../../Utilities/Components/Sidebar/Sidebar";
import Landing from "./Landing";

const LogisticsMainPage = () => {
    return (
        <div className="mainPage">
            <Sidebar />
            <Landing />
        </div>
    );
};

export default LogisticsMainPage;
