import axios from "axios";
import { newsEndpoints } from "../utils.js";

export const newsServices = {
  getHeadlines: async function ({ category, lang, country }) {
    const apiRes = await axios.get(newsEndpoints.getHeadlines({ category, lang, country }));

    if (apiRes.status === 200) {
      return { data: apiRes.data, ok: true };
    } else {
      return { err: apiRes.data, ok: false };
    }
  },

  searchNews: async function ({ query, lang, country }) {
    console.log(query);
    const apiRes = await axios.get(newsEndpoints.searchNews({ query, lang, country }));
    console.log(apiRes.data);
    if (apiRes.status === 200) {
      return { data: apiRes.data, ok: true };
    } else {
      return { err: apiRes.data, ok: false };
    }
  },
};
