import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import Footer from '../Footer/Footer';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('add');
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    employees: '',
    description: '',
    industry: '',
    foundingYear: '',
    website: ''
  });
  const [editingCompany, setEditingCompany] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch companies using API
  useEffect(() => {
    fetchCompanies();
  }, []);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

//getting Companies
const fetchCompanies = async () => {
  try {
    setLoading(true);
    const response = await fetch('http://localhost:5000/api/companies');
    
    if (!response.ok) {
      throw new Error('Failed to fetch companies');
    }
    
    const data = await response.json();
    const companiesWithId = data.map(company => ({
      ...company,
      id: company._id 
    }));
    setCompanies(companiesWithId);
  } catch (error) {
    setMessage('Error fetching companies: ' + error.message);
  } finally {
    setLoading(false);
  }
};

// CREATE - Add new company
const handleAddCompany = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    const response = await fetch('http://localhost:5000/api/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        location: formData.location,
        employees: parseInt(formData.employees),
        description: formData.description,
        industry: formData.industry,
        foundingYear: parseInt(formData.foundingYear),
        website: formData.website
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to add company');
    }

    const newCompany = await response.json();
    setMessage('✅ Company added successfully!');
    setFormData({
      name: '',
      location: '',
      employees: '',
      description: '',
      industry: '',
      foundingYear: '',
      website: ''
    });
    fetchCompanies();
  } catch (error) {
    setMessage('❌ Error adding company: ' + error.message);
  } finally {
    setLoading(false);
  }
};

