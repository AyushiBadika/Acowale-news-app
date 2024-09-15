import "dotenv/config";

const newsApiKey = process.env.GNEWS_API_KEY;

export const newsEndpoints = {
  getHeadlines: ({ category = "", lang = "en", country = "" }) => `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&country=${country}&max=100&apikey=${newsApiKey}`,

  searchNews: ({ query = "", lang = "en", country = "" }) => `https://gnews.io/api/v4/search?q=${query}&lang=${lang}&country=${country}&max=100&apikey=${newsApiKey}`,
};

export const calculateTotalPages = (totalArticles, pageSize) => {
  return Math.ceil(totalArticles / pageSize);
};
