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

import { post, get } from "../helper/apiHelper";

function Home() {
  const [loading, setLoading] = React.useState(false);
  const [chat, setChat] = React.useState(null);

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
    const response = await post("/chat", {
      name: name,
      text: text,
      role: role,
    });
    if (response) {
      fetchAllChat();
    }
  };

  return (
    <div className="container-fluid r-panel px-5">
      <TopBanner />
      <div className="d-flex justify-content-between gap-3 w-100 mb-4">
        <IntentCharts NoofSegments={5} value={700} />
        <SentimentChart NoofSegments={5} value={700} />
        <Timer />
        <CustomerDetails />
      </div>
      <div className="d-flex justify-content-between gap-3 w-100 mb-3">
        <div className="bdr-hldr bdr-primary w-40">
          <TabHeader />
          <div className="tab-content" id="myTabContent">
            {chat && <Chat chat={chat} sendChat={sendChat} />}
            <Summary />
          </div>
        </div>
        <div className="bdr-hldr bdr-primary w-30 agnt-resp">
          <h2>Agent Responses</h2>
          <AISuggestion />
        </div>
        <CustomerHistory />
      </div>
    </div>
  );
}

export default Home;
