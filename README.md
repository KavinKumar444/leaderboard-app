# 🏆 Leaderboard App

A full-stack Leaderboard web application where users can register and claim random points daily. Points are ranked in real-time on a leaderboard.

---

## 🚀 Tech Stack

### 🧠 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- RESTful APIs
- CORS, dotenv, nodemon

### 🎨 Frontend
- React.js
- Axios
- Tailwind CSS
- React Toastify

---

## 📸 Features

- ✨ Add New User
- 🎲 Claim Random Points (1–100/day)
- 🥇 Real-Time Leaderboard
- 📜 View Claim History
- 🔄 Dynamic Ranking Updates

---

## 📂 Folder Structure

/leaderboard-project
├── client/ # React Frontend
│ └── src/
├── backend/ # Node.js API Server
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ └── server.js

---

## ⚙️ Environment Variables

Create `.env` in backend root:

PORT=5000
MONGO_URI=mongodb+srv://kavinkumarp444:Kavin444@cluster.mongodb.net/leaderboard

---

## 🛠️ Setup Instructions

### 🔧 Backend

```bash
cd backend
npm install
npm run dev

### 💻 Frontend

---bash
cd client
npm install
npm start

✅ API Endpoints
User
POST /api/users → Create new user

GET /api/users → Get all users

Claim
POST /api/claim/:userId → Claim daily points

GET /api/claim/history/:userId → Claim history

GET /api/leaderboard → Get leaderboard rankings

📸 Screenshots:<img width="1886" height="954" alt="screenshot-leaderboard" src="https://github.com/user-attachments/assets/d06b6a51-6955-40eb-9b44-d278fd2e295e" />

