import React from "react";
import IntentCharts from "../components/IntentCharts";
import SentimentChart from "../components/SentimentChart";
import Chat from "../components/Chat";
import AISuggestion from "../components/AISuggestion";
import TopBanner from "../components/TopBanner";
import Timer from "../components/Timer";
import CustomerDetails from "../components/CustomerDetails";
import CustomerHistory from "../components/CustomerHistory";
import TabHeader from "../components/TabHeader";
import Summary from "../components/Summary";
import Policy from "../mock/policy.json";
import { post, get } from "../helper/apiHelper";

function Home() {
  const [loading, setLoading] = React.useState(false);
  const [chat, setChat] = React.useState(null);
  const [suggestion, setSuggestion] = React.useState(null);
  const [stntiment, setStntiment] = React.useState(null);

  const fetchAllChat = async () => {
    setLoading(true);
    const response = await get("/get-chat");
    setChat(response);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchAllChat();
  }, []);

  const sendChat = async (text, role, name) => {
    setLoading(true);
    const response = await post("/chat", {
      name: name,
      text: text,
      role: role,
    });
    if (response) {
      fetchAllChat();
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getSuggestion(chat);
  }, [chat]);

  const getSuggestion = async () => {
    setLoading(true);
    let last_chat;
    if (chat) {
      const getAlluserChat = chat?.filter((val) => val?.role === "user");
      if (getAlluserChat?.length > 0)
        console.log(
          "------getAlluserChat",
          getAlluserChat[getAlluserChat?.length - 1]
        );
      last_chat = getAlluserChat[getAlluserChat?.length - 1];
      const response1 = await post("/suggestions", {
        message: last_chat?.text,
      });
      const response2 = await post("/suggestions", {
        message: last_chat?.text,
      });
      const response = [response1, response2];
      setSuggestion(response);
      // ----------------------Sentiment-----------------------------------
      const getSentiment = await post("/get-sentiment", {
        message: last_chat?.text,
      });
      console.log("getSentiment---------", getSentiment);
      setStntiment(getSentiment?.response);
      // -------------------------------------------------------------
    }
    setLoading(false);
  };

  return (
    <div className="container-fluid r-panel px-5">
      <TopBanner />
      <div className="d-flex justify-content-between gap-3 w-100 mb-4">
        <IntentCharts NoofSegments={5} value={700} />
        <SentimentChart NoofSegments={5} stntiment={stntiment} />
        <Timer />
        <CustomerDetails data={Policy} />
      </div>
      <div className="d-flex justify-content-between gap-3 w-100 mb-3">
        <div className="bdr-hldr bdr-primary w-40">
          <TabHeader />
          <div className="tab-content" id="myTabContent">
            {chat && <Chat chat={chat} sendChat={sendChat} loading={loading} />}
            <Summary />
          </div>
        </div>
        <div className="bdr-hldr bdr-primary w-30 agnt-resp">
          <h2>Agent Responses</h2>
          <AISuggestion
            suggestion={suggestion}
            sendChat={sendChat}
            reGenerate={getSuggestion}
            loading={loading}
          />
        </div>
        <CustomerHistory data={Policy} />
      </div>
    </div>
  );
}

export default Home;
