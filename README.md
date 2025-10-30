🛒 Mock E-Commerce Cart

A simple Mock E-Commerce Cart web application built using React (Frontend) and Node.js (Backend).
It allows users to view products, add/remove items from the cart, and simulate checkout with a receipt popup.

🚀 Features
🖥️ Frontend (React + Vite)

Display products in a responsive grid layout

"Add to Cart" functionality

View and update cart items (increase/decrease quantity, remove items)

Checkout form (enter name/email)

Generates a simple receipt after checkout

FakeStore API Integration — live product data

Clean and modern UI design

⚙️ Backend (Node.js + Express)

Simple mock backend API for cart management

Handles requests for adding/removing items

Can simulate success/failure responses

Serves as a placeholder for future database integration

🧩 Tech Stack
Area	Technology
Frontend	React, Vite, CSS
Backend	Node.js, Express
API	Fake Store API

Tools	VS Code, GitHub, npm
📁 Project Structure
mock-ecom-cart/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Products.jsx
│   │   ├── CartPage.jsx
│   │   ├── api.js
│   │   ├── styles.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md

⚡ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/mohammedsohail45/mock-ecom-cart.git
cd mock-ecom-cart

2️⃣ Setup Backend
cd backend
npm install
node server.js


Backend runs on: http://localhost:5000

3️⃣ Setup Frontend
cd ../frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173


💡 Bonus Features (Implemented)

✅ Live products via Fake Store API
✅ Error handling for failed requests
✅ Responsive design for mobile & desktop

👨‍💻 Author

Mohammed Sohail
📧 Email: mohdsohail96638@gmail.com

🔗 GitHub: mohammedsohail45
