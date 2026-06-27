# AiExamNotesGen

AI-powered exam notes generator that creates high-yield, revision-ready notes instantly using Google Gemini AI.

## Features
- AI-generated exam notes using Google Gemini
- Auto-generated charts and diagrams
- PDF download support
- Google Authentication via Firebase
- Credit-based system
- Stripe payment integration

## Tech Stack
- Frontend: React.js, Vite, TailwindCSS, Redux
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Auth: Firebase Google Auth
- AI: Google Gemini API
- Payment: Stripe

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/Prince-Raghav/AiExamNotesGen.git
cd AiExamNotesGen

### 2. Server Setup
cd server
npm install

Create server/.env file:
PORT=8000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_key
CLIENT_URL=http://localhost:5173

### 3. Client Setup
cd client
npm install

Add your Firebase config in client/src/utils/firebase.js

### 4. Run the project
Terminal 1 - Backend:
cd server
npm run dev

Terminal 2 - Frontend:
cd client
npm run dev

## Important
Never commit .env files to GitHub!
