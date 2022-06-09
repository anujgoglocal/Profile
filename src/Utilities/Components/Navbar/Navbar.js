import React from "react";
import Button from "../Button/Button";
import "./Navbar.scss";

// shadow p-3 mb-5 bg-white rounded
// style={{visibility:"hidden"}}

function Navbar(prop) {
    if (prop.screen !== 0)
        return (
            <div className="navbox">
                <div className="navbar-title f-xs fw-r">{prop.title}</div>
                <span className="navBar-btn-grp">
                    <div className="nav-button-1" style={{ display: "none" }}>
                        <Button className="btn-primary">
                            Monitor Upload Status
                        </Button>
                    </div>

                    <div className="nav-button-2">
                        <Button className="btn-primary">Set Up</Button>
                    </div>
                </span>
            </div>
        );
    else
        return (
            <div className="shadow p-3 mb-5 bg-white rounded">
                <div className="navbar-title">
                    {prop.title}

                    <div className="nav-button-1">
                        <Button className="btn-primary">
                            Monitor Upload Status
                        </Button>
                    </div>

                    <div className="nav-button-2">
                        <Button className="btn-primary">Set Up</Button>
                    </div>
                </div>
            </div>
        );
}

export default Navbar;
