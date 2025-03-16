# GreenTrack Backend

## 🌱 Overview
The **GreenTrack Backend** is a Node.js & Express-based API that helps users track their carbon footprint from daily activities. It stores data in **MongoDB** and serves as the backend for the **GreenTrack** application.

---

## 🚀 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/greentrack-backend.git
cd greentrack-backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a **.env** file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### **4️⃣ Start the Server**
```sh
npm start
```
The server will start at **http://localhost:5000**.

For development with auto-restart, use:
```sh
npm run dev
```

---

## 📁 Project Structure
```
backend/
│── config/
│   ├── db.js            # Database connection
│── models/
│   ├── CarbonData.js    # Schema for carbon footprint data
│── routes/
│   ├── carbon.js        # Carbon footprint tracking routes
│── server.js            # Main server entry point
│── .env                 # Environment variables
│── package.json         # Project dependencies
```

---

## 📌 API Endpoints

### **Carbon Footprint Routes** (`/api/carbon`)
- `POST /` → Log new carbon activity (e.g., driving, electricity use)
- `GET /` → Fetch user’s carbon footprint data

---

## 🛠 Tech Stack
- **Node.js** - Server runtime
- **Express.js** - API framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS & Body-parser** - Middleware

---

## 💡 Future Enhancements
- Integrate real-time WebSockets for IoT-based tracking.
- AI-powered suggestions for reducing carbon emissions.
- Business API for corporate sustainability tracking.

---