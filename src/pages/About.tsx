import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">О нас</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы - команда энтузиастов, объединенных страстью к чайной культуре и стремлением
            поделиться этим прекрасным напитком с вами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Качество</h3>
            <p className="text-gray-600">
              Мы лично отбираем лучшие сорта чая у проверенных поставщиков,
              гарантируя высочайшее качество каждого продукта.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Опыт</h3>
            <p className="text-gray-600">
              Наша команда состоит из опытных чайных мастеров, готовых поделиться
              своими знаниями и помочь вам выбрать идеальный чай.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Традиции</h3>
            <p className="text-gray-600">
              Мы чтим и продолжаем многовековые традиции чайной культуры,
              привнося их в современный мир.
            </p>
          </motion.div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Наша история</h2>
          <p className="text-gray-600 mb-4">
            История нашей компании началась с простой идеи - сделать качественный чай
            доступным для каждого. Мы начали как небольшой магазин, но благодаря нашей
            страсти к чаю и стремлению к совершенству, выросли в то, чем являемся сегодня.
          </p>
          <p className="text-gray-600">
            Сегодня мы продолжаем развиваться, изучая новые сорта чая и совершенствуя
            наши услуги, чтобы делиться с вами только лучшим.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Наша миссия</h2>
          <p className="text-gray-600">
            Наша миссия - не просто продавать чай, а создавать культуру его потребления,
            делиться знаниями и помогать каждому найти свой идеальный вкус. Мы стремимся
            сделать высококачественный чай доступным для всех, кто ценит настоящий вкус
            и заботится о своем здоровье.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;