import React from 'react';

interface LandingPageProps {
  onShowMenu: () => void;
  onShowLocation: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShowMenu, onShowLocation }) => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen text-center py-12 px-4">
      <div className="w-full"></div> {/* Spacer for top */}
      
      <div>
        <h1 className="font-serif text-8xl md:text-9xl text-aurum-dark font-bold tracking-wider">ĀURUM</h1>
        <p className="text-aurum-mid-dark mt-2 text-xl font-medium">Cocina de Autor</p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <button
          onClick={onShowMenu}
          className="w-full bg-aurum-dark text-aurum-lightest py-4 rounded-xl shadow-lg text-lg font-semibold tracking-wide transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-aurum-mid focus:ring-opacity-50 hover:bg-aurum-mid-dark"
        >
          Menú
        </button>
        <button
          onClick={onShowLocation}
          className="w-full bg-transparent border-2 border-aurum-dark text-aurum-dark py-4 rounded-xl shadow-md text-lg font-semibold tracking-wide transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-aurum-dark hover:text-aurum-lightest focus:outline-none focus:ring-2 focus:ring-aurum-dark focus:ring-opacity-50"
        >
          Cómo Llegar
        </button>
      </div>
    </div>
  );
};

export default LandingPage;