import React, { useEffect, useState } from "react";
import { countries, languages, categories } from "../utils";

export default function Filter({ selectedCategory, selectedCountry, selectedLanguage, setSelectedCategory, setSelectedCountry, setSelectedLanguage }) {
  useEffect(() => {
    console.log(selectedCategory);
    console.log(selectedCountry);
    console.log(selectedLanguage);
  }, [selectedCategory, selectedCountry, selectedLanguage]);
  return (
    <div className="w-full z-10">
      <div className="flex bg-[#1A1A1A] w-full items-center justify-center px-20">
        {categories.map((category, index) => (
          <div key={index} onClick={() => setSelectedCategory(category)} className={`text-white font-bold cursor-pointer px-4 py-2 ${selectedCategory === category && "active-category"}`}>
            {category}
          </div>
        ))}
        <select className="z-10 cursor-pointer ml-4" onChange={(e) => setSelectedCountry(e.target.value)}>
          <option key={0} value={""}>
            Select country
          </option>
          {countries.map((country, index) => (
            <option key={index + 1} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
        <select className="z-10 cursor-pointer ml-4" onChange={(e) => setSelectedLanguage(e.target.value)}>
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
  );
}
