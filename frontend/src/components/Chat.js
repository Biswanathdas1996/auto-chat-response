import React from "react";
import call from "../assets/images/call.svg";
import send from "../assets/images/send.svg";
import profileImg1 from "../assets/images/profile-img1.jpg";
import profileImg2 from "../assets/images/user2.png";
import smiley from "../assets/images/smiley.png";

const Chat = ({ chat, sendChat }) => {
  const [text, setText] = React.useState(null);
  return (
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      {/* <p className="text-center my-2">Today at 4:30 PM</p> */}
      <div className="chat-hldr">
        {chat &&
          chat?.map((val, index) => (
            <div className="chat-usr chat-usr2-hldr">
              <div className="chat-img">
                <img
                  src={val?.role === "user" ? profileImg1 : profileImg2}
                  alt=""
                />
                <p>{val?.name}</p>
              </div>
              <div className="chat-desc">
                <p>{val?.text}</p>
              </div>
            </div>
          ))}
      </div>

      <center>
        <div className="msg-box-container">
          <div className="input-group mb-3 chat-input-hldr">
            <span className="input-group-text">
              <img src={smiley} alt="" />
            </span>
            <input
              type="text"
              className="form-control chat-input"
              aria-label="Amount (to the nearest dollar)"
              onChange={(e) => setText(e.target.value)}
            />
            <span className="input-group-text">
              <img src={send} alt="" />
            </span>
          </div>
          <center>
            <button
              className="chat-end-btn"
              onClick={() => sendChat(text, "user", "Lisa Smith")}
            >
              <img src={send} alt="End Call" /> Send
            </button>
          </center>
        </div>
      </center>
    </div>
  );
};

export default Chat;
