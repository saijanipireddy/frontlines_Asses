# Company Management API Backend

A robust RESTful API for managing company information, built with Node.js, Express, and MongoDB.

## 📋 Overview

This backend service provides a complete CRUD (Create, Read, Update, Delete) API for managing company data. It includes features for storing company details like name, industry, location, employees count, and more.

## 🚀 Quick Start

### Prerequisites
- Node.js 14+
- MongoDB Atlas account or local MongoDB instance
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd backend

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd backend
Install dependencies

bash
npm install
Environment Setup

bash
cp .env.example .env
# Edit .env with your configuration
Start the server

bash
# Development mode
npm run dev

# Production mode
npm start
The server will run on http://localhost:5000

🛠️ Configuration
Environment Variables
Create a .env file in the root directory:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
MongoDB Connection
The app uses MongoDB Atlas. Update the MONGO_URI in your .env file:

env
MONGO_URI=mongodb+srv://username:password@cluster0.r7vmc.mongodb.net/your-database-name?retryWrites=true&w=majority&appName=Cluster0
📚 API Documentation
Base URL
text
http://localhost:5000/api
Company Endpoints
Method	Endpoint	Description	Request Body
GET	/api/companies	Get all companies	-
GET	/api/companies/:id	Get company by ID	-
POST	/api/companies	Create new company	JSON
PUT	/api/companies/:id	Update company	JSON
DELETE	/api/companies/:id	Delete company	-
Request Examples
Create a Company
POST /api/companies

json
{
  "name": "Tech Corp",
  "industry": "Technology",
  "location": "San Francisco, CA",
  "employees": 150,
  "foundingYear": 2015,
  "description": "A leading tech company",
  "website": "https://techcorp.com"
}
Update a Company
PUT /api/companies/:id

json
{
  "name": "Tech Corp Updated",
  "employees": 200
}
Response Format
Success Response
json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Tech Corp",
  "industry": "Technology",
  "location": "San Francisco, CA",
  "employees": 150,
  "foundingYear": 2015,
  "description": "A leading tech company",
  "website": "https://techcorp.com",
  "createdAt": "2023-10-05T12:00:00.000Z",
  "updatedAt": "2023-10-05T12:00:00.000Z"
}
Error Response
json
{
  "message": "Error message description",
  "error": "Detailed error message"
}
🗄️ Database Schema
Company Model
Field	Type	Required	Description
name	String	✅	Company name
industry	String	❌	Industry type
location	String	❌	Company location
employees	Number	❌	Number of employees (default: 0)
foundingYear	Number	❌	Year company was founded
description	String	❌	Company description
website	String	❌	Company website URL
createdAt	Date	✅	Auto-generated timestamp
updatedAt	Date	✅	Auto-updated timestamp
🏗️ Project Structure
text
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   └── companyController.js # Business logic
├── models/
│   └── Company.js         # MongoDB schema
├── routes/
│   └── companyRoutes.js   # API routes
├── .env                   # Environment variables
├── server.js              # Main application file
└── package.json
📦 Dependencies
Production Dependencies
express - Web framework

mongoose - MongoDB ODM

cors - Cross-Origin Resource Sharing

helmet - Security middleware

morgan - HTTP request logger

dotenv - Environment variables

Development Dependencies
nodemon - Auto-restart server during development

🔧 Development Scripts
json
{
  "start": "node server.js",
  "dev": "nodemon server.js"
}
🛡️ Security Features
Helmet.js - Sets various HTTP headers for security

CORS - Enables cross-origin requests

Input Validation - MongoDB validation through Mongoose

NoSQL Injection Protection - Mongoose built-in protection

🧪 Testing the API
You can test the API using tools like:

Postman

cURL

Thunder Client (VS Code extension)

Example cURL Commands
Get all companies
bash
curl http://localhost:5000/api/companies
Create a company
bash
curl -X POST http://localhost:5000/api/companies \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Company",
    "industry": "IT",
    "employees": 50
  }'
Update a company
bash
curl -X PUT http://localhost:5000/api/companies/COMPANY_ID \
  -H "Content-Type: application/json" \
  -d '{"employees": 100}'
Delete a company
bash
curl -X DELETE http://localhost:5000/api/companies/COMPANY_ID
🚢 Deployment
Local Development
bash
npm run dev
Production
bash
npm start
Environment Setup for Production
Set NODE_ENV=production

Use production MongoDB database

Configure proper CORS origins

Set secure environment variables

🤝 Error Handling
The API includes comprehensive error handling for:

Database connection errors

Invalid MongoDB IDs

Missing resources (404)

Server errors (500)

Validation errors

🔄 API Features
RESTful design - Follows REST principles

CRUD operations - Full Create, Read, Update, Delete functionality

Auto-timestamps - Automatic createdAt and updatedAt fields

Data validation - Mongoose schema validation

Error handling - Comprehensive error responses

Security headers - Helmet.js protection

📞 Support
For issues and questions:

Check the API documentation

Verify your environment variables

Ensure MongoDB connection is working

Check server logs for detailed error messages

📄 License
This project is licensed under the [Your License] - see LICENSE file for details.

text

## 📁 Additional Files

### `.env.example`
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
This clean version has:

Proper Markdown formatting

Clear section headers

Well-organized tables

Code blocks with proper syntax highlighting

Consistent spacing and structure

Easy-to-read layout



