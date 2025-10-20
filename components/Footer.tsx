import React from 'react';
import { Campaign } from '../types';

interface FooterProps {
  activeCampaign: Campaign;
}

const Footer: React.FC<FooterProps> = ({ activeCampaign }) => {
  const currentYear = new Date().getFullYear();
  const { colors } = activeCampaign;

  return (
    <footer 
      className="relative z-20 w-full py-4 bg-black/30 text-center text-gray-400 text-sm border-t"
      style={{ borderColor: colors.neonGlow }}
    >
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} Campanhas de Saúde. Todos os direitos reservados.</p>
        <p className="mt-1 opacity-80">Um projeto educacional criado com ❤️ pela Turma 231.</p>
      </div>
    </footer>
  );
};

export default Footer;
