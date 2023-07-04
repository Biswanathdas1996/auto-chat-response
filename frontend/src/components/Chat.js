import React from "react";
import send from "../assets/images/send.svg";
import profileImg1 from "../assets/images/profile-img1.jpg";
import profileImg2 from "../assets/images/user2.png";
import smiley from "../assets/images/smiley.png";

const Chat = ({ chat, sendChat, loading }) => {
  const [text, setText] = React.useState(null);
  return (
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      {/* <p className="text-center my-2">Today at 4:30 PM</p> */}
      {loading ? (
        <div className="chat-hldr">
          <h5>Please Wait...</h5>
        </div>
      ) : (
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
      )}

      <div>
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
          <span
            className="input-group-text"
            onClick={() => {
              sendChat(text, "user", "Lisa Smith");
              setText(null);
            }}
            style={{ background: "#e14848" }}
          >
            <img src={send} alt="" style={{ height: 50, width: 25 }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