// UPDATE - Edit company 
const handleUpdateCompany = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    const response = await fetch(`http://localhost:5000/api/companies/${editingCompany.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        location: formData.location,
        employees: parseInt(formData.employees),
        description: formData.description,
        industry: formData.industry,
        foundingYear: parseInt(formData.foundingYear),
        website: formData.website
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update company');
    }

    const updatedCompany = await response.json();
    setMessage('✅ Company updated successfully!');
    setEditingCompany(null);
    setFormData({
      name: '',
      location: '',
      employees: '',
      description: '',
      industry: '',
      foundingYear: '',
      website: ''
    });
    fetchCompanies(); 
    setActiveSection('view');
  } catch (error) {
    setMessage('❌ Error updating company: ' + error.message);
  } finally {
    setLoading(false);
  }
};

// DELETE - Remove company 
const handleDeleteCompany = async (companyId) => {
  if (!window.confirm('Are you sure you want to delete this company?')) {
    return;
  }

  setLoading(true);
  try {
    const response = await fetch(`http://localhost:5000/api/companies/${companyId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete company');
    }

    const result = await response.json();
    setMessage('✅ ' + (result.message || 'Company deleted successfully!'));
    fetchCompanies();
  } catch (error) {
    setMessage('❌ Error deleting company: ' + error.message);
  } finally {
    setLoading(false);
  }
};

 
  const cancelEdit = () => {
    setEditingCompany(null);
    setFormData({
      name: '',
      location: '',
      employees: '',
      description: '',
      industry: '',
      foundingYear: '',
      website: ''
    });
    setActiveSection('view');
  };

  const clearMessage = () => {
    setMessage('');
  };

  // Get gradient class based on index
  const getGradientClass = (index) => {
    const gradients = [
      "gradient-1",
      "gradient-2", 
      "gradient-3",
      "gradient-4",
      "gradient-5"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="admin-panel">
     
      <div className="page-bg-elements">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>

      <div className="admin-container">
        
        <header className="admin-header">
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Company Directory Admin</h1>
                <p className="hero-description">
                  Manage your companies database with powerful CRUD operations. 
                  Add, edit, view, and delete companies with ease.
                </p>
              </div>
              <div className="hero-stats">
                <div className="stat-card">
                  <div className="stat-icon">📊</div>
                  <div className="stat-number">{companies.length}</div>
                  <div className="stat-label">TOTAL COMPANIES</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">⚡</div>
                  <div className="stat-number">CRUD</div>
                  <div className="stat-label">OPERATIONS</div>
                </div>
              </div>
            </div>
          </section>
        </header>

        <div className="admin-content-wrapper">
         
          <aside className="admin-sidebar">
            <div className="sidebar-section glass-card">
              <h3>CRUD Operations</h3>
              <div className="sidebar-buttons">
                <button 
                  className={`sidebar-btn ${activeSection === 'add' ? 'active' : ''}`}
                  onClick={() => setActiveSection('add')}
                >
                  ➕ Add Company
                </button>
                <button 
                  className={`sidebar-btn ${activeSection === 'view' ? 'active' : ''}`}
                  onClick={() => setActiveSection('view')}
                >
                  👁️ View Companies
                </button>
                <button 
                  className={`sidebar-btn ${activeSection === 'edit' && editingCompany ? 'active' : ''}`}
                  onClick={() => editingCompany && setActiveSection('edit')}
                  disabled={!editingCompany}
                >
                  ✏️ Edit Company
                </button>
              </div>
            </div>

            <div className="sidebar-section glass-card">
              <h3>Active Operations</h3>
              <div className="active-filters">
                {activeSection === 'add' && (
                  <span className="active-filter-tag">➕ Adding New Company</span>
                )}
                {activeSection === 'edit' && editingCompany && (
                  <span className="active-filter-tag">✏️ Editing: {editingCompany.name}</span>
                )}
                {activeSection === 'view' && (
                  <span className="active-filter-tag">👁️ Viewing All Companies</span>
                )}
              </div>
            </div>
          </aside>

         
          <main className="admin-main-content">
            {message && (
              <div className="message-banner">
                {message}
                <button onClick={clearMessage} className="message-close">×</button>
              </div>
            )}

            
            {activeSection === 'add' && (
              <div className="content-card glass-card">
                <div className="card-header">
                  <h2>➕ Add New Company</h2>
                  <p className="card-subtitle">Fill in the details to add a new company to the directory</p>
                </div>

                <form onSubmit={handleAddCompany} className="company-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Company Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter company name"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter location"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Number of Employees *</label>
                      <input
                        type="number"
                        name="employees"
                        value={formData.employees}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter employee count"
                        min="1"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Industry *</label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter industry"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Founding Year *</label>
                      <input
                        type="number"
                        name="foundingYear"
                        value={formData.foundingYear}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter founding year"
                        min="1800"
                        max="2024"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Website</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      className="form-textarea"
                      placeholder="Enter company description"
                      rows="4"
                    />
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="submit-btn primary-btn"
                      disabled={loading}
                    >
                      {loading ? 'Adding...' : 'Add Company'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeSection === 'edit' && editingCompany && (
              <div className="content-card glass-card">
                <div className="card-header">
                  <div className="header-row">
                    <h2>✏️ Edit Company</h2>
                    <button onClick={cancelEdit} className="cancel-btn">
                      Cancel Edit
                    </button>
                  </div>
                  <p className="card-subtitle">Update the details for {editingCompany.name}</p>
                </div>

                <form onSubmit={handleUpdateCompany} className="company-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Company Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Number of Employees *</label>
                      <input
                        type="number"
                        name="employees"
                        value={formData.employees}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        min="1"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Industry *</label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Founding Year *</label>
                      <input
                        type="number"
                        name="foundingYear"
                        value={formData.foundingYear}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        min="1800"
                        max="2024"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Website</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      className="form-textarea"
                      rows="4"
                    />
                  </div>

                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="update-btn primary-btn"
                      disabled={loading}
                    >
                      {loading ? 'Updating...' : 'Update Company'}
                    </button>
                    <button 
                      type="button" 
                      onClick={cancelEdit}
                      className="cancel-btn secondary-btn"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

          
            {activeSection === 'view' && (
              <div className="content-card glass-card">
                <div className="card-header">
                  <h2>👁️ All Companies ({companies.length})</h2>
                  <p className="card-subtitle">Manage and view all companies in your directory</p>
                </div>

                {loading ? (
                  <div className="loading-state">
                    <div className="loading-spinner"></div>
                    <p>Loading companies...</p>
                  </div>
                ) : companies.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-icon">🏢</div>
                    <h3>No Companies Found</h3>
                    <p>Get started by adding your first company to the directory.</p>
                    <button 
                      onClick={() => setActiveSection('add')}
                      className="primary-btn"
                    >
                      Add First Company
                    </button>
                  </div>
                ) : (
                  <div className="companies-grid">
                    {companies.map((company, index) => (
                      <div 
                        key={company.id} 
                        className={`company-card ${getGradientClass(index)}`}
                      >
                        <div className="card-glow"></div>
                        <div className="company-header">
                          <div className="company-badge">
                            <div className="company-icon">
                              {company.name.charAt(0)}
                            </div>
                          </div>
                          <div className="company-info">
                            <h3 className="company-name">{company.name}</h3>
                            <span className="company-year">
                              🎂 Founded {company.foundingYear}
                            </span>
                          </div>
                        </div>
                        <p className="company-location">📍 {company.location}</p>
                        <p className="company-description">{company.description}</p>
                        <div className="company-stats">
                          <div className="stat">
                            <span className="stat-value">{company.employees.toLocaleString()}+</span>
                            <span className="stat-label">Employees</span>
                          </div>
                          <div className="stat">
                            <span className="stat-value">{company.industry}</span>
                            <span className="stat-label">Industry</span>
                          </div>
                        </div>
                        <div className="company-actions">
                          <button 
                            onClick={() => handleEditCompany(company)}
                            className="edit-btn"
                          >
                            ✏️ Edit
                          </button>
                          <button 
                            onClick={() => handleDeleteCompany(company.id)}
                            className="delete-btn"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                        {company.website && (
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="company-website"
                          >
                            <span>Visit Website</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;