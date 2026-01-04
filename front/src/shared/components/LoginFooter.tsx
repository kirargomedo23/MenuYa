import React from 'react';

import type { LoginFooterProps } from '../interfaces/LoginFooterProps';

const LoginFooter: React.FC<LoginFooterProps> = ({
  isAuthenticated = false,
  onSignUp,
  onHelp
}) => {
  if (isAuthenticated) {
    return null;
  }

  return (
    <>
      {/* Enlace de Registro */}
      <div className="mt-10 text-center text-gray-600 font-medium text-lg">
        ¿Aún no tienes cuenta?{' '}
        <button
          onClick={onSignUp}
          className="text-[var(--color-primary-main)] font-bold hover:text-green-700 inline-flex items-center transition-colors group bg-none border-none cursor-pointer"
        >
          Registrarse
          <svg className="ml-1 group-hover:translate-x-1 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Enlace de Ayuda Inferior */}
      <div className="mt-auto pt-8 flex justify-center text-gray-500 font-medium items-center gap-2 md:absolute md:bottom-8 md:left-0 md:right-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4M12 8h.01"></path>
        </svg>
        <button
          onClick={onHelp}
          className="hover:text-gray-700 transition-colors bg-none border-none cursor-pointer"
        >
          Necesito ayuda
        </button>
      </div>
    </>
  );
};

export default LoginFooter;
