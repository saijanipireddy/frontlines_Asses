const Company = require('../models/Company');

// Create a new company
exports.createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    const saved = await company.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Error creating company", error: err.message });
  }
};

// Get all companies
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching companies", error: err.message });
  }
};

// Get single company
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.json(company);
  } catch (err) {
    res.status(500).json({ message: "Error fetching company", error: err.message });
  }
};

// Update company
exports.updateCompany = async (req, res) => {
  try {
    const updated = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Company not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating company", error: err.message });
  }
};

// Delete company
exports.deleteCompany = async (req, res) => {
  try {
    const deleted = await Company.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Company not found" });
    res.json({ message: "Company deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting company", error: err.message });
  }
};
