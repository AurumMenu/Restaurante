import React from 'react';
import { BackArrowIcon } from './icons/BackArrowIcon';

interface HeaderProps {
  title: string;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className="bg-transparent py-4 flex items-center justify-center relative px-4">
      <button
        onClick={onBack}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-aurum-light transition-colors"
        aria-label="Volver"
      >
        <BackArrowIcon className="w-6 h-6 text-aurum-dark" />
      </button>
      <h2 className="font-serif text-4xl font-bold text-aurum-dark text-center">{title}</h2>
    </header>
  );
};

export default Header;