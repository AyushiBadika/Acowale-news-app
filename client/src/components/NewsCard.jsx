import moment from "moment";
import React from "react";

export default function NewsCard({ article }) {
  return (
    <div className="border w-full shadow-md">
      <a href={article.url} className="w-full relative">
        <div className="relative">
          <img className="h-60 w-full object-cover cursor-pointer" src={article.image} />
          <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 w-full h-60"></div>
        </div>
        <a className="absolute text-white text-xl font-serif font-semibold bottom-0 left-2 right-2">{article.title}</a>
      </a>
      <div className="p-4">
        <p>{article.description.slice(0, 150)}...</p>
        <p className="text-[0.75rem] font-sans text-gray-500">
          By{" "}
          <a className="underline" href={article.source.url}>
            {article.source.name}
          </a>{" "}
          {moment(article.publishedAt).fromNow()}
        </p>
      </div>
    </div>
  );
}
