# 📚 News Explorer

- **Hosted Link**: https://aconews-69bf9.web.app/
  Welcome to **News Explorer**, your ultimate destination for discovering the latest headlines and news articles from around the world! Whether you’re interested in top headlines, specific search queries, or filtering news by category, country, and language, News Explorer has got you covered.

## 🌟 Features

- **Top Headlines**: View the most popular and breaking news articles in various categories.
- **Search Functionality**: Find news articles based on specific search queries with real-time results.
- **Filters**: Refine your news feed by selecting categories, countries, and languages.
- **Pagination**: Easily navigate through extensive news results with a smooth pagination system.

## 🚀 Getting Started

To get started with News Explorer, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/AyushiBadika/Acowale-news-app.git
```

Go to client and server repos separately and run

```bash
npm install
npm run dev
```

## 🛠️ API Integration

News Explorer fetches news data from the following endpoints:

- **Headlines**: GET https://acowale-news-app.onrender.com/get-headlines
- **Search News**: GET https://acowale-news-app.onrender.com/search-news
  The API provides up to 10 results, which are then paginated within the app for seamless navigation.

## 📦 Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For modern and responsive styling.
- **Axios**: For making HTTP requests.
- **React Hot Toast**: For elegant and customizable notifications.
