import React, { useEffect, useState } from "react";
import { countries, languages, categories } from "../utils";

export default function Filter({ selectedCategory, selectedCountry, selectedLanguage, setSelectedCategory, setSelectedCountry, setSelectedLanguage }) {
  useEffect(() => {
    console.log(selectedCategory);
    console.log(selectedCountry);
    console.log(selectedLanguage);
  }, [selectedCategory, selectedCountry, selectedLanguage]);
  return (
    <div className="w-full z-10 flex flex-col gap-2 sm:flex-row items-center justify-center  bg-[#1A1A1A] px-4">
      <h2 className="text-xl font-bold inline text-white">Filters :</h2>
      <div className="flex flex-col sm:flex-row justify-center pb-4 sm:py-4 gap-4 ">
        <select className="z-10 cursor-pointer " onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
        <div className="w-full flex gap-4">
          <select className="z-10 cursor-pointer w-full" onChange={(e) => setSelectedCountry(e.target.value)}>
            <option key={0} value={""}>
              Select country
            </option>
            {countries.map((country, index) => (
              <option key={index + 1} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          <select className="z-10 cursor-pointer w-full" onChange={(e) => setSelectedLanguage(e.target.value)}>
            <option key={0} value={""}>
              Select language
            </option>
            {languages.map((language, index) => (
              <option key={index + 1} value={language.value}>
                {language.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
