import {React, useState} from 'react'
import { useHistory } from "react-router-dom";
import Button from '../../../Utilities/Components/Button/Button';
import "./Profile.css";

export default function Support() {

  const history = useHistory();
  const [click1, setClick1]=useState(false);
  const [click2, setClick2]=useState(false);
  const [click3, setClick3]=useState(false);

  const Account = () =>{ 
    setClick1(true);
    setClick2(false);
    setClick3(false);

    let path = '/'; 
    history.push(path);
  } 

  const history1 = useHistory();
  const KYC = () =>{ 
    setClick1(false);
    setClick2(true);
    setClick3(false);

    let path = '/KYC'; 
    history1.push(path);
  } 

  const history2 = useHistory();
  const BankDetail = () =>{ 
    setClick1(false);
    setClick2(false);
    setClick3(true);

    let path = '/BankDetail'; 
    history2.push(path);
  } 

  return (
    <>
       <div className="container">
                 <div className="col-nav ">
                        <div className="nav-tabs" role="tablist">
                              <div className="nav-item f-s">
                                  <a className= {"nav-link " + (click1 ? "active" : "")}  onClick={Account} >Account</a>
                              </div>
                             
                              <div className="nav-item f-s">
                                  <a className={"nav-link mrg-l " + (click2 ? "active" : "") }  onClick={KYC} >KYC</a>
                              </div>
                              <div className="nav-item f-s">
                                  <a className={"nav-link mrg-l " + (click3 ? "active" : "") }  onClick={BankDetail} >Bank Details</a>
                              </div>
                        </div>
                        <div className="horz-line">

                        </div>
                </div>
       </div>
    </>
  )
}
