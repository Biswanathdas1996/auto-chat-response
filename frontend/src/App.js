import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Redux from "./pages/Redux";
import ApiCall from "./pages/ApiCall";
import { site_text } from "./utils/languageMapper";
import { useDispatch, useSelector } from "react-redux";
import { updateLanguage } from "./redux/slices/config/configSlice";
import pwcwhite from "./assets/images/pwcwhite.png";
import HomeIcon from "@mui/icons-material/Home";

function App() {
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();

  window.site_lang = config?.language;
  window.site_text = site_text;

  React.useEffect(() => {
    const lang_value = localStorage.getItem("site-lang");
    if (lang_value) {
      dispatch(updateLanguage(lang_value));
    } else {
      dispatch(updateLanguage("Engligh"));
    }
  }, []);

  const changeLang = (lang) => {
    dispatch(updateLanguage(lang));
    localStorage.setItem("site-lang", lang);
  };

  return (
    <div>
      <div className="main-div">
        <div className="l-panel d-flex justify-content-start">
          <div className="logo">
            <img src={pwcwhite} alt="" />
          </div>
          <ul className="page-nav w-100">
            <li className="active">
              <HomeIcon />
            </li>
            {/* <li>1</li>
            <li>2</li> */}
          </ul>
        </div>
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/redux" element={<Redux />} />
            <Route exact path="/api" element={<ApiCall />} />
          </Routes>
        </>
      </div>
    </div>
  );
}

export default App;
