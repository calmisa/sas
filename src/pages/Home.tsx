import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Coffee, ShoppingBag } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                >
                  <span className="block">Откройте для себя</span>
                  <span className="block text-green-600">мир настоящего чая</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                >
                  Погрузитесь в многовековые традиции чайной культуры с нашей коллекцией премиальных сортов чая.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                >
                  <div className="rounded-md shadow">
                    <Link
                      to="/catalog"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                    >
                      Перейти в каталог
                    </Link>
                  </div>
                </motion.div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            alt="Чайная церемония"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Наши преимущества</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Почему выбирают нас
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Leaf className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Качественный чай</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Мы тщательно отбираем лучшие сорта чая со всего мира
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Coffee className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Чайные церемонии</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Проводим традиционные чайные церемонии
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Быстрая доставка</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Доставляем заказы в кратчайшие сроки
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;