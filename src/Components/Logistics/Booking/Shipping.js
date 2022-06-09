import { useEffect, useState } from "react";

import "./Shipping.css";
import congo from "../../../Utilities/Assets/congo.svg";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import URL from "../../../URL/URL";

function Shipping({ data, onPrev }) {
    const [count, setCount] = useState(true);
    const [shipSelect, setShipSelect] = useState({});
    const token = localStorage.getItem("token");
    const history = useHistory();

    useEffect(() => {
        if (!token) {
            history.push("/");
            localStorage.removeItem("token");
        }
        console.log("token", token);
        console.log(data);
    }, []);

    const ss = async (e) => {
        e.preventDefault();

        const formData = {
            package_details: {
                ...data.package_details,
                shipping_partner: shipSelect.name,
                price: shipSelect.price,
                delivery_time: shipSelect.delivery_period,
            },
            sender_details: data.sender_details,
            receiver_details: data.receiver_details,
        };

        console.log(formData);

        try {
            const url = `${URL.backend}/logistics/submit/`;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            };

            const body = JSON.stringify(formData);

            const res = await axios.post(url, body, config);
            setCount(false);
            console.log("sent", res);
        } catch (err) {
            console.log("Error in sending data!", err.response.data);
            alert("Error in sending data!");
            if (err.response.data.detail === "Invalid token.") {
                history.push("/");
                localStorage.removeItem("token");
            }
        }
    };

    const arr = data.shipping_partners;

    const main = (
        <div className="mid">
            <form onSubmit={ss} className="fm">
                <div>
                    <div className="table">
                        <div className="y"></div>
                        <div className="s">Shipping Partner</div>
                        <div className="s">Delivery Mode</div>
                        <div className="s">Delivery Period</div>
                        <div className="s">Delivery Charges</div>
                    </div>

                    <div className="list">
                        {arr.map((ship, index) => {
                            return (
                                <label htmlFor={ship.name} key={index}>
                                    <div id="l">
                                        <div className="j">
                                            <input
                                                className="r"
                                                type="radio"
                                                name="shipping"
                                                onChange={(e) =>
                                                    setShipSelect(ship)
                                                }
                                                value={ship}
                                                id={ship.name}
                                            ></input>
                                        </div>
                                        <div className="k bg">
                                            <div className="shipLogo">
                                                {ship.name}
                                            </div>
                                        </div>
                                        <div className="k">{ship.mode}</div>
                                        <div className="k">
                                            {ship.delivery_period} day
                                        </div>
                                        <div className="k">
                                            Rs. {ship.price}
                                        </div>
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                </div>
                <div className="b">
                    <button type="submit" className="book">
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    );
    const nain = (
        <div className="nain">
            <div className="congo">
                <img src={congo} alt=""></img>
            </div>
            <div className="ank f-xl">Congratulations!</div>
            <div className="ank1 f-m">
                Your product will be shipped by
                <span className="bold"> {shipSelect.name} </span>
                in <span className="bold"> {shipSelect.delivery_period} </span>
                days
            </div>
        </div>
    );
    return <>{count ? main : nain}</>;
}

export default Shipping;
