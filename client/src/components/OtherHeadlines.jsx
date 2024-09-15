import React from "react";
import NewsCard from "./NewsCard";

export default function OtherHeadlines({ otherHeadlines }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {otherHeadlines?.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}
