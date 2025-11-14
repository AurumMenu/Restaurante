import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import MenuPage from './components/MenuPage';
import LocationPage from './components/LocationPage';
import Footer from './components/Footer';

type View = 'landing' | 'menu' | 'location';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');

  const renderView = () => {
    switch (view) {
      case 'menu':
        return <MenuPage onBack={() => setView('landing')} />;
      case 'location':
        return <LocationPage onBack={() => setView('landing')} />;
      case 'landing':
      default:
        return (
          <LandingPage
            onShowMenu={() => setView('menu')}
            onShowLocation={() => setView('location')}
          />
        );
    }
  };

  const showFooter = view === 'menu' || view === 'location';

  return (
    <main className="bg-aurum-bg min-h-screen font-sans text-aurum-dark flex flex-col">
      <div className="w-full max-w-lg mx-auto flex-grow flex flex-col">
        {renderView()}
      </div>
      {showFooter && <Footer />}
    </main>
  );
};

export default App;