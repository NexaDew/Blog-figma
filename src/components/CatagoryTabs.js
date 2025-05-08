
import React, { useState } from "react";
import "./blog.css";

const tabs = [
  "Latest Blog",
  "Urban Planning",
  "Graphics Design",
  "Web Design",
  "UX/UI Design",
  "Technology"
];

function CategoryTabs({ onTabChange }) {
  const [activeTab, setActiveTab] = useState("Latest Blog");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onTabChange(tab); 
  };

  return (
    <div className="category-tabs">
      {tabs.map((tab) => (
        <span
          key={tab}
          className={tab === activeTab ? "tab tab-active" : "tab"}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </span>
      ))}
    </div>
  );
}

export default CategoryTabs;
