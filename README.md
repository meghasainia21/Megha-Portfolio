# 🚀 Megha Sainia Portfolio Website

A full-stack MERN Portfolio Website designed to showcase my projects, technical skills, achievements, and professional profile. The application features a responsive user interface, smooth user experience, and a backend-powered contact system for handling user inquiries.

---


## ✨ Features

- Responsive Design
- Modern UI/UX
- Dark/Light Theme Toggle
- Project Showcase
- Skills Section
- Achievements Section
- About Section
- Contact Form Integration
- Backend API Integration
- Form Validation
- Resume Download Analytics
- Authentication System
- Environment Variable Support
- Scalable MERN Architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Deployment
- Render Deployment
- MongoDB Atlas

---

## 📂 Project Structure

```text
Portfolio/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── css/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── controllers/
│   │   └── contactController.js
│   │
│   ├── models/
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   └── contactRoutes.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the Backend directory:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

FRONTEND_URL=http://localhost:4000
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Megha-Portfolio/portfolio.git
```

### Move into Project Directory

```bash
cd portfolio
```

---

## Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:4000
```

---

## Backend Setup

```bash
cd Backend

npm install

npm start
```

Backend runs on:

```bash
http://localhost:5173
```

---

## API Endpoint

### Contact Form

```http
POST /api/contact
```

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

---


## 💡 Future Improvements

- Admin Dashboard
- Blog Integration
- Project Filtering

---

## 👩‍💻 Author

**Megha Sainia**

GitHub: https://github.com/meghasainia21

LinkedIn: https://www.linkedin.com/in/megha-sainia/

Portfolio: https://megha-portfolio-frontend.onrender.com

---

## 📄 License

This project is licensed under the MIT License.

Feel free to fork, modify, and use this project for learning purposes.
