import React, { useState, useEffect } from "react";
import Button from '../../../Utilities/Components/Button/Button';
import AddressForm from "./AddressForm.jsx"
import "./Profile.css";

export default function KYC() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [issued, setIssued] = useState("");
  const [idType, setIdType] = useState("");
  const [date, setDate] = useState("");

  const [allAddress, setAllAddress] = useState([]);
  const [submit, setSubmit]  = useState(false)

  const [address, setAddress] = useState({
    title: "",
    address_line1: "",
    address_line2: "",
    state: "",
    pin: "",
    landmark: "",
});

const [isLoading, setIsLoading] = useState(false);
const [showAddressModal, setShowAddressModal] = useState(false);


  
const setAddressState = (data) => {
    setAddress(data);
    setSubmit(true);
};

  const hidePackageModalHandler = () => {
    setShowAddressModal(false);
};

  const showAddressHandler = () => {
    setShowAddressModal(true);
   
  }

  useEffect (() => {
    if(submit){
      setAllAddress([...allAddress, address]);
    }
    setSubmit(false);

  }, [allAddress])




  const mode = (
    <>

      <div class="container">
          <div class="column">
              <div class="comment">
                <div class="vertical-line"></div>
                <button className="btn-round"> </button>
                <div className="kyc-content">
                    <p className='kyc-header'>Level 1 KYC</p>
                    
                    <div style={{ height: "35px", width: "130px", marginTop: "10px" }}> <Button className="btn-primary fw-sb f-xs ">Button</Button> </div>
                    
          
                </div>
              </div>
              <div class="comment">
                <div class="vertical-line"></div>
                <button className="btn-round"></button>

                <div className="kyc-content">
                    <p className='kyc-header'>Level 2 Address KYC</p>
                    <div className="box-profile-bank">
                    {
                      allAddress.map((item, id) => {
                       return (
                        <div className="card ">
                            <div className="profile-menu">
                                <p>{item.address_line1}</p>
                                <p>{item.address_line2}</p>
                                <p>{item.landmark} </p>
                                <p>{item.state}</p>
                                <p>{item.pin}</p>
                            </div>
                            <div className="profile-card-footer">
                               {/* <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() => handleDelete(id)}></i> */}
                            </div>
                        </div>
                       )
                      })
                    }
                 
                 </div>
                </div>
              </div>

              <div class="comment">
              <div class="vertical-line"></div> 
                <button className="btn-round"></button>
                <div className="kyc-content">
                    <p className='kyc-header'>Add Warehouse/Other Office</p>
                    <div style={{ height: "40px", width: "130px", marginTop: "10px" }}>
                      <Button className="btn-primary fw-sb f-xxs " onClick={showAddressHandler}> Add Address</Button>
                    </div>
                    
                </div>
              </div>

              <div class="comment">
                <button className="btn-round"></button>
                <div className="kyc-content">
                    <div className='kyc-header'>Level 3  KYC</div>
                            <div className="kyc-form">
                              <div className="kyc-form-1">
                                <form action=''>
                                      <div className="formField">
                                        <select className="formFieldInput"  onChange= { (e) => setIssued(e.target.value)}>
                                          <option value="Issued by">Issued by</option>
                                          <option value="saab">Saab</option>
                                          <option value="opel">Opel</option>
                                          <option value="audi">Audi</option>
                                        </select>
                                      </div>
                                        <div className="formField">
                                            <input className="formFieldInput" type="text" id="date" name="date" 
                                                placeholder="Issued Date"
                                                value={date}
                                                onChange= { (e) => setDate(e.target.value) }
                                            />
                                        </div>



                                        <div className="formField">
                                            <input className="formFieldInput" type="text" id="id" name="id"
                                                placeholder="ID"
                                                value={id}
                                                onChange= { (e) => setId(e.target.value) }
                                            />
                                        </div>
                              </form>
                                    <div style={{ height: "35px", width: "130px", marginTop: "10px" }}> <Button className="btn-primary fw-m f-xs ">Add</Button> </div>
                                      
                              </div>
                              <div className="kyc-form-2">
                                <form action=''>
                                      <div className="formField">
                                          <select className="formFieldInput" onChange= { (e) => setIdType(e.target.value)}>
                                            <option value="ID Type">ID Type</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                      </div>
                                        <div className="formField">
                                            <input className="formFieldInput" type="text" id="name" name="name" 
                                                placeholder="Name on ID"
                                                value={name}
                                                onChange= { (e) => setName(e.target.value) }
                                            />
                                        </div>
                              </form>
                              </div>
                          </div>
                </div>
              </div>
              
          </div>
      </div>

    </>
  )
  
  return (
<>   
            {showAddressModal && (
                 <AddressForm
                 onClose={hidePackageModalHandler}
                 setState={setAddressState}
                 address={address}
                 allAddress={allAddress}
              />
            )}

             <>
                {!isLoading && (
                     <>{mode}</>
                )
               }
            </> 

</> 


  );
};
