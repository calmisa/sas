import React from 'react';
import { useCart } from '../../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Корзина</h1>
      
      {state.items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Ваша корзина пуста</p>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="text-gray-500">{item.weight}</p>
                    <p className="text-gray-900 font-bold">{item.price}₽</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item })}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="text-gray-900 w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item })}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-900">Итого:</span>
              <span className="text-2xl font-bold text-gray-900">{total}₽</span>
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors">
              Оформить заказ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;