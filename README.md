# 🛍️ Flone — Modern E-Commerce Web Application

Flone is a modern and responsive e-commerce web application built with React.js.  
The project focuses on a clean shopping experience, reusable components, dynamic product pages, authentication, centralized state management, API integration, and scalable frontend architecture.

---

## ✨ Features

### 🏠 Home Page
- Modern e-commerce landing page
- Hero section
- Featured products
- Promotional sections
- Responsive design
- Navigation to different sections of the application

### 🛍️ Collection
- Dynamic product listing
- Responsive product grid
- Product image, category, title and price
- Product cards with hover interactions
- Wishlist UI
- Add to Cart UI
- Dynamic product routing

### 📦 Product Details
- Dynamic product details page
- Product image
- Product title
- Brand
- Category
- Price
- Discount
- Rating
- Availability
- Stock information
- Product description
- Shipping information
- Warranty information
- Return policy
- SKU
- Minimum order quantity
- Add to Cart UI
- Quantity selector UI

### 🔐 Authentication
- Login
- Register
- Authentication state management
- User hydration
- Protected routes
- Public routes

### 🧭 Routing
- React Router based navigation
- Nested routes
- Dynamic product routes
- Protected routes
- Public authentication routes
- Separate layouts for authentication and main application

### ⚡ Performance
- Lazy loading using React `lazy()`
- `Suspense` based loading states
- Component-based architecture
- Centralized Redux state management

### 📱 Responsive UI
The application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- JSX
- Tailwind CSS
- Lucide React

### State Management

- Redux
- React Redux

### Routing

- React Router

### API & Data

- Axios
- REST API
- DummyJSON Product API

### Development Tools

- Vite
- ESLint
- Prettier
- Git
- GitHub
- VS Code

---

# 🏗️ Project Architecture

The project follows a feature-based and modular architecture to keep the application scalable and maintainable.

```text
src/
│
├── app/
│   └── layout/
│       ├── AuthLayout.jsx
│       └── MainLayout.jsx
│
├── config/
│   └── api.js
│
├── features/
│   │
│   ├── auth/
│   │   ├── api/
│   │   │   └── authApi.js
│   │   │
│   │   ├── state/
│   │   │   └── authSlice.js
│   │   │
│   │   └── ui/
│   │       ├── LoginPage.jsx
│   │       └── RegisterPage.jsx
│   │
│   └── Collection/
│       ├── api/
│       │   └── productApi.js
│       │
│       ├── hooks/
│       │   └── productHook.js
│       │
│       ├── state/
│       │   └── productSlice.js
│       │
│       └── ui/
│           ├── components/
│           │   └── ProductGrid.jsx
│           │
│           └── pages/
│               ├── Collection.jsx
│               └── ProductDetails.jsx
│
├── routes/
│   ├── AppRoutes.jsx
│   │
│   └── protected/
│       ├── MainProtected.jsx
│       └── PublicProtected.jsx
│
├── shared/
│   ├── api/
│   ├── hooks/
│   ├── state/
│   │
│   └── ui/
│       ├── components/
│       │
│       └── pages/
│           ├── HomePage.jsx
│           ├── AboutPage.jsx
│           ├── Blog.jsx
│           ├── ContactPage.jsx
│           └── LoadingPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
