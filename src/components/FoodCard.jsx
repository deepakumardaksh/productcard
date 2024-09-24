import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CardSlices';
import { motion } from 'framer-motion';
import Modal from './Modal';

const FoodCard = ({ id, name, desc, price, img, rating, handleToast }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 300,
      },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen mx-7 m-0">
      <motion.div
        onClick={handleCardClick}
        className="w-[300px] h-[400px] p-3 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer relative"
        variants={cardVariants}
        whileHover="hover"
      >
        <div className="h-[200px] overflow-hidden">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300"
          />
        </div>
        <h2 className="font-semibold text-lg mt-2">{name}</h2>
        <p className="text-sm font-normal text-gray-700">{desc.length > 50 ? `${desc.slice(0, 50)}...` : desc}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-500 font-bold text-lg">₹{price}</span>
          <button
            onClick={() => {
              dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
              handleToast(name);
            }}
            className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300"
          >
            Add To Cart
          </button>
        </div>
      </motion.div>

      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <div>
            <img src={img} alt={name} className="w-full h-[300px] object-cover" />
            <h2 className="text-xl font-bold mt-3">{name}</h2>
            <p className="text-sm font-normal mt-2">{desc}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-green-500 text-lg">₹{price}</span>
              <button
                onClick={() => {
                  dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
                  handleToast(name);
                }}
                className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FoodCard;
