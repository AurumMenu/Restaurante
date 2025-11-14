import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { ADDRESS, INSTAGRAM_LINK, WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-aurum-dark text-aurum-lightest text-center py-8 px-4">
      <h3 className="font-serif text-3xl">Contáctenos</h3>
      <div className="flex justify-center space-x-6 my-4">
        <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-aurum-lightest hover:text-aurum-light transition-colors">
          <InstagramIcon className="w-8 h-8" />
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-aurum-lightest hover:text-aurum-light transition-colors">
          <WhatsappIcon className="w-8 h-8" />
        </a>
      </div>
      <p className="text-sm font-sans">{ADDRESS}</p>
    </footer>
  );
};

export default Footer;
