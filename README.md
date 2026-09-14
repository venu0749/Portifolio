# portifolio

# Screen Recording of Portfolio Website (Drive Link)

[Screen Recording Link](https://drive.google.com/file/d/1sCbTvWKSSbW-LZAm3uCovKypLlp_8QhD/view?usp=drive_link)

# Personal Portfolio Website with Express Backend

A responsive personal portfolio website built using React and Express.js. This project extends the Assignment 2 React Portfolio Website by integrating a Node.js/Express backend for serving project data and handling contact form submissions through REST APIs.

---

## Features

### Frontend Features

- Responsive portfolio design for mobile, tablet, and desktop
- Reusable React components
- Home, About, Projects, Contact, and 404 pages
- Dynamic project cards
- Individual project details using dynamic routing
- GitHub repository links for projects
- Skills section with reusable skill cards
- Light/Dark theme toggle
- Client-side routing using React Router
- Responsive CSS media queries

### Backend Features

- Express.js backend API
- Project data served from backend
- Single project retrieval by ID
- Contact form submission API
- Server-side validation
- JSON-based data storage
- CORS support
- Environment variable configuration using dotenv
- Global error handling middleware
- Custom JSON 404 responses

---

## Technologies Used

### Frontend

- React
- JavaScript
- JSX
- CSS
- React Router DOM
- Axios
- Vite
- HTML5

### Backend

- Node.js
- Express.js
- CORS
- Dotenv
- Nodemon

---

## Project Structure

```text
portfolio/
│
├── public/
│   └── assets/
│       └── images/
│
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SkillCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── server/
│   ├── data/
│   │   ├── projects.json
│   │   └── contacts.json
│   │
│   ├── routes/
│   │   ├── projects.js
│   │   └── contact.js
│   │
│   ├── middleware/
│   │   └── errorHandler.js
│   │
│   ├── server.js
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── package.json
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

```bash
cd portfolio
```

---

## Frontend Setup

Install frontend dependencies:

```bash
npm install
```

Install Axios:

```bash
npm install axios
```

---

## Backend Setup

Move into server folder:

```bash
cd server
```

Initialize npm:

```bash
npm init -y
```

Install backend dependencies:

```bash
npm install express cors dotenv
```

Install Nodemon:

```bash
npm install nodemon --save-dev
```

---

## Environment Variables

Create `.env`

```env
PORT=5000

CLIENT_URL=http://localhost:5173

PROJECTS_FILE=./data/projects.json

CONTACTS_FILE=./data/contacts.json
```

Create `.env.example`

```env
PORT=

CLIENT_URL=

PROJECTS_FILE=

CONTACTS_FILE=
```

---

## Running the Application

### Start Backend

```bash
cd server

npm run dev
```

Backend URL:

```text
http://localhost:5000
```

---

### Start Frontend

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Available Frontend Routes

| Route | Page |
|---------|---------|
| / | Home |
| /home | Home |
| /about | About |
| /projects | Projects |
| /projects/:projectId | Project Details |
| /contact | Contact |
| * | 404 Not Found |

---

# API Documentation

## Health Check

### Request

```http
GET /
```

### Response

```json
{
  "status": "ok"
}
```

---

## Get All Projects

### Request

```http
GET /api/projects
```

### Response

```json
[
  {
    "id": "1",
    "title": "Portfolio Website"
  }
]
```

---

## Get Single Project

### Request

```http
GET /api/projects/:id
```

### Success Response

```json
{
  "id": "1",
  "title": "Portfolio Website"
}
```

### Error Response

```json
{
  "error": "Project not found"
}
```

---

## Submit Contact Form

### Request

```http
POST /api/contact
```

### Request Body

```json
{
  "name": "Venugopal",
  "email": "venu@gmail.com",
  "message": "Hello"
}
```

### Success Response

```json
{
  "message": "Contact submitted successfully"
}
```

### Error Response

```json
{
  "error": "Invalid email format"
}
```

---

## View All Contact Submissions

### Request

```http
GET /api/contact
```

### Response

```json
[
  {
    "id": 1,
    "name": "Venugopal",
    "email": "venu@gmail.com",
    "message": "Hello"
  }
]
```

---

## Invalid Route Example

### Request

```http
GET /api/doesnotexist
```

### Response

```json
{
  "error": "Route not found"
}
```

---

# API Testing Commands (curl)

## Health Check

```bash
curl http://localhost:5000/
```

## Get All Projects

```bash
curl http://localhost:5000/api/projects
```

## Get Single Project

```bash
curl http://localhost:5000/api/projects/1
```

## Project Not Found

```bash
curl http://localhost:5000/api/projects/999
```

## Valid Contact Submission

```bash
curl -X POST http://localhost:5000/api/contact \
-H "Content-Type: application/json" \
-d '{"name":"Venu","email":"venu@gmail.com","message":"Hello"}'
```

## Invalid Email Submission

```bash
curl -X POST http://localhost:5000/api/contact \
-H "Content-Type: application/json" \
-d '{"name":"Venu","email":"venu","message":"Hello"}'
```

## View Stored Contacts

```bash
curl http://localhost:5000/api/contact
```

## Invalid Route

```bash
curl http://localhost:5000/api/doesnotexist
```

---

## Security Note

The endpoint:

```text
GET /api/contact
```

is intentionally left open without authentication for assignment evaluation purposes. In a production environment this endpoint should be protected.

---

## Screen Recording Demonstration

The screen recording demonstrates:

1. Backend server running successfully
2. Frontend application running successfully
3. Projects page loading data from backend API
4. Deep linking to a project details page
5. Successful contact form submission
6. Contact data persistence verification through API
7. Error handling when backend server is stopped
8. Recovery after backend restart

---

## Author

**Venugopala Rao Dasari**

NIT Warangal

React + Express Portfolio Website Assignment
