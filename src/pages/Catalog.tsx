import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { Category, Product } from '../types';

const Catalog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') as Category | null;
  const [products, setProducts] = useState<Product[]>([]);
  const { state, dispatch } = useCart();
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [addedToCart, setAddedToCart] = useState<string | null>(null);

  const categories = [
    { id: 'green', name: 'Зеленый' },
    { id: 'white', name: 'Белый' },
    { id: 'red', name: 'Красный' },
    { id: 'light-oolong', name: 'Светлый Улун' },
    { id: 'dark-oolong', name: 'Темный Улун' },
    { id: 'shu-puerh', name: 'Шу пуэр' },
    { id: 'sheng-puerh', name: 'Шен пуэр' },
    { id: 'ceremony', name: 'Все для церемонии' },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Ошибка при получении данных о товарах:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (categoryId: string | null) => {
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = currentCategory
    ? products.filter(product => product.category === currentCategory)
    : products;

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const handleCardFlip = (productId: string) => {
    setFlippedCard(flippedCard === productId ? null : productId);
  };

  const cartCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-4xl font-bold text-gray-900">Каталог</h1>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !currentCategory
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Все
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative h-[400px] perspective-1000"
              onClick={() => handleCardFlip(product.id)}
            >
              <motion.div
                className={`w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${
                  flippedCard === product.id ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full bg-white rounded-lg shadow-md overflow-hidden backface-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{product.weight}</p>
                    <p className="text-gray-900 font-bold mb-4">{product.price}₽</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute w-full h-full bg-white rounded-lg shadow-md overflow-hidden backface-hidden rotate-y-180">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 flex-grow mb-4">
                      {product.description}
                    </p>
                    <div className="mt-auto">
                      <p className="text-gray-900 font-bold mb-4">{product.price}₽</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className={`w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2 ${
                          addedToCart === product.id ? 'add-to-cart-animation' : ''
                        }`}
                      >
                        <ShoppingCart className="h-5 w-5" />
                        {addedToCart === product.id ? 'Добавлено!' : 'В корзину'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Cart Counter */}
        <AnimatePresence>
          {cartCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg"
            >
              В корзине: {cartCount} {cartCount === 1 ? 'товар' : cartCount < 5 ? 'товара' : 'товаров'}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Catalog;