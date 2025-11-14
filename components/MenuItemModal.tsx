import React from 'react';
import { MenuItem } from '../types';
import { CloseIcon } from './icons/CloseIcon';

const MenuItemModal: React.FC<{ item: MenuItem; onClose: () => void }> = ({ item, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="item-name"
    >
      <div
        className="bg-aurum-bg rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-sm m-auto flex flex-col items-center text-center relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full text-aurum-mid hover:text-aurum-dark hover:bg-aurum-light transition-colors"
          aria-label="Cerrar"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-48 h-48 rounded-full object-cover shadow-xl border-8 border-white"
        />
        <h2 id="item-name" className="mt-6 font-serif text-3xl text-aurum-dark">{item.name}</h2>
        <p className="mt-2 text-aurum-mid-dark text-base max-w-xs">{item.description}</p>
        <p className="mt-4 font-sans font-bold text-aurum-dark text-2xl">{item.price}</p>
      </div>
    </div>
  );
};

export default MenuItemModal;
