# 🚀 Personal Portfolio Website

A full-stack MERN Portfolio Website designed to showcase my projects, technical skills, achievements, and professional profile. The application features a responsive user interface, smooth user experience, and a backend-powered contact system for handling user inquiries.

---

## 🌐 Live Demo

🔗 Frontend: YOUR_FRONTEND_URL

🔗 Backend API: YOUR_BACKEND_URL

---

## ✨ Features

- Responsive Design
- Modern UI/UX
- Project Showcase
- Skills Section
- About Section
- Contact Form Integration
- Backend API Integration
- Form Validation
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
- Vercel (Frontend)
- Render / Railway (Backend)
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
│   ├── middleware/
│   │   └── errorMiddleware.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── server.js
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
PORT=5000

MONGODB_URI=your_mongodb_connection_string

EMAIL_USER=your_email

EMAIL_PASS=your_email_password

FRONTEND_URL=http://localhost:5173
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/portfolio.git
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
http://localhost:5173
```

---

## Backend Setup

```bash
cd Backend

npm install

npm run dev
```

Backend runs on:

```bash
http://localhost:5000
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

## 📸 Screenshots

### Home Page

Add screenshot here

### Projects Section

Add screenshot here

### Contact Section

Add screenshot here

---

## 💡 Future Improvements

- Admin Dashboard
- Dark/Light Theme Toggle
- Blog Integration
- Resume Download Analytics
- Project Filtering
- Authentication System

---

## 👩‍💻 Author

**Megha Sainia**

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: YOUR_LINKEDIN_URL

Portfolio: YOUR_PORTFOLIO_URL

---

## 📄 License

This project is licensed under the MIT License.

Feel free to fork, modify, and use this project for learning purposes.
