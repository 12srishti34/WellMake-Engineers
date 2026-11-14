# WellMake Engineers

A full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

##  Tech Stack

### Frontend
- React.js 19
- React Router DOM
- Axios
- React Icons
- jsPDF
- jsPDF AutoTable
- PayPal React SDK

### Backend
- Node.js
- Express.js 5
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Axios
- CORS
- dotenv
- PayPal Checkout SDK

##  Key Technologies & Capabilities

- Full-stack MERN architecture
- REST API development using Express.js
- MongoDB database integration
- JWT-based authentication
- Password hashing with bcryptjs
- PayPal payment integration
- PDF generation and table export
- Excel file handling using XLSX

##  Project Structure

```text
WellMake-Engineers/
│
├── backend/
│   ├── app.js
│   ├── data/
│   ├── uploads/
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

##  Installation & Setup

### Prerequisites
- Node.js and npm
- MongoDB
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/12srishti34/WellMake-Engineers.git
cd WellMake-Engineers
```

### 2. Backend Setup

Open a terminal:

```bash
cd backend
npm install
```

Configure the required environment variables in a `.env` file. These may include MongoDB connection details, JWT configuration, and PayPal credentials.

Start the backend:

```bash
node app.js
```

### 3. Frontend Setup

Open another terminal from the project root:

```bash
cd frontend
npm install
npm start
```

The React development server will start, usually at:

```text
http://localhost:3000
```

## 🛠️ Build for Production

To create a production build of the frontend:

```bash
cd frontend
npm run build
```

##  Environment Variables

Keep sensitive configuration and API credentials in your local `.env` file.

**Never commit passwords, API keys, tokens, or other secrets to GitHub.**

##  Developer

**Srishti Chadha**

##  Repository

[WellMake Engineers – GitHub](https://github.com/12srishti34/WellMake-Engineers)

---

⭐ Thanks for visiting WellMake Engineers!
