import React from "react";
import profileImg1 from "../assets/images/profile-img1.jpg";
import pwcwhite from "../assets/images/pwcwhite.png";
import mail from "../assets/images/mail.svg";
import phone from "../assets/images/phone.svg";

import smiley from "../assets/images/smiley.png";

import soundwave from "../assets/images/soundwave.svg";
import award from "../assets/images/award.png";

const AISuggestion = () => {
  return (
    <>
      <div className="ai-title">
        <img src={soundwave} alt="" />
        <h3 className="mb-0">AI Suggested Responses</h3>
      </div>
      <div className="respo-hldr">
        <div className="respo-chat">
          <p>
            Ya sure, Please give me a moment while I look for a policy which
            suits your requirement..
          </p>
        </div>
        <div className="respo-chat">
          <p>
            Can you please help me to know more details about the requirements
          </p>
        </div>
        <div className="respo-chat">
          <p>
            I'm so sorry but currently we don't have any policy which suits your
            requirements
          </p>
        </div>
      </div>
      {/* <div className="msg-box-container">
        <div className="ai-title">
          <img src={soundwave} alt="" />
          <h3 className="mb-0">AI Suggested Policys</h3>
        </div>
        <div>
          <table className="table table-borderless ai-suggest w-100">
            <tbody>
              <tr>
                <td>
                  <img src={award} alt="" />
                </td>
                <td>32.6%</td>
                <td>₹ 1,234.00</td>
                <td>
                  <button>Suggest</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={award} alt="" />
                </td>
                <td>32.6%</td>
                <td>₹ 1,234.00</td>
                <td>
                  <button>Suggest</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={award} alt="" />
                </td>
                <td>32.6%</td>
                <td>₹ 1,234.00</td>
                <td>
                  <button>Suggest</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default AISuggestion;
