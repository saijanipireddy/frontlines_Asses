**Company Management App**

A full-stack application for managing company information with React frontend and Node.js backend.

**🚀 Quick Start**

Prerequisites

ReactJs

Node.js

ExpressJs

MongoDB

CSS

MongoDB Atlas account

Render

npm or yarn

**Installation & Setup**

**1. Clone and setup both frontend & backend**

git clone "https://github.com/saijanipireddy/frontlines_Asses"

cd frontlines_Asses

**2. Backend Setup**

cd backend

npm install

Create .env file and add:

PORT=5000

MONGO_URI=your_mongodb_connection_string

npm run dev

Backend runs on: http://localhost:5000

**3. Frontend Setup (in new terminal)**

cd frontend

npm install

npm start

Frontend runs on: http://localhost:3000

**🔧 Backend API**

Base URL

http://localhost:5000/api

**Company Endpoints**

1) GET /api/companies - Get all companies

2) GET /api/companies/:id - Get single company

3) POST /api/companies - Create new company

4) PUT /api/companies/:id - Update company

5) DELETE /api/companies/:id - Delete company

**Example API Usage**

**Create Company:**

curl -X POST http://localhost:5000/api/companies -H "Content-Type: application/json" -d '{"name": "Tech Company", "industry": "Technology", "employees": 50}'

**Get All Companies:**

curl http://localhost:5000/api/companies

**Backend Structure**

backend/

├── config/db.js - Database connection

├── controllers/ - Business logic

├── models/Company.js - Data model

├── routes/ - API routes

└── server.js - Main server file

**🎨 Frontend Features**

View all companies

Add new companies

Edit company details

Delete companies

Responsive design

**Frontend Structure**

frontend/

├── public/

├── src/

│ ├── components/ - Reusable components

│ ├── pages/ - Main pages

│ ├── services/ - API calls

│ └── App.js - Main app component

**📊 Company Data Model**

{

"name": "Company Name",

"industry": "Industry Type",

"location": "City, Country",

"employees": 100,

"foundingYear": 2020,

"description": "Company description",

"website": "https://company.com"

}

**🛠️ Development Scripts**

**Backend Scripts**

npm start - Production

npm run dev - Development with nodemon

**Frontend Scripts**

npm start - Development server

npm run build - Production build

npm test - Run tests

**🔗 API Response Examples**

**Success Response:**

{

"_id": "12345",

"name": "Tech Corp",

"industry": "Technology",

"employees": 150,

"createdAt": "2023-10-05T12:00:00.000Z"

}

**Error Response:**

{

"message": "Company not found",

"error": "Detailed error message"

}

**🚀 Deployment**

**Backend Deployment**

Set production environment variables

Use npm start

Deploy to services like Render, Railway, or DigitalOcean

**Frontend Deployment**

Run npm run build

Deploy build folder to Render,Netlify, Vercel, or S3

**📞 Support**

**For issues:**

Check if MongoDB is connected

Verify environment variables

Check server logs for errors


MIT License - see LICENSE file for details.

