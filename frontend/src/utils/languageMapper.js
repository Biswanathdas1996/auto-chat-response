import _ from "lodash";
import English from "../lang/English.json";
import Bengali from "../lang/Bengali.json";
import Hindi from "../lang/Hindi.json";

export const add_lang = (LANGUAGE) => {
  switch (LANGUAGE) {
    case "English":
      return English;
    case "Bengali":
      return Bengali;
    case "Hindi":
      return Hindi;
    default:
      return English;
  }
};

export const site_text = (path) => {
  const CURRENT_LANGUAGE = window.site_lang;
  const data = add_lang(CURRENT_LANGUAGE);
  return _.get(data, path);
};
