const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  industry: { type: String, trim: true },
  location: { type: String, trim: true },
  employees: { type: Number, default: 0 },
  foundingYear: { type: Number },
  description: { type: String },
  website: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
