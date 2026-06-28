# 🚀 AI Exam Notes Generator

An AI-powered SaaS application that generates exam-oriented notes, revision material, diagrams, charts, and important questions in seconds using Large Language Models (Groq AI).

🌐 **Live Demo:** https://ai-exam-notes-gen.vercel.app

---

# ✨ Features

- 🤖 AI-generated exam notes
- 📚 Class-wise & Exam-wise notes
- ⚡ Quick Revision Mode
- ⭐ Priority-based subtopics
- ❓ Auto-generated Short Questions
- 📝 Auto-generated Long Questions
- 📊 AI-generated Charts
- 🔷 Mermaid Diagrams
- 📄 PDF Download
- 🔐 Google Authentication
- 💳 Credit-based usage system
- 📜 Notes History
- 📱 Responsive UI

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Redux Toolkit
- Tailwind CSS
- React Router
- React Markdown
- Recharts
- Mermaid.js

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication

## AI

- Groq API
- Llama 3.3 70B Versatile

## Authentication

- Firebase Google Authentication

## Database

- MongoDB Atlas
- Mongoose

## Deployment

- Frontend → Vercel
- Backend → Render

---

# 📸 Screenshots

### Home Page

(Add Screenshot)

### AI Generated Notes

(Add Screenshot)

### Diagram Generation

(Add Screenshot)

### Charts

(Add Screenshot)

---

# 📂 Project Structure

```
AiExamNotesGen
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   └── services
│
├── server
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── services
│   ├── utils
│   └── config
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/Prince-Raghav/AiExamNotesGen.git

cd AiExamNotesGen
```

---

## Backend Setup

```bash
cd server

npm install
```

Create `.env`

```env
PORT=8000

MONGODB_URL=your_mongodb_connection

JWT_SECRET=your_jwt_secret

GROQ_API_KEY=your_groq_api_key

STRIPE_SECRET_KEY=your_stripe_key

CLIENT_URL=http://localhost:5173
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client

npm install
```

Configure Firebase

```
client/src/utils/firebase.js
```

Run Frontend

```bash
npm run dev
```

---

# 🚀 Deployment

## Frontend

Vercel

## Backend

Render

---

# 🔐 Environment Variables

### Server

```env
PORT=

MONGODB_URL=

JWT_SECRET=

GROQ_API_KEY=

STRIPE_SECRET_KEY=

CLIENT_URL=
```

---

# 📌 Future Improvements

- AI Flashcards
- AI Quiz Generator
- Voice Notes
- Multi-language Support
- Dark Mode
- Admin Dashboard
- Note Sharing
- AI Study Planner

---

# 💡 Why This Project?

Instead of asking an AI chatbot repeatedly for notes, students can generate:

- Structured exam notes
- Revision sheets
- Important questions
- Diagrams
- Charts
- Downloadable PDFs

All in a single click with a dedicated interface designed for exam preparation.

---

# 👨‍💻 Author

**Prince Raghav**

GitHub

https://github.com/Prince-Raghav

LinkedIn

(Add your LinkedIn profile)

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

It motivates me to build more open-source AI projects.

---

# 📄 License

This project is licensed under the MIT License.
