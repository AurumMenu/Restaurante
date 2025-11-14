import React from 'react';
import Header from './Header';
import { ADDRESS } from '../constants';
import { MapPinIcon } from './icons/MapPinIcon';

const LocationPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const latitude = 4.399651;
  const longitude = -76.071655;
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es&z=16&output=embed`;

  return (
    <div className="flex flex-col flex-1">
      <Header title="Cómo Llegar" onBack={onBack} />
      <div className="flex-grow p-6 flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl text-aurum-dark">Nuestra Ubicación</h2>
        <div className="w-full aspect-square mt-6 rounded-lg overflow-hidden shadow-xl border-4 border-aurum-light">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de ĀURUM"
          ></iframe>
        </div>
        <div className="mt-8 p-4 bg-aurum-dark rounded-lg flex items-center justify-center space-x-3 shadow-lg">
          <MapPinIcon className="w-6 h-6 text-aurum-lightest" />
          <p className="font-sans text-lg font-medium text-aurum-lightest">{ADDRESS}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;