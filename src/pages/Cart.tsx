import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, Copy, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  const [copied, setCopied] = useState(false);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const totalPrice = state.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const copyCartItems = () => {
    const cartText = state.items
      .map(item => `${item.name} - ${item.quantity} шт. x ${item.price}₽ = ${item.price * item.quantity}₽`)
      .join('\n');
    
    const fullText = `Мой заказ:\n\n${cartText}\n\nИтого: ${totalPrice}₽`;
    
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCheckout = () => {
    const orderText = state.items
      .map(item => `${item.name} - ${item.quantity} шт.`)
      .join('\n');
    
    const message = encodeURIComponent(`Новый заказ:\n\n${orderText}\n\nИтого: ${totalPrice}₽`);
    window.location.href = `https://t.me/al9folur?start=order_${message}`;
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Корзина пуста</h2>
          <p className="text-gray-600 mb-8">Добавьте товары из нашего каталога</p>
          <a
            href="/catalog"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Перейти в каталог
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-900">Корзина</h1>
          <button
            onClick={copyCartItems}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
            <span>{copied ? 'Скопировано!' : 'Копировать заказ'}</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {state.items.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600">{item.weight}</p>
                    <p className="text-gray-900 font-bold">{item.price}₽</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Minus className="h-5 w-5 text-gray-600" />
                      </button>
                      <span className="text-gray-900 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold text-gray-900">Итого:</span>
            <span className="text-2xl font-bold text-gray-900">{totalPrice}₽</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Оформить заказ
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;