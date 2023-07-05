import React from "react";
import send from "../assets/images/send.svg";
import profileImg1 from "../assets/images/profile-img1.jpg";
import profileImg2 from "../assets/images/user2.png";
import smiley from "../assets/images/smiley.png";

const Chat = ({ chat, sendChat, loading }) => {
  const [text, setText] = React.useState(null);
  const scrollContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      // Scroll to the bottom
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
    console.log("------->", scrollContainerRef.current);
  }, [loading, chat]);

  const submitForm = (e) => {
    e.preventDefault();
    sendChat(text, "user", "Lisa Smith");
    setText("");
  };

  return (
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      {/* <p className="text-center my-2">Today at 4:30 PM</p> */}
      {/* {loading ? (
        <div className="chat-hldr">
          <h5>Please Wait...</h5>
        </div>
      ) : (
        
      )} */}
      <div className="chat-hldr" ref={scrollContainerRef}>
        {chat &&
          chat?.map((val, index) => (
            <div className="chat-usr chat-usr2-hldr">
              {val?.role === "user" && (
                <div className="chat-img">
                  <img
                    src={val?.role === "user" ? profileImg1 : profileImg2}
                    alt=""
                  />
                  <p>{val?.name}</p>
                </div>
              )}

              <div
                className="chat-desc"
                style={val?.role === "admin" ? { background: "#80808026" } : {}}
              >
                <p>{val?.text}</p>
              </div>

              {val?.role === "admin" && (
                <div className="chat-img" style={{ marginLeft: 10 }}>
                  <center>
                    <img
                      src={val?.role === "user" ? profileImg1 : profileImg2}
                      alt=""
                    />
                    <p>You</p>
                  </center>
                </div>
              )}
            </div>
          ))}
      </div>

      <div>
        <div>
          {/* <span className="input-group-text">
            <img src={smiley} alt="" />
          </span> */}
          <form
            onSubmit={(e) => submitForm(e)}
            className="input-group chat-input-hldr"
          >
            <input
              type="text"
              className="form-control chat-input"
              aria-label="Amount (to the nearest dollar)"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <span
              className="input-group-text"
              style={{ background: "#e14848" }}
            >
              <img src={send} alt="" style={{ height: 50, width: 25 }} />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
