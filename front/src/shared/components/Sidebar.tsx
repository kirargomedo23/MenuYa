import React, { useState } from 'react';
import { RiLeafFill } from 'react-icons/ri';
import {
  MdDashboard, MdRestaurantMenu, MdSettings,
  MdLogout
} from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate, Outlet } from 'react-router-dom';
import NavItem from './NavItem';


const Sidebar: React.FC<any> = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const navigate = useNavigate();

  const handleMenuClick = (menu: string, path: string) => {
    setActiveMenu(menu);
    navigate(path);
  };

  return (
    <div className="flex h-screen bg-[#F9FAFB] font-sans">

      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
        <div>
          <div className="p-6">
            <div className="flex items-center gap-2 font-bold text-xl text-gray-800 mb-1">
              <div className="bg-[#C6F16D] text-[#0A2A12] p-1.5 rounded-full flex items-center justify-center">
                <RiLeafFill size={16} />
              </div>
              Green Bites
            </div>
            <p className="text-sm text-gray-500">admin@greenbites.com</p>
          </div>

          <nav className="mt-4 px-4 space-y-1">
            <NavItem
              icon={<MdDashboard size={20} />}
              text="Dashboard"
              active={activeMenu === 'Dashboard'}
              onClick={() => handleMenuClick('Dashboard', '/dashboard')}
            />

            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-6 mb-2 px-2">Menú Digital</div>
            <NavItem
              icon={<BiSolidCategory size={20} />}
              text="Categorías"
              active={activeMenu === 'Categorías'}
              onClick={() => handleMenuClick('Categorías', '/categories')}  
            />
            <NavItem
              icon={<MdRestaurantMenu size={20} />}
              text="Platos"
              active={activeMenu === 'Platos'}
              onClick={() => handleMenuClick('Platos', '/dishes')}  
            />

            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-6 mb-2 px-2">Operaciones</div>
            <NavItem
              icon={<MdSettings size={20} />}
              text="Configuración"
              active={activeMenu === 'Configuración'}
              onClick={() => handleMenuClick('Configuración', '/configuration')}
            />
          </nav>
        </div>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 w-full p-2 rounded-lg transition-colors cursor-pointer">
            <MdLogout size={20} />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>


      {/* --- CONTENIDO PRINCIPAL (Página de Categorías en Blanco) --- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 py-4 px-8 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span className="hover:text-gray-700 cursor-pointer">Inicio</span> / <span className="font-medium text-gray-900">{activeMenu}</span>
          </div>

          {/* Acciones Derecha */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors">
              <FiExternalLink size={16} />
              Ver menú en vivo
            </button>
          </div>
        </header>

        {/* Área de Contenido */}
        <div className="flex-1 overflow-y-auto p-8"> 
          <Outlet /> 
        </div>
 
      </main>
    </div>
  );
};

export default Sidebar;




