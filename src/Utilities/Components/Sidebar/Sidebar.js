import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.scss";
import logo from "../../Assets/goGlocal.svg";
import {
    useHistory,
    useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const hamburgerIcon = (
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAANElEQVRoge3WwQ0AIAzEsCv77wxLIFoke4I8kwAAqSS7O+KG1R0AAADP2HgAAPiOjQcABjrSpwMHOlg7MAAAAABJRU5ErkJggg==" />
);

const backIcon = (
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAl0lEQVRoge3ZsQ3CMBgF4RM7YMH+k1ChIGhIwTihcBNRxsX/sO6b4J3kxjZI+gcNeAG36iEjGrACG7AUbznsDLzpER/gUjvnGCNSGJHCiBRGpDAihREpjEhhRIopIgCe9IiVfl0tdaoekOD3aF1r54wxJpUxqYxJZUwqY1IZk8qYVMakmipm/z39KN4yrNEfM+7VQ6RZfQGMQnFtuPZjaQAAAABJRU5ErkJggg=="></img>
);

const whiteBackIcon = (
    <img src="https://img.icons8.com/ios/50/ffffff/back--v1.png" />
);

const whiteMenuIcon = (
    <img src="https://img.icons8.com/ios/50/ffffff/menu--v1.png" />
);

export default function Sidebar() {
    const history = useHistory();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef();

    const [currLocation, setCurrLocation] = useState();

    useEffect(() => {
        console.log("path", location.pathname);
        if (location.pathname.startsWith("/logistics"))
            setCurrLocation("logistics");
    });

    const sidebarStateHandle = () => {
        setSidebarOpen((oldState) => {
            return !oldState;
        });

        if (!sidebarOpen) sidebarRef.current.classList.add("sidebar_visible");
        if (sidebarOpen) sidebarRef.current.classList.remove("sidebar_visible");
    };

    return (
        <>
            <div className="sidebar_small">
                <div
                    className="sidebar_small_hamburger"
                    onClick={sidebarStateHandle}
                >
                    {sidebarOpen ? whiteBackIcon : whiteMenuIcon}
                </div>

                <a href="/">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                </a>
            </div>
            <div className="sidebar" ref={sidebarRef}>
                <header>
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </header>
                <div className="nav">
                    <div className="pad-max">
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-chart-pie"></i>
                                <div className="sidebar_title f-xs">
                                    Cataloging
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pad-max">
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-warehouse"></i>
                                <div className="sidebar_title f-xs">
                                    GoGlocal Store
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pad-max">
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-globe"></i>
                                <div className="sidebar_title f-xs">
                                    Global Expansion Strategy
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pad-min">
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-people-group"></i>
                                <div className="sidebar_title f-xs">
                                    Marketplace Integration
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="pad-min">
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-chalkboard-user"></i>
                                <div className="sidebar_title f-xs">
                                    Digital Push
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="pad-min">
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-lightbulb"></i>
                                <div className="sidebar_title f-xs">B2B</div>
                            </div>
                        </a>
                    </div>

                    <div className="pad-min">
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-address-book"></i>
                                <div className="sidebar_title f-xs">
                                    Order Management
                                </div>
                            </div>
                        </a>
                    </div>

                    <div
                        className={`pad-min ${
                            currLocation === "logistics" ? "currLocation" : ""
                        }`}
                    >
                        <a href="/logistics">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-truck-fast"></i>
                                <div className="sidebar_title f-xs">
                                    Logistics
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pad-min">
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-money-check-dollar"></i>
                                <div className="sidebar_title f-xs">
                                    Payments
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pad-min">
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-handshake"></i>
                                <div className="sidebar_title f-xs">
                                    Trade Compliance
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <hr />

                <div className="profile-sec nav">
                    <div className="pad-max">
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-handshake"></i>
                                <div className="sidebar_title userf-xs">
                                    Profile
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="pad-min" style={{ marginTop: "1rem" }}>
                        <a href="#">
                            <div className="sidebar-items">
                                <i className="fa-solid fa-headset"></i>
                                <div className="sidebar_title userf-xs">
                                    Support
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
