import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Headlines from "./Headlines";
import SearchResults from "./SearchResults";
import Filter from "./Filter";
import { Toaster } from "react-hot-toast";

export default function AppContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeComponent, setActiveComponent] = useState("headlines");
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="flex flex-col font-sans justify-center items-center w-full">
      <Toaster />
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setActiveComponent={setActiveComponent} />
      <Filter selectedCategory={selectedCategory} selectedCountry={selectedCountry} selectedLanguage={selectedLanguage} setSelectedCategory={setSelectedCategory} setSelectedCountry={setSelectedCountry} setSelectedLanguage={setSelectedLanguage} />
      {activeComponent === "headlines" && <Headlines country={selectedCountry} language={selectedLanguage} category={selectedCategory} />}
      {activeComponent === "searchResults" && <SearchResults country={selectedCountry} language={selectedLanguage} query={searchQuery} setActiveComponent={setActiveComponent} />}
      <Footer />
    </div>
  );
}
