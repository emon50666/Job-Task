"use client"
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const MobileCategory = () => {
  const [categories, setCategories] = useState([]);
  const [hoveredPath, setHoveredPath] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu open state for smaller screens

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.shope.com.bd/api/v1/public/hero-categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON data
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleHover = (category, level) => {
    const updatedPath = [...hoveredPath];
    updatedPath[level] = category;
    updatedPath.length = level + 1; // Remove deeper levels if any
    setHoveredPath(updatedPath);
  };

  const renderCategories = (categories, level = 0) => {
    return (
      <div
        key={`level-${level}`}
        className={`w-full md:w-1/4 p-3 z-50  bg-white shadow-md text-[12px] ${
          level === 0
            ? "bg-white"
            : level === 1
            ? "bg-whit"
            : "bg-whit-" + (300 + level * 50)
        }`}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className={`py-0.5 flex items-center  left-32 cursor-pointer ${
              hoveredPath[level]?.id === category.id ? "text-[#FC8C21] font-medium" : "hover:text-[#FC8C21]"
            }`}
            onMouseEnter={() => handleHover(category, level)}
          >
            {category.title}
            {category.childrens && (
              <FaChevronDown
                className={`ml-2 text-[9px] mt-1 ${
                  hoveredPath[level]?.id === category.id ? "text-[#FC8C21]" : ""
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative ">
      {/* Menu toggle button for small screens */}
      <button
        className="md:hidden p-2 text-[#FC8C21] bg-white rounded"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "Close Categories" : "Open Categories"}
      </button>

      {/* Dropdown menu container */}
      <div
        className={`flex flex-col md:flex-row absolute  md:static  w-full md:w-auto ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {/* Render top-level categories */}
        {categories.length > 0 && renderCategories(categories, 0)}

        {/* Render deeper levels dynamically */}
        {hoveredPath.map(
          (category, index) =>
            category.childrens && renderCategories(category.childrens, index + 1)
        )}
      </div>
    </div>
  );
};

export default MobileCategory;
