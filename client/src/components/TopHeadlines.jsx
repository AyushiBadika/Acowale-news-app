import React from "react";
import moment from "moment";

export default function TopHeadlines({ topHeadlines }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* left column */}
      <div className="md:w-[50%] w-full md:p-4 pt-4">
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
      <div className="flex flex-col justify-evenly gap-4 w-full md:w-[50%] text-white bg-[#1A1A1A] p-4">
        {/* [0,1] */}
        <div className="flex gap-4 flex-col sm:flex-row">
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
          <img className="h-40 sm:w-32 w-full  object-cover" src={topHeadlines[1].image} />
        </div>
        {/* 1,1 */}
        <div className="flex gap-4 flex-col sm:flex-row">
          <img className="h-40 sm:w-32 w-full object-cover" src={topHeadlines[2].image} />
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
