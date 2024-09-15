import React from "react";
import moment from "moment";

export default function TopHeadlines({ topHeadlines }) {
  return (
    <div className="flex">
      {/* left column */}
      <div className="w-[50%] p-4">
        <img src={topHeadlines[0].image} className="" />
        <div className="font-serif">
          <a href={topHeadlines[0].url} className="font-bold text-2xl cursor-pointer">
            {topHeadlines[0].title}
          </a>
          <p className="text-[0.75rem] font-sans text-gray-500">
            By{" "}
            <a className="underline" href={topHeadlines[0].source.url}>
              {topHeadlines[0].source.name}
            </a>{" "}
            {moment(topHeadlines[0].publishedAt).fromNow()}
          </p>
        </div>
      </div>

      {/* right column */}
      <div className="flex flex-col justify-evenly w-[50%] text-white bg-[#1A1A1A] px-4">
        {/* [0,1] */}
        <div className="flex gap-4">
          <div className="flex flex-col">
            <a href={topHeadlines[1].url} className="font-bold text-xl font-serif leading-6 cursor-pointer">
              {topHeadlines[1].title}
            </a>
            <p className="text-[0.75rem] font-sans text-gray-300">
              By{" "}
              <a className="underline" href={topHeadlines[1].source.url}>
                {topHeadlines[1].source.name}
              </a>{" "}
              {moment(topHeadlines[1].publishedAt).fromNow()}
            </p>
          </div>
          <img className="h-40 w-60 object-cover" src={topHeadlines[1].image} />
        </div>
        {/* 1,1 */}
        <div className="flex gap-4">
          <img className="h-40 w-60 object-cover" src={topHeadlines[2].image} />
          <div className="flex flex-col">
            <a href={topHeadlines[2].url} className="font-bold text-xl font-serif leading-6 cursor-pointer">
              {topHeadlines[2].title}
            </a>
            <p className="text-[0.75rem] font-sans text-gray-300">
              By{" "}
              <a className="underline" href={topHeadlines[2].source.url}>
                {topHeadlines[2].source.name}
              </a>{" "}
              {moment(topHeadlines[2].publishedAt).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
