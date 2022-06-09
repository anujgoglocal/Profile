import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../../Utilities/Components/Button/Button";
import "./Booking.scss";
import DestForm from "./DestForm";
import PackageForm from "./PackageForm";
import SenderForm from "./SenderForm";
import Shipping from "./Shipping";
import loader from "../../../Utilities/Assets/loader.gif";
import URL from "../../../URL/URL";

const Booking = () => {
    const [pfData, setPFData] = useState({
        description: "",
        service_type: "",
        weight: null,
        length: null,
        width: null,
        height: null,
        load_type: "",
        consignment_category: "",
        shipping_partner: "",
        price: null,
        delivery_time: null,
    });
    const [SFData, setSFData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address_line1: "",
        address_line2: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
    });
    const [DFData, setDFData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address_line1: "",
        address_line2: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
    });

    const [showPackageModal, setShowPackageModal] = useState(false);
    const [showSenderModal, setShowSenderModal] = useState(false);
    const [showDestinationModal, setShowDestinationModal] = useState(false);
    const [isDisabledButton, setIsDisabledButton] = useState(true);
    const [shipData, setShipData] = useState({});
    const [ship , setship] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const cond =
            !pfData.first_name &&
            !pfData.service_type &&
            !pfData.weight &&
            !pfData.length &&
            !pfData.width &&
            !pfData.height &&
            !pfData.load_type &&
            !pfData.consignment_category &&
            !SFData.first_name &&
            !SFData.last_name &&
            !SFData.email &&
            !SFData.phone &&
            !SFData.address_line1 &&
            !SFData.city &&
            !SFData.state &&
            !SFData.pincode &&
            !SFData.country &&
            !DFData.first_name &&
            !DFData.last_name &&
            !DFData.email &&
            !DFData.phone &&
            !DFData.address_line1 &&
            !DFData.city &&
            !DFData.state &&
            !DFData.pincode &&
            !DFData.country;

        if (!cond) setIsDisabledButton(false);
    }, [pfData, SFData, DFData]);

    //changing state of individual modals
    const setPFState = (data) => {
        setPFData(data);
    };
    const setSFState = (data) => {
        setSFData(data);
    };
    const setDFState = (data) => {
        setDFData(data);
    };

    //package modal
    const showPackageModalHandler = () => {
        setShowPackageModal(true);
        //safety checks
        setShowSenderModal(false);
        setShowDestinationModal(false);
    };

    const hidePackageModalHandler = () => {
        setShowPackageModal(false);
        setShowSenderModal(false);
        setShowDestinationModal(false);
    };

    //sender modal
    const showSenderModalHandler = () => {
        setShowPackageModal(false);
        //safety checks
        setShowSenderModal(true);
        setShowDestinationModal(false);
    };

    const hideSenderModalHandler = () => {
        setShowPackageModal(false);
        setShowSenderModal(false);
        setShowDestinationModal(false);
    };

    //destination modal
    const showDestinationModalHandler = () => {
        setShowPackageModal(false);
        //safety checks
        setShowSenderModal(false);
        setShowDestinationModal(true);
    };

    const hideDestinationModalHandler = () => {
        setShowPackageModal(false);
        setShowSenderModal(false);
        setShowDestinationModal(false);
    };

    const showshipping = () => {
        setShowPackageModal(false);
        setShowSenderModal(false);
        setShowDestinationModal(false);
        setship(true);
    };

    const getShippingData = async (pkgWeight, pkgCountry) => {
        try {
            const shippingData = await axios.get(
                `${URL.backend}/logistics/get_shipping_partners?weight=${pkgWeight}&country=${pkgCountry}`
            );

            setShipData({
                package_details: pfData,
                sender_details: SFData,
                receiver_details: DFData,
                shipping_partners: shippingData.data,
            });

            console.log(shipData);
            showshipping();
        } catch (err) {
            console.log("err", err);
        }
        setIsLoading(false);
    };

    //final submit
    const onBookHandler = () => {
        //get shipping data
        const pkgWeight = pfData.weight;
        const pkgCountry = DFData.country;

        setIsLoading(true);
        getShippingData(pkgWeight, pkgCountry);
    };

    const mode = (
        <>
            <div className="booking-body">
                {/* <div className="book-title f-l fw-b ff-inter">Booking Page</div> */}
                <div className="book-details">
                    <div className="book-button">
                        <Button
                            name="Package Details"
                            id="pd"
                            className="btn-secondary2 f-s ff-poppins"
                            onClick={showPackageModalHandler}
                        >
                            Package Details
                        </Button>
                    </div>
                    <div className="book-button">
                        <Button
                            name="Sender Details"
                            id="pd"
                            className="btn-secondary2 f-s ff-poppins"
                            onClick={showSenderModalHandler}
                        >
                            Sender Details
                        </Button>
                    </div>
                    <div className="book-button">
                        <Button
                            name="Destination Details"
                            id="pd"
                            className="btn-secondary2 f-s ff-poppins"
                            onClick={showDestinationModalHandler}
                        >
                            Destination Details
                        </Button>
                    </div>
                    <div className="book-button">
                        <Button
                            name="Book Now"
                            id="pd"
                            disabled={isDisabledButton}
                            className="btn-primary f-s fw-m ff-poppins"
                            onClick={onBookHandler}
                        >
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            {showPackageModal && (
                <PackageForm
                    onClose={hidePackageModalHandler}
                    onNext={showSenderModalHandler}
                    setState={setPFState}
                    pfData={pfData}
                />
            )}
            {showSenderModal && (
                <SenderForm
                    onClose={hideSenderModalHandler}
                    onNext={showDestinationModalHandler}
                    onPrev={showPackageModalHandler}
                    setState={setSFState}
                    SFData={SFData}
                />
            )}
            {showDestinationModal && (
                <DestForm
                    onClose={hideDestinationModalHandler}
                    onNext={hideDestinationModalHandler}
                    onPrev={showSenderModalHandler}
                    setState={setDFState}
                    DFData={DFData}
                />
            )}
            <>
                {isLoading ? (
                    <div className="center-item">
                        <img src={loader} alt="" />
                    </div>
                ) : ship ? (
                    <Shipping data={shipData} />
                ) : (
                    <>{mode}</>
                )}
            </>
        </>
    );
};

export default Booking;
