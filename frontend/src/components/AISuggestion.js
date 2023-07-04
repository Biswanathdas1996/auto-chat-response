import React from "react";
import soundwave from "../assets/images/soundwave.svg";
import send from "../assets/images/send.svg";

const AISuggestion = ({ suggestion, sendChat, reGenerate, loading }) => {
  console.log("suggestion", suggestion);
  return (
    <>
      <div className="ai-title">
        <img src={soundwave} alt="" />
        <h3 className="mb-0">AI Suggested Responses</h3>
      </div>
      {loading ? (
        <div className="chat-hldr">
          <h5>Please Wait...</h5>
        </div>
      ) : (
        <>
          {suggestion &&
            suggestion?.map((val, i) => {
              return (
                <div className="respo-hldr" key={i}>
                  <div
                    className="respo-chat"
                    onClick={() => sendChat(val?.response, "admin", "John Doe")}
                    style={{ cursor: "pointer" }}
                  >
                    <p>{val?.response}</p>
                  </div>
                </div>
              );
            })}
        </>
      )}

      <button
        className="chat-end-btn"
        onClick={() => {
          reGenerate();
        }}
      >
        <img src={send} alt="End Call" /> Regenerate
      </button>
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
