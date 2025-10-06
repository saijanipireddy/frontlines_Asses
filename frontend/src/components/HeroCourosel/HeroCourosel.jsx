import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./HeroCourosel.css";

const carousel1Items = [
  { img: "/home/adobe-image.png", name: "Adobe" },
  { img: "/home/auto-desk-image.png", name: "Autodesk" },
  { img: "/home/avast-image.jpg", name: "Avast" },
  { img: "/home/dell-image.png", name: "Dell" },
  { img: "/home/equaldata-image.png", name: "Community" },
  { img: "/home/intel.png", name: "Intel" },
  { img: "/home/mang-images.png", name: "Log Sheet" },
  { img: "/home/flm.jpg", name: "FLM" },
  { img: "/home/nvidea-imae.png", name: "NVIDIA" },
  { img: "/home/paypal-image.png", name: "PayPal" },
  { img: "/home/sales-force-image.png", name: "Salesforce" },
  { img: "/home/zoom-image.png", name: "Zoom" },
];

const carousel2Items = [
  { img: "/home/nvidea-imae.png", name: "NVIDIA" },
  { img: "/home/paypal-image.png", name: "PayPal" },
  { img: "/home/sales-force-image.png", name: "Salesforce" },
  { img: "/home/intel.png", name: "Intel" },
  { img: "/home/zoom-image.png", name: "Zoom" },
  { img: "/home/flm.jpg", name: "FLM" },
  { img: "/home/adobe-image.png", name: "Adobe" },
  { img: "/home/auto-desk-image.png", name: "Autodesk" },
  { img: "/home/avast-image.jpg", name: "Avast" },
  { img: "/home/dell-image.png", name: "Dell" },
  { img: "/home/equaldata-image.png", name: "Community" },
  { img: "/home/mang-images.png", name: "Log Sheet" },
];

const HeroCarousel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const row1Items = [...carousel1Items, ...carousel1Items];
  const row2Items = [...carousel2Items, ...carousel2Items];

  const isCompanyMatch = (companyName) => {
    if (!searchTerm.trim()) return false;
    return companyName.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const highlightText = (text) => {
    if (!searchTerm.trim()) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="highlighted-text">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="hero-carousel-section">
      <div className="carousel-bg-elements">
        <div className="carousel-gradient"></div>
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
      </div>

      <div className="carousel-container">
        <div className="carousel-header">
          <div className="header-content">
            <h1 className="love">
              <FaHeart className="heart-icon" />
              Loved by{" "}
              <span className="gradient-text">10 Cr+ Software Engineers</span>
              <FaHeart className="heart-icon" />
            </h1>
            <p className="carousel-subtitle">
              Trusted by the world's leading tech companies and millions of
              developers worldwide
            </p>
          </div>
        </div>

        <div className="carousel-search">
          <div className="search-container">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="search-icon"
            >
              <path
                d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Type here to search companies..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {searchTerm && (
          <div className="search-results-info">
            <p>
              Showing results for:{" "}
              <span className="search-term">"{searchTerm}"</span>
            </p>
          </div>
        )}

        <div className="carousel-wrapper">
          <div className="carousel-row move-left">
            {row1Items.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  isCompanyMatch(item.name) ? "highlighted" : ""
                }`}
              >
                <div className="company-logo">
                  <img src={item.img} alt={`${item.name} logo`} />
                </div>
                <div className="company-name">{highlightText(item.name)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-row-2 move-right">
            {row2Items.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  isCompanyMatch(item.name) ? "highlighted" : ""
                }`}
              >
                <div className="company-logo">
                  <img src={item.img} alt={`${item.name} logo`} />
                </div>
                <div className="company-name">{highlightText(item.name)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
