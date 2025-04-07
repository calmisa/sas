import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home, Grid, Info } from 'lucide-react';
import { CartProvider } from './context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';

// Import pages
import Landing from './pages/Landing';
import HomePage from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Cart from './pages/Cart';

function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 pb-16 sm:pb-0">
      {/* Desktop Navigation */}
      <nav className="bg-white shadow-lg hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/home" className="flex items-center">
                <span className="text-xl font-bold text-gray-800">Chai Yun</span>
              </Link>
              <div className="ml-6 flex space-x-8">
                <Link to="/home" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                  Главная
                </Link>
                <Link to="/catalog" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                  Каталог
                </Link>
                <Link to="/about" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                  О нас
                </Link>
              </div>
            </div>
            <Link to="/cart" className="flex items-center">
              <ShoppingCart className="h-6 w-6 text-gray-900 hover:text-green-600" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg sm:hidden z-50">
        <div className="flex justify-around items-center h-16">
          <Link 
            to="/home" 
            className={`flex flex-col items-center space-y-1 px-3 py-2 ${
              location.pathname === '/home' ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs">Главная</span>
          </Link>
          <Link 
            to="/catalog"
            className={`flex flex-col items-center space-y-1 px-3 py-2 ${
              location.pathname === '/catalog' ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            <Grid className="h-6 w-6" />
            <span className="text-xs">Каталог</span>
          </Link>
          <Link 
            to="/about"
            className={`flex flex-col items-center space-y-1 px-3 py-2 ${
              location.pathname === '/about' ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            <Info className="h-6 w-6" />
            <span className="text-xs">О нас</span>
          </Link>
          <Link 
            to="/cart"
            className={`flex flex-col items-center space-y-1 px-3 py-2 ${
              location.pathname === '/cart' ? 'text-green-600' : 'text-gray-600'
            }`}
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xs">Корзина</span>
          </Link>
        </div>
      </nav>

      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-sm">
              © 2024 Chai Yun. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a href="https://t.me/ChaI_Yunn" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Telegram</span>
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://vk.com/chaiyun" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">VKontakte</span>
                <i className="fab fa-vk"></i>
              </a>
              <a href="https://www.instagram.com/chai_yunn_" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;