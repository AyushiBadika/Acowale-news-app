import axios from "axios";
import { calculateTotalPages, newsEndpoints } from "../utils.js";

export const newsServices = {
  getHeadlines: async function ({ category, lang, country, page }) {
    const apiRes = await axios.get(newsEndpoints.getHeadlines({ category, lang, country }));

    if (apiRes.status === 200) {
      const articles = apiRes.data.articles;
      const pageSize = 7;
      const totalArticles = articles.length;

      const totalPages = calculateTotalPages(totalArticles, pageSize);

      const currentPage = Math.max(1, Math.min(page, totalPages));

      const paginatedArticles = articles.slice((currentPage - 1) * pageSize, currentPage * pageSize);

      return {
        data: {
          articles: paginatedArticles,
          totalPages,
          currentPage,
        },
        ok: true,
      };
    } else {
      return { err: apiRes.data, ok: false };
    }
  },

  searchNews: async function ({ query, lang, country, page = "1" }) {
    const apiRes = await axios.get(newsEndpoints.searchNews({ query, lang, country }));
    if (apiRes.status === 200) {
      const articles = apiRes.data.articles;
      const pageSize = 3;
      const totalArticles = articles.length;

      const totalPages = calculateTotalPages(totalArticles, pageSize);

      const currentPage = Math.max(1, Math.min(page, totalPages));

      const paginatedArticles = articles.slice((currentPage - 1) * pageSize, currentPage * pageSize);

      return {
        data: {
          articles: paginatedArticles,
          totalPages,
          currentPage,
        },
        ok: true,
      };
    } else {
      return { err: apiRes.data, ok: false };
    }
  },
};
