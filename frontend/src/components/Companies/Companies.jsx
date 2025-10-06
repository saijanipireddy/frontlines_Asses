import React, { useState, useEffect } from "react";
import "./Companies.css";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All locations");
  const [selectedIndustry, setSelectedIndustry] = useState("All industries");
  const [sortOrder, setSortOrder] = useState("newest");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch companies from API
  const fetchCompanies = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://frontlines-backend.onrender.com/api/companies");
      if (!response.ok) throw new Error("Failed to fetch companies");
      const data = await response.json();
      const companiesWithId = data.map((company) => ({
        ...company,
        id: company._id,
      }));
      setCompanies(companiesWithId);
      setFilteredCompanies(companiesWithId);
    } catch (error) {
      setMessage("Error fetching companies: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  // Dynamic filter options
  const locations = ["All locations", ...new Set(companies.map(c => c.location))];
  const industries = ["All industries", ...new Set(companies.map(c => c.industry))];

  // Apply search, filters, and sorting
  useEffect(() => {
    let result = [...companies];

    if (searchTerm) {
      result = result.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocation !== "All locations") {
      result = result.filter(company => company.location === selectedLocation);
    }

    if (selectedIndustry !== "All industries") {
      result = result.filter(company => company.industry === selectedIndustry);
    }

    if (sortOrder === "newest") {
      result.sort((a, b) => b.foundingYear - a.foundingYear);
    } else if (sortOrder === "oldest") {
      result.sort((a, b) => a.foundingYear - b.foundingYear);
    }

    setFilteredCompanies(result);
  }, [searchTerm, selectedLocation, selectedIndustry, sortOrder, companies]);

  // Handlers
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleLocationChange = (e) => setSelectedLocation(e.target.value);
  const handleIndustryChange = (e) => setSelectedIndustry(e.target.value);
  const handleSortChange = (e) => setSortOrder(e.target.value);
  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("All locations");
    setSelectedIndustry("All industries");
    setSortOrder("newest");
  };

  const getGradientClass = (index) => {
    const gradients = ["gradient-1", "gradient-2", "gradient-3", "gradient-4", "gradient-5"];
    return gradients[index % gradients.length];
  };

  if (loading) return <div className="loading">Loading companies...</div>;
  if (message) return <div className="error">{message}</div>;

  return (
    <div className="companies-container">
     
      <header className="companies-header">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Discover India's Leading Companies</h1>
              <p className="hero-description">
                Explore top Indian companies across various industries. Filter, search, and sort to find detailed info about locations, workforce, founding years, and more.
              </p>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-icon">🏢</div>
                <div className="stat-number">{companies.length}+</div>
                <div className="stat-label">TOP COMPANIES</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🏢</div>
                <div className="stat-number">14+</div>
                <div className="stat-label">HIRING</div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Filters */}
        <div className="filters-container">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          <div className="dropdown-filters">
            <select value={selectedLocation} onChange={handleLocationChange} className="filter-dropdown">
              {locations.map(location => <option key={location} value={location}>{location}</option>)}
            </select>

            <select value={selectedIndustry} onChange={handleIndustryChange} className="filter-dropdown">
              {industries.map(industry => <option key={industry} value={industry}>{industry}</option>)}
            </select>

            <select value={sortOrder} onChange={handleSortChange} className="filter-dropdown">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>

            <button onClick={handleClearFilters} className="clear-filters-btn">Clear Filters</button>
          </div>
        </div>
      </header>

    
      <div className="companies-content">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filter-section glass-card">
            <h3>Active Filters:</h3>
            <div className="active-filters">
              {searchTerm && <span className="active-filter-tag">🔍 {searchTerm}</span>}
              {selectedLocation !== "All locations" && <span className="active-filter-tag">📍 {selectedLocation}</span>}
              {selectedIndustry !== "All industries" && <span className="active-filter-tag">🏭 {selectedIndustry}</span>}
              <span className="active-filter-tag">⚡ {sortOrder === "newest" ? "Newest First" : "Oldest First"}</span>
            </div>
          </div>

          <div className="filter-section glass-card">
            <h3>Filter by Location:</h3>
            <div className="filter-options">
              {locations.map(location => (
                <label key={location} className="filter-option">
                  <input
                    type="radio"
                    name="location"
                    value={location}
                    checked={selectedLocation === location}
                    onChange={handleLocationChange}
                  />
                  <span>{location}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-section glass-card">
            <h3>Filter by Industry:</h3>
            <div className="filter-options">
              {industries.map(industry => (
                <label key={industry} className="filter-option">
                  <input
                    type="radio"
                    name="industry"
                    value={industry}
                    checked={selectedIndustry === industry}
                    onChange={handleIndustryChange}
                  />
                  <span>{industry}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

     
        <main className="companies-list">
          <div className="results-header">
            📊 Showing {filteredCompanies.length} of {companies.length} companies
          </div>

          <div className="companies-grid">
            {filteredCompanies.map((company, index) => (
              <div key={company.id} className={`company-card ${getGradientClass(index)}`}>
                <div className="card-glow"></div>
                <div className="company-header">
                  <div className="company-badge">
                    <div className="company-icon">{company.name.charAt(0)}</div>
                  </div>
                  <div className="company-info">
                    <h3 className="companies-name">{company.name}</h3>
                    <span className="founding-year">🎂 Founded {company.foundingYear}</span>
                  </div>
                </div>
                <p>📍 {company.location}</p>
                <p className="com-desc">{company.description}</p>
                <div className="company-stats">
                  <div className="stat">
                    <span>{company.employees?.toLocaleString() || "N/A"}+</span>
                    <span>Employees</span>
                  </div>
                  <div className="stat">
                    <span>{company.industry}</span>
                    <span>Industry</span>
                  </div>
                </div>
                {company.website && (
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="company-website">
                    Visit Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Companies;
