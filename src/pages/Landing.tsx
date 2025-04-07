import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f9f5e5] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#7a4b2e] font-['Cinzel']">Chai Yun</h1>
          <div className="h-1 w-24 bg-[#7a4b2e] mx-auto mt-4 mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1547825407-2d060104b7f8"
            alt="Tea Ceremony"
            className="w-full h-48 object-cover"
          />
          <Link
            to="/home"
            className="block py-4 px-6 text-lg font-medium text-[#7a4b2e] hover:bg-[#f9f5e5] transition-colors"
          >
            Открыть чайный мир
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <a
            href="https://t.me/ChaI_Yunn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#27A7E7] text-white py-3 px-6 rounded-full hover:bg-[#229ad3] transition-colors"
          >
            <i className="fab fa-telegram text-xl"></i>
            <span>Telegram</span>
          </a>
          <a
            href="https://vk.com/chaiyun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#4C75A3] text-white py-3 px-6 rounded-full hover:bg-[#446990] transition-colors"
          >
            <i className="fab fa-vk text-xl"></i>
            <span>VKontakte</span>
          </a>
          <a
            href="https://www.instagram.com/chai_yunn_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
          >
            <i className="fab fa-instagram text-xl"></i>
            <span>Instagram</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;