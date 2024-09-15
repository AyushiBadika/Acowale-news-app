import { Router } from "express";
import { newsControllers } from "../controllers/news.js";

const newsRouters = Router();

newsRouters.get("/get-news", newsControllers.getHeadlines);
newsRouters.get("/search-news", newsControllers.searchNews);

export default newsRouters;
