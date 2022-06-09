import {React, useState} from 'react'
import Button from '../../../Utilities/Components/Button/Button';
import "./Profile.css";

export default function BankDetail() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [accountType, setAccountType] = useState("");
  const [items, setItems] = useState([]);

  const handleUpload = () => {
        const answer = {
          bank : `${bank}`,
          name : `${name}`,
          account : `${accountnumber}`,
          branch : `${branch}`
        }

        setItems([...items, answer]);

  }

  const handleDelete = (id) => {
      const updateditems = items.filter((elem, idx) => {
            return idx !== id;
      })
      setItems(updateditems);
  }

  return (
    <div>
            
    <div className="container">
                <p className="bank-header">Bank Accounts</p>
                 <div className="box-profile-bank">
                    {
                     items.map((item, id) => {
                       return (
                        <div className="card " key={id}>
                            <div className="profile-menu">
                                <div>{item.bank}</div>
                                <div>{item.name}</div>
                                <div>{item.account} </div>
                                <div>{item.branch}</div>
                            </div>
                            <div className="profile-card-footer">
                               <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() => handleDelete(id)}></i>
                            </div>
                        </div>
                       )
                      })
                    }
                 
                 </div>
               {/* <button className='formFieldButton btn-bank-account'  type="submit" > Add Account </button> */}
              <div style={{ height: "45px", width: "150px", marginTop: "20px" }}> <Button className="btn-primary fw-sb f-xs " onClick={handleUpload} >Add Account</Button> </div>


            {/* <div className="col-md-10 "> */}
            
                <div className="row-bank">
                    <div className="col-bank-f">
                            <form action=''>
                                  <div className="formField">
                                      <input className="formFieldInput" type="text" id="title" name="title" 
                                          placeholder="Title"
                                          value={title}
                                          onChange= { (e) => setTitle(e.target.value) }
                                      />
                                  </div>
                                  
                                  <div className="formField">
                                      <input className="formFieldInput" type="text" id="name" name="name" 
                                          placeholder="Name"
                                          value={name}
                                          onChange= { (e) => setName(e.target.value) }
                                      />
                                  </div>

                                  <div className="formField">
                                      <input className="formFieldInput" type="text" id="ifsc" name="ifsc"
                                          placeholder="IFSC Code"
                                          value={ifsc}
                                          onChange= { (e) => setIfsc(e.target.value) }
                                      />
                                  </div>

                                  <div className="formField">
                                      <input className="formFieldInput" type="text" id="accountNumber" name="name" 
                                          placeholder="Account Number"
                                          value={accountnumber}
                                          onChange= { (e) => setAccountnumber(e.target.value) }
                                      />
                                  </div>
                            </form>
                            {/* <div >
                                <button className='formFieldButton btn-bank-detail'  type="submit" onClick={handleUpload}> Upload </button>
                            </div> */}
                              <div style={{ height: "40px", width: "140px", marginTop: "10px" }}> <Button className="btn-primary fw-sb f-xs " >Upload</Button> </div>

                        </div>
                       
                        <div className="col-bank-s">
                                <form action=''>
                                    <div className="formField">
                                        <input className="formFieldInput" type="text" id="bank" name="bank"
                                          placeholder="Bank"
                                            value={bank}
                                            onChange= { (e) => setBank(e.target.value) }
                                        />
                                    </div>

                                    <div className="formField">
                                        <input className="formFieldInput" type="text" id="branch" name="branch" 
                                          placeholder="Banck Branch"
                                            value={branch}
                                            onChange= { (e) => setBranch(e.target.value) }
                                        />
                                    </div>

                                    <div className="formField">
                                        <input className="formFieldInput" type="text" id="account" name="account"
                                          placeholder="Account Type"
                                            value={accountType}
                                            onChange= { (e) => setAccountType(e.target.value) }
                                        />
                                    </div>
                                    
                                </form>
                        </div>
                </div>
                {/* </div> */}
            {/* </div> */}
        </div>
      </div>

  )
}
