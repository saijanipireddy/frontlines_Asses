import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./FAQ.css";

const faq = [
  {
    id: 1,
    title: "What makes CompanyDirectory different from other platforms?",
    details: "Unlike traditional directories that just list companies, CompanyDirectory provides AI-powered insights, detailed analytics, and intelligent filtering to help you discover the perfect companies for your needs."
  },
  {
    id: 2,
    title: "Do I need any training to use CompanyDirectory?",
    details: "No training is required. Our platform is designed with user experience in mind, featuring intuitive navigation and clear instructions. Anyone can start exploring companies within minutes."
  },
  {
    id: 3,
    title: "Can I filter companies by multiple criteria?",
    details: "Yes! You can filter companies by location, industry, company size, founding year, and more. Our advanced filtering system allows you to combine multiple criteria for precise results."
  },
  {
    id: 4,
    title: "How often is the company data updated?",
    details: "We update our database quarterly with verified information. Our team constantly monitors company changes, acquisitions, and new market entries to ensure data accuracy."
  },
  {
    id: 5,
    title: "Can I save companies for future reference?",
    details: "Absolutely. Registered users can create personalized lists, save favorite companies, and set up alerts for updates on companies they're interested in."
  },
  {
    id: 6,
    title: "What kind of insights does CompanyDirectory provide?",
    details: "We provide detailed analytics including employee growth trends, funding information, market presence, and industry positioning to help you make informed decisions."
  },
  {
    id: 7,
    title: "Do I need separate tools for different types of searches?",
    details: "No. CompanyDirectory offers a unified platform for all your company discovery needs - from basic searches to advanced analytics and competitive intelligence."
  },
  {
    id: 8,
    title: "Can CompanyDirectory help with investment research?",
    details: "Yes. Our platform provides comprehensive data on company financials, growth patterns, market positioning, and industry trends that are valuable for investment analysis."
  },
  {
    id: 9,
    title: "Is my search data secure with CompanyDirectory?",
    details: "Absolutely. We employ enterprise-grade security measures including data encryption, secure servers, and strict privacy protocols to protect all user information."
  },
  {
    id: 10,
    title: "Is CompanyDirectory suitable for job seekers?",
    details: "Yes. Job seekers can use our platform to research potential employers, understand company cultures, and identify growing companies with hiring opportunities."
  },
  {
    id: 11,
    title: "How can companies get listed on your platform?",
    details: "Companies can submit their details through our verification process. We review each submission to ensure data accuracy before adding it to our directory."
  },
  {
    id: 12,
    title: "Do you provide international company data?",
    details: "Currently, we focus on Indian companies, but we're expanding to include global companies. Our platform already features multinational corporations with significant presence in India."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

   const handleContact = () => {
    const phoneNumber = "+919666592066"; 
    const message = encodeURIComponent("Hi! I would like to connect with you.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
       
        <div className="faq-header">
          <h1 className="faq-main-title">
            Frequently Asked Questions
          </h1>
          <p className="faq-subtitle">
            Get answers to common questions about CompanyDirectory and how to make the most of our platform.
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-accordion">
            {faq.map(({ id, title, details }) => (
              <div key={id} className="faq-item">
                <button
                  onClick={() => toggle(id)}
                  className="faq-question"
                >
                  <h3 className="faq-title">{title}</h3>
                  <span className="faq-icon-wrapper">
                    <IoIosArrowDown
                      className={`faq-arrow ${openId === id ? "faq-arrow-open" : ""}`}
                    />
                  </span>
                </button>

                <div
                  className={`faq-answer ${openId === id ? "faq-answer-open" : ""}`}
                >
                  <p className="faq-details">
                    {details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-help-section">
            <div className="help-card">
              <div className="help-icon">💬</div>
              <div className="help-content">
                <h4>Still have questions?</h4>
                <p>Can't find what you're looking for? My support is always here to help you get the answers you need.</p>
                <div className="help-buttons">
                  <button className="help-btn primary-btn" onClick={handleContact}>
                    Contact Support
                  </button>
                  <button className="help-btn secondary-btn" onClick={handleContact}>
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;