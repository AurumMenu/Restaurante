import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';
import Header from './Header';
import MenuItemModal from './MenuItemModal';

const MenuItemCard: React.FC<{ item: MenuItem; onClick: () => void; }> = ({ item, onClick }) => (
    <div
        className="bg-white rounded-xl shadow-md p-3 flex flex-col items-center h-full cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
        onClick={onClick}
        role="button"
        aria-label={`Ver detalles de ${item.name}`}
    >
        <img src={item.imageUrl} alt={item.name} className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-aurum-light" />
        <div className="text-center mt-3 flex flex-col flex-grow">
            <h3 className="font-serif text-lg text-aurum-dark">{item.name}</h3>
            <p className="mt-1 text-aurum-mid-dark text-xs px-1 flex-grow">{item.description}</p>
            <p className="mt-2 font-sans font-semibold text-aurum-dark text-sm">{item.price}</p>
        </div>
    </div>
);


const MenuPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const selectedCategory = MENU_DATA.find(cat => cat.id === activeCategory);

  return (
    <>
      <div className="flex flex-col flex-1">
        <Header title="ĀURUM" onBack={onBack} />
        
        <nav className="sticky top-0 bg-aurum-bg/80 backdrop-blur-sm z-10 shadow-sm">
          <div className="flex flex-wrap justify-center items-center gap-2 p-2">
            {MENU_DATA.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-aurum-mid focus:ring-opacity-50 ${
                  activeCategory === category.id
                    ? 'bg-aurum-dark text-aurum-lightest shadow-md'
                    : 'text-aurum-mid-dark hover:bg-aurum-light'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex-grow pt-4 p-2">
          {selectedCategory && (
            <div className="grid grid-cols-2 gap-3">
              {selectedCategory.items.map(item => (
                <MenuItemCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
              ))}
            </div>
          )}
        </div>
      </div>
      {selectedItem && <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </>
  );
};

export default MenuPage;