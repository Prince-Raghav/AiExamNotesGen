# ExamNotes AI ??

An AI-powered exam notes generator that creates high-yield, revision-ready notes instantly.

## Features
- ?? AI-generated exam notes using Google Gemini
- ?? Auto-generated charts and diagrams
- ?? PDF download support
- ?? Google Authentication
- ?? Credit-based system

## Tech Stack
- **Frontend:** React.js, Vite, TailwindCSS, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Auth:** Firebase Google Auth
- **AI:** Google Gemini API
- **Payment:** Stripe

## Setup Instructions

### 1. Clone the repository
\\\ash
git clone https://github.com/yourusername/AiExamNotesGen.git
cd AiExamNotesGen
\\\

### 2. Server Setup
\\\ash
cd server
npm install
\\\

Create \server/.env\ file:
\\\env
PORT=8000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
CLIENT_URL=http://localhost:5173
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
\\\

### 3. Client Setup
\\\ash
cd client
npm install
\\\

Create \client/src/utils/firebase.js\ with your Firebase config.

### 4. Run the project
\\\ash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
\\\

## Environment Variables
Never commit \.env\ files to GitHub!

## License
MIT
