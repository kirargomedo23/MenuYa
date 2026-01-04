import { useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { MdOutlineStorefront, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaTiktok, FaFacebookF, FaInstagram } from 'react-icons/fa';

import InputField from '../../shared/components/InputField';


const ConfigurationPage = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
    restaurantName: 'La Terraza Italiana',
    phone: '918345678',
    email: 'contacto@laterraza.com',
    address: 'Calle Principal 123, Madrid, España',
    tiktok: 'https://tiktok.com/@usuario',
    facebook: 'https://facebook.com/pagina',
    instagram: 'https://instagram.com/usuario',
  });

  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setHasChanges(true);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Configuración de Cuenta</h1>
        <p className="text-gray-600 mb-8">Gestiona la seguridad y los detalles públicos del restaurante.</p>

        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Seguridad</h2>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">Protegido</span>
          </div>


          <div className="bg-gray-50 p-4 rounded-md flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full mr-4">
                <FiLock className="text-gray-500" size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-900">Contraseña</p>
                <p className="text-sm text-gray-500">Última actualización hace 3 meses</p>
              </div>
            </div>
            <button className="text-green-500 hover:text-green-600 font-medium flex items-center">
              Cambiar
            </button>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <InputField
                label="Nueva Contraseña"
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <InputField
                label="Confirmar Contraseña"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </section>


        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Detalles del Restaurante</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-1">Nombre del Restaurante</label>
              <div className="relative">
                <MdOutlineStorefront className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <InputField
                  type="text"
                  label=''
                  id="restaurantName"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono de WhatsApp</label>
              <div className="relative">
                <MdPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <InputField
                  type="text"
                  id="phone"
                  label=''
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Dirección Física</label>
              <div className="relative">
                <MdLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <InputField
                  type="text"
                  id="address"
                  label=''
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Redes Sociales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tiktok" className="block text-sm font-medium text-gray-700 mb-1">Enlace de TikTok</label>
              <div className="relative">
                <FaTiktok className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <InputField
                  type="text"
                  label=''
                  id="tiktok"
                  name="tiktok"
                  value={formData.tiktok}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">Enlace de Facebook</label>
              <div className="relative">
                <FaFacebookF className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <InputField
                  type="text"
                  id="facebook"
                  label=''
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">Enlace de Instagram</label>
              <div className="relative">
                <FaInstagram className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <InputField
                  type="text"
                  label=''
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-sm text-gray-500">
            {hasChanges ? 'Hay cambios sin guardar' : ''}
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 focus:outline-none">
              Cancelar
            </button>
            <button className={`px-4 py-2 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${hasChanges ? 'bg-green-500 hover:bg-green-600' : 'bg-green-300 cursor-not-allowed'}`} disabled={!hasChanges}>
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default ConfigurationPage;