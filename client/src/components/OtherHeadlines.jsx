import React from "react";
import NewsCard from "./NewsCard";

export default function OtherHeadlines({ otherHeadlines }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {otherHeadlines?.map((article) => (
        <NewsCard article={article} />
      ))}
    </div>
  );
}
