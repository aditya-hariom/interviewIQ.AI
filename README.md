# 🚀 InterviewIQ.AI

<div align="center">

![InterviewIQ.AI Banner](https://img.shields.io/badge/InterviewIQ-AI%20Mock%20Interviews-6366f1?style=for-the-badge&logo=openai&logoColor=white)

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47a248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![OpenRouter](https://img.shields.io/badge/AI-OpenRouter%20API-7c3aed?style=flat-square)](https://openrouter.ai/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](https://opensource.org/licenses/ISC)

**Master your next tech interview with intelligent, AI-powered mock interviews and instant performance feedback.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Environment Variables](#-environment-variables) • [Project Structure](#-project-structure) • [Roadmap](#-roadmap)

</div>

---

## 📖 Overview

**InterviewIQ.AI** is a full-stack, AI-powered mock interview platform designed to help job seekers crack technical and behavioral interviews. By simulating real-world interview scenarios tailored to specific job roles, descriptions, and resumes, InterviewIQ provides real-time question generation and detailed post-interview evaluation reports.

---

## ✨ Features

- 🎯 **Tailored Interview Setup**: Customize interview sessions by job role, experience level, tech stack, and job description.
- 📄 **Resume PDF Parsing**: Upload your resume in PDF format; the backend parses your background to generate personalized questions.
- 🤖 **Interactive AI Interviewer**: Dynamic question-answer flow powered by LLM models via OpenRouter.
- 📊 **Detailed Evaluation & Feedback**: Instant scoring, identification of key strengths, improvement areas, and tailored recommendations.
- 🔐 **Secure Authentication**: JWT-based cookie authentication alongside Firebase authentication support.
- 🎨 **Modern & Fluid UI**: Built with React 19, Tailwind CSS v4, and interactive animations powered by Motion (Framer Motion).
- 🗄️ **Persistent Interview History**: Saves all interview sessions, questions, user answers, and AI feedback to MongoDB.

---

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) + React-Redux
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Animations & Icons**: [Motion](https://motion.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Auth Provider**: [Firebase](https://firebase.google.com/)

### Backend (`/server`)
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **AI Integration**: [OpenRouter API](https://openrouter.ai/)
- **File Handling & PDF Extraction**: [Multer](https://github.com/expressjs/multer) & [PDF.js](https://mozilla.github.io/pdf.js/)
- **Security & Tokens**: [JSON Web Tokens (JWT)](https://jwt.io/), [Cookie-Parser](https://github.com/expressjs/cookie-parser), [CORS](https://github.com/expressjs/cors)

---

## 📁 Project Structure

```text
interviewIQ.AI/
├── client/                     # Frontend Application (React + Vite)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Images and design assets
│   │   ├── components/         # Reusable UI components (Navbar, Footer, Step1SetUp, etc.)
│   │   ├── pages/              # Route pages (Home, Auth, InterviewPage, etc.)
│   │   ├── redux/              # Redux slices and store configuration
│   │   ├── utils/              # Helper utilities and Firebase config
│   │   ├── App.jsx             # App routes and user auth state check
│   │   ├── main.jsx            # React root entry point
│   │   └── index.css           # Global Tailwind CSS styles
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend API (Node.js + Express)
│   ├── config/                 # Database connection & token generators
│   ├── controllers/            # Route controllers (Auth, User, Interview)
│   ├── middlewares/            # Auth and upload middlewares
│   ├── models/                 # Mongoose schemas (User, Interview, etc.)
│   ├── routes/                 # Express API routes
│   ├── services/               # OpenRouter AI services
│   ├── index.js                # Server entry point
│   └── package.json
│
└── README.md                   # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/aditya-hariom/interviewIQ.AI.git
cd interviewIQ.AI
```

---

### 2. Setup Backend (`server`)

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file inside the `server/` folder:
   ```env
   PORT=8000
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   OPENROUTER_API_KEY=your_openrouter_api_key
   ```

4. Start the backend development server:
   ```bash
   npm run dev
   ```
   > Server will run at `http://localhost:8000`.

---

### 3. Setup Frontend (`client`)

1. Open a new terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file inside the `client/` folder:
   ```env
   VITE_FIREBASE_APIKEY=your_firebase_api_key
   ```

4. Start the Vite development server:
   ```bash
   npm run dev
   ```
   > Client will run at `http://localhost:5173`.

---

## 🔐 Environment Variables

### Backend (`server/.env`)
| Variable | Description |
| :--- | :--- |
| `PORT` | Port number on which the Express server runs (default: `8000`) |
| `MONGODB_URL` | MongoDB connection URI string |
| `JWT_SECRET` | Secret key used for signing and verifying JWT tokens |
| `OPENROUTER_API_KEY` | API Key from OpenRouter for generating interview questions & feedback |

### Frontend (`client/.env`)
| Variable | Description |
| :--- | :--- |
| `VITE_FIREBASE_APIKEY` | Firebase Web API key for authentication services |

---

## 🛣️ Roadmap

- [ ] 🎙️ Voice & Speech-to-Text integration for realistic spoken interviews
- [ ] 📹 Video and body language / confidence analysis
- [ ] 💻 In-browser coding editor & compiler for live coding rounds
- [ ] 📑 Downloadable PDF interview performance reports
- [ ] 📈 Interview readiness tracker and progress analytics over time

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check out the [issues page](https://github.com/aditya-hariom/interviewIQ.AI/issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/aditya-hariom">aditya-hariom</a></sub>
</div>
