# Footsey ⚽ - Football Jersey Store

Footsey is a responsive e-commerce web application built with **React** and **Tailwind CSS**. It serves as a premium landing page and shopping interface for official football club jerseys.

## 🚀 Live Demo
**[https://footsey.netlify.app/]**

## ✨ Features

* **Dynamic Team Pages:** Filter products dynamically by club (Barcelona, Real Madrid, Liverpool, PSG, Bayern).
* **Immersive UI:** Team-specific stadium banners and color themes that adapt based on the selected club.
* **Smart Cart System:** * Add items to cart.
    * Increment/Decrement quantities directly from product cards or the cart page.
    * Real-time subtotal and shipping calculations.
* **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
* **Checkout Simulation:** A styled checkout page handling delivery availability.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **State Management:** React Context API (Cart Logic)
* **Icons:** Lucide React

## 📂 Project Structure

```text
FOOTSEY/
├── public/
│   ├── _redirects
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── barcelona logo.png
│   │   ├── bayern logo.png
│   │   ├── footseyhero.jpg
│   │   ├── liverpool logo.png
│   │   ├── psg logo.png
│   │   ├── react.svg
│   │   └── real madrid logo.png
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   └── Team.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
└── package-lock.json
```

---

## ⚡ Getting Started

Follow these steps to run the project locally on your machine.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/footsey.git](https://github.com/your-username/footsey.git)
    cd footsey
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the app.

## 📦 Build for Production

To create an optimized build for deployment (e.g., Netlify, Vercel):

```bash
npm run build
```
