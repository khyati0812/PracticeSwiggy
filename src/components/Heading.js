import React from "react";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Heading = () => {
   
    const [btnName, setBtnName] = useState("Login");
    const changeTitle = () => {
        btnName=="Login"?setBtnName("Logout"):setBtnName("Login");
    }
    console.log("Header rendered");
    return (<div className="main-cont">
        <div>
            <img className="img" src={LOGO_URL} />
        </div>
        <div className="insider">
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About us</li>
                <li>Cart</li>
                <button className="login" onClick={() => {changeTitle(); console.log(btnName)}}>{btnName}</button>
            </ul>
        </div>
    </div>)
}
export default Heading;