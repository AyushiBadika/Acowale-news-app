import express from "express";
import cors from "cors";
import "dotenv/config";
import newsRouters from "./routers/news.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: "*" }));

app.use(newsRouters);

app.listen(PORT, () => {
  console.log("Server started and listening at", PORT);
});
