import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Headlines from "./Headlines";
import SearchResults from "./SearchResults";
import Filter from "./Filter";

export default function AppContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageState, setPageState] = useState("headlines");
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="flex flex-col font-sans justify-center items-center w-full">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter selectedCategory={selectedCategory} selectedCountry={selectedCountry} selectedLanguage={selectedLanguage} setSelectedCategory={setSelectedCategory} setSelectedCountry={setSelectedCountry} setSelectedLanguage={setSelectedLanguage} />
      {pageState === "headlines" && <Headlines country={selectedCountry} language={selectedLanguage} category={selectedCategory} />}
      {pageState === "searchResults" && <SearchResults />}
      <Footer />
    </div>
  );
}
