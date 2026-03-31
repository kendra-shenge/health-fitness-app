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

## ⚙️ How to Run Locally

### 1. Clone the repository
```
git clone https://github.com/kendra-shenge/health-fitness-app.git
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

## 🌐 Deployment to Web Servers

### Server Details
| Server | Username | IP Address |
|--------|----------|------------|
| web-01 | ubuntu | 44.201.204.119 |
| web-02 | ubuntu | 3.91.200.7 |
| lb-01 (Load Balancer) | ubuntu | 35.171.3.130 |

### 1. SSH into your web server
```
ssh ubuntu@44.201.204.119
```

### 2. Install Node.js on the server
```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 3. Clone the repository on the server
```
git clone https://github.com/kendra-shenge/health-fitness-app.git
cd health-fitness-app/backend
```

### 4. Install dependencies
```
npm install
```

### 5. Create `.env` file on the server
```
nano .env
```
Add your API keys:
```
RAPIDAPI_KEY=your_rapidapi_key_here
NINJA_API_KEY=your_ninja_api_key_here
```

### 6. Start the server with PM2
```
sudo npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup
```

### 7. Access via Load Balancer
Once both web servers are running, access the app at:
```
http://35.171.3.130
```

---

## 🔑 API Keys

| API | Documentation | Where to get keys |
|-----|--------------|-------------------|
| ExerciseDB (RapidAPI) | [docs](https://rapidapi.com/justin-tool/api/exercisedb) | [rapidapi.com](https://rapidapi.com) |
| API Ninjas Nutrition | [docs](https://api-ninjas.com/api/nutrition) | [api-ninjas.com](https://api-ninjas.com) |

---

## 😓 Challenges & Solutions

- **Nutritionix API discontinued free tier** — Switched to API Ninjas Nutrition API which offers a free tier with reliable data.
- **CORS errors** — Added the `cors` npm package to the Express backend to allow frontend requests.
- **Environment variables** — Used `dotenv` package to securely manage API keys without exposing them in the codebase.
- **File protocol blocking fetch requests** — Had to use a local server (Go Live) instead of opening HTML directly in the browser.

---

## 🙏 Credits

- [ExerciseDB by Justin](https://rapidapi.com/justin-tool/api/exercisedb) — Exercise data API
- [API Ninjas](https://api-ninjas.com) — Nutrition data API
- [Express.js](https://expressjs.com) — Backend framework
- [Axios](https://axios-http.com) — HTTP client for API requests
- [dotenv](https://www.npmjs.com/package/dotenv) — Environment variable management
- [cors](https://www.npmjs.com/package/cors) — Cross-origin resource sharing middleware

---

## 👩‍💻 Author

**Kendra Shenge**
- GitHub: [kendra-shenge](https://github.com/kendra-shenge)
