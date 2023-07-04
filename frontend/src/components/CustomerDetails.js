import React from "react";
import profileImg1 from "../assets/images/profile-img1.jpg";
import mail from "../assets/images/mail.svg";
import phone from "../assets/images/phone.svg";

export default function CustomerDetails() {
  return (
    <div className="d-flex justify-content-between cust-dtls-hldr bg-hldr w-1">
      <div className="desc-hldr">
        <h3>Customer Name</h3>
        <p className="cust-name-txt">Lisa Smith</p>
        <p className="cust-name-email d-flex">
          <img src={mail} alt="" />
          <span>lisasmith@mail.com</span>
        </p>
        <p className="cust-name-ph d-flex">
          <img src={phone} alt="" /> <span>(333)-333333</span>
        </p>
        <p className="cust-name-duration">
          <strong>Customer since 5 months</strong>
        </p>
      </div>
      <div className="img-hldr">
        <img src={profileImg1} alt="Customer image" />
      </div>
    </div>
  );
}
