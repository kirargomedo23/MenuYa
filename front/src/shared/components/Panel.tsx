import React from 'react';

import type { PanelProps } from '../interfaces/PanelProps';

const Panel: React.FC<PanelProps> = ({ side, children }) => {
  if (side === 'left') {
    return (
      <div className="md:w-1/2 bg-primary-dark text-white p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-green-900/30 to-transparent pointer-events-none"></div>
        <div className="z-10 relative">{children}</div>
      </div>
    );
  }

  return (
    <div className="md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center relative">
      <div className="z-10 relative">{children}</div>
    </div>
  );
};

export default Panel;
