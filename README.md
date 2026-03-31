# 💪 FitTrack — Health & Fitness App

A web application that allows users to search for exercises by muscle group and look up nutrition information for different foods.

---

## 🚀 Features

- 🏋️ Search exercises by muscle group (chest, back, shoulders, arms, legs, cardio, core)
- 🥗 Search nutrition data for any food
- 📊 Sort results by name, equipment, target muscle, calories, and serving size
- 🔍 Live filter exercises by name
- Responsive and clean UI

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **APIs:**
  - [ExerciseDB](https://rapidapi.com/justin-tool/api/exercisedb) via RapidAPI
  - [API Ninjas Nutrition](https://api-ninjas.com/api/nutrition)

---

## 📁 Project Structure
```
health-fitness-app/
├── backend/
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── node_modules/
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── style.css
└── readme.md
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```
git clone <your-repo-url>
cd health-fitness-app
```

### 2. Install backend dependencies
```
cd backend
npm install
```

### 3. Create your `.env` file
Inside the `backend` folder, create a `.env` file and add your API keys:
```
RAPIDAPI_KEY=your_rapidapi_key_here
NINJA_API_KEY=your_ninja_api_key_here
```

### 4. Start the backend server
```
cd backend
node server.js
```
Server will run on `http://localhost:3000`

### 5. Open the frontend
Open `frontend/index.html` using **Go Live** in VS Code or any local server.

---

## 🔑 API Keys

| API | Where to get it |
|-----|----------------|
| RapidAPI (ExerciseDB) | [rapidapi.com](https://rapidapi.com) |
| API Ninjas | [api-ninjas.com](https://api-ninjas.com) |

---

