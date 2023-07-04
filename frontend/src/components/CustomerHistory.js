import React from "react";
import profileImg1 from "../assets/images/profile-img1.jpg";
import mail from "../assets/images/mail.svg";
import phone from "../assets/images/phone.svg";
import smiley from "../assets/images/smiley.png";
import soundwave from "../assets/images/soundwave.svg";
import award from "../assets/images/award.png";

export default function CustomerHistory() {
  return (
    <div className="w-30">
      <h2 className="title1">Customer History</h2>
      <div className="cust-hist">
        <table className="table table-borderless _cust-hist ai-suggest">
          <thead>
            <tr>
              <th>Insurer</th>
              <th>Amount</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={smiley} alt="" />
              </td>
              <td>€ 289.00</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src={smiley} alt="" />
              </td>
              <td>€ 289.00</td>
              <td>
                <button>View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-hldr p-4 pay-info">
        <div>
          <h2>Payment Info</h2>
          <p>Credit Card</p>
          <button>Update payment info</button>
        </div>
        <div>
          <img src="images/" alt="" />
          <p>*****5548</p>
          <p>Expiry Date: 03/27</p>
        </div>
      </div>
      <div className="tckes-hldr mt-4">
        <h3>Tickets</h3>
        <div className="box-hldr">No older tickets found...</div>
      </div>
    </div>
  );
}
