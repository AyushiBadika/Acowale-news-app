import "dotenv/config";
import { newsServices } from "../services/news.js";

export const newsControllers = {
  getHeadlines: async function (req, res) {
    try {
      console.log(req.query);
      const { category, lang, country } = req.query;

      const response = await newsServices.getHeadlines({ category, lang, country });

      if (response.ok) {
        res.status(200).json({ data: response.data, ok: true });
      } else {
        res.status(400).json({ err: response.err, ok: true });
      }
    } catch (error) {
      res.status(500).json({ err: "Something went wrong!", ok: false });
    }
  },
  searchNews: async function (req, res) {
    try {
      const { query, lang, country } = req.query;

      const response = await newsServices.searchNews({ query, lang, country });

      if (response.ok) {
        res.status(200).json({ data: response.data, ok: true });
      } else {
        res.status(400).json({ err: response.err, ok: true });
      }
    } catch (error) {
      res.status(500).json({ err: "Something went wrong!", ok: false });
    }
  },
};
