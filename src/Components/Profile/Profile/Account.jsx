import {React, useState} from 'react'
import PhoneInput,{ isValidPhoneNumber } from 'react-phone-number-input/input'
import "./Profile.css";
import Button from '../../../Utilities/Components/Button/Button';


export default function Account() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [company, setCompany] = useState("");
    const [brand, setBrand] = useState("");
    const [sellerType, setSellerType] = useState("");
    const [ecomAddress, setEcomAddress] = useState("");
  
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState({ preview: "", raw: "" });
    
    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };

  return (
    <div>
        <div className="container">
            <div className="row-primary-acct">
                <div className="my-4 ">
                    <div className="img-box">
                        {/* <button className="img-change" title=''>
                            <span >Change Profile Photo</span>
                         </button> */}
                          <label className='img-hover' htmlFor="upload-button">
                                {image.preview ? (
                                    <>
                                    <div className='div-img-hover'>Change Profile Photo</div>
                                    <img src={image.preview} className="img-profile"  alt="dummy"  />
                                 </>
                                ) : (
                                <>
                                    <div className='div-img-hover'>Change Profile Photo</div>
                                    <img src="./images/blank-profile.png" style={{ height: "130px", width: "130px"}} className="img-profile"  alt="dummy"  />
                                </>
                                )}
                           </label>
                           <input
                                type="file"
                                id="upload-button"
                                style={{ display: "none" }}
                                onChange={handleChange}
                            />
                            <button className='btn-upload' >Upload</button>

                    </div>
                </div>
            </div>

                <div className="row-scnd-acct">
                    <div className="col-primary-acct ">
                            <form action=''>
                                <div className="formField">
                                   <label className="label-txt" for="inputText">First Name</label>
                                    <input className="formFieldInput" type="text" id="name" name="name" 
                                        value={firstname}
                                        onChange= { (e) => setFirstname(e.target.value) }
                                    />
                                </div>
                                <div className="formField">
                                   <label className="label-txt" for="inputText">Last Name</label>
                                    <input className="formFieldInput" type="text" id="name" name="name" 
                                        value={lastname}
                                        onChange= { (e) => setLastname(e.target.value) }
                                    />
                                </div>

                                <div className="formField">
                                   <label className="label-txt" for="inputText">Company</label>
                                    <input className="formFieldInput" type="text" id="company" name="company" 
                                        value={company}
                                        onChange= { (e) => setCompany(e.target.value) }
                                    />
                                </div>

                                <div className="formField">
                                   <label className="label-txt" for="inputText">Brand</label>
                                    <input className="formFieldInput" type="text" id="brand" name="brand" 
                                        value={brand}
                                        onChange= { (e) => setBrand(e.target.value) }
                                    />
                                </div>
                                 
                                <div className="formField">
                                   <label className="label-txt" for="inputText">Seller Type</label>
                                    <input className="formFieldInput" type="text" id="sellertype" name="sellertype" 
                                        value={sellerType}
                                        onChange= { (e) => setSellerType(e.target.value) }
                                    />
                                </div>

                                <div className="formField">
                                   <label className="label-txt" for="inputText">Ecommerce Store Address</label>
                                    <input className="formFieldInput" type="text" id="ecomaddress" name="ecomaddress" 
                                        value={ecomAddress}
                                        onChange= { (e) => setEcomAddress(e.target.value) }
                                    />
                                </div>

                            </form>
                            <div >
                                  <div style={{ height: "45px", width: "250px", marginTop: "10px" }}> <Button className="btn-primary fw-sb f-xs ">Save</Button> </div>

                            </div>
                        </div>
                        <div className="col-secondary-acct">
                                <form action=''>
                                    <div className="formField">
                                        <label className="label-txt" for="inputText">Email</label>
                                        <input className="formFieldInput" type="email" id="email" name="email" 
                                            value={email}
                                            onChange= { (e) => setEmail(e.target.value) }
                                        />
                                    </div>
                                    <div className="formField">
                                          <label className="label-txt" for="inputText">Mobile Number</label>
                                            <PhoneInput
                                                className="formFieldInput"
                                                value={phone}
                                                onChange={setPhone}
                                                error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                            />
                                    </div>
                                   
                                    <span>Two step authentication: </span>
                                    <span className="my-6">
                                        <label class="switch">
                                                <input type="checkbox" />
                                                <span class="slider round"></span>
                                        </label>
                                    </span>
                                    
                                </form>
                        </div>
                </div>
            {/* </div> */}
        </div>
      

    </div>
  )
}
