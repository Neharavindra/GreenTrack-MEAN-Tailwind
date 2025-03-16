# GreenTrack Frontend

## 🌱 Overview
The **GreenTrack Frontend** is an Angular-based web application that allows users to track their carbon footprint from daily activities. It provides an intuitive user interface to log activities, analyze emissions, and set eco-goals. The frontend integrates with the **GreenTrack Backend** for data storage and processing.

---

## 🚀 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/greentrack-frontend.git
cd greentrack-frontend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Configure Tailwind CSS**
Ensure that **Tailwind CSS** is set up correctly by adding it to your `angular.json` and `.postcssrc.json` files if not already configured.

### **4️⃣ Start the Application**
```sh
ng serve
```
The application will run at **http://localhost:4200**.

---

## 📁 Project Structure
```
frontend/
│── src/
│   ├── app/
│   │   ├── app-component          # Reusable UI components
│   │   ├── pages/               # Main application pages
│   │   ├── services/            # API communication services
│   │   ├── app-routing.module.ts # Routes configuration
│   │   ├── app.component.ts      # Root component
│   ├── assets/                  # Static assets like images
│   ├── styles.css                # Global styles (Tailwind)
│── angular.json                  # Angular project configuration
│── package.json                  # Project dependencies
```

---

## 📌 Features
- 📊 **Dashboard** – View carbon footprint insights & trends.
- 🔍 **Track Activities** – Log daily activities that emit carbon.
- 🎨 **Dark/Light Mode** – Switch between themes.
- ⚙️ **User Preferences** – Customize settings for a better experience.
- 📅 **Duration-based Tracking** – Measure emissions based on activity duration.

---

## 🔗 API Integration
The frontend interacts with the backend using RESTful API calls:

- **GET `/api/carbon`** – Fetch logged carbon activities.
- **POST `/api/carbon`** – Add a new activity.

---

## 🛠 Tech Stack
- **Angular 17+** - Frontend framework
- **Tailwind CSS** - Styling framework
- **RxJS** - State management
- **TypeScript** - Strongly typed JavaScript

---

## 💡 Future Enhancements
- 📱 **Mobile-friendly PWA version**.
- 🌍 **AI-powered emission reduction recommendations**.
- 📊 **Graphs & Charts for better data visualization**.

---