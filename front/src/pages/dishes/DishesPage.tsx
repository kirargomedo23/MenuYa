import { useState } from 'react';
import { MdSearch, MdAdd, MdDragIndicator, MdEdit } from 'react-icons/md';


const initialDishesData = [
  {
    id: 1,
    name: 'Hamburguesa Royal',
    status: 'visible',
    isActive: true,
    description: 'Carne angus de 200g, queso cheddar, huevo y tocino.',
    price: 'S/ 38.00',
    image: 'https://placehold.co/64x64/png?text=HR',
  },
  {
    id: 2,
    name: 'Pisco Sour Catedral',
    status: 'visible',
    isActive: true,
    description: 'Doble medida de pisco quebranta, limón, jarabe y amargo.',
    price: 'S/ 32.00',
    image: 'https://placehold.co/64x64/png?text=PSC',
  },
  {
    id: 3,
    name: 'Risotto de Hongos',
    status: 'inactivo',
    isActive: false,
    description: 'Arroz arbóreo cremoso con mix de setas silvestres.',
    price: 'S/ 45.00',
    image: 'https://placehold.co/64x64/png?text=RH',
  },
  {
    id: 4,
    name: 'Nuggets Kids',
    status: 'visible',
    isActive: true,
    description: '6 piezas de pollo crujiente con papas fritas onduladas.',
    price: 'S/ 22.00',
    image: 'https://placehold.co/64x64/png?text=NK',
  },
];

const DishesPage = () => {
  const [dishes, setDishes] = useState(initialDishesData);

  const toggleDishActive = (id: any) => {
    setDishes(dishes.map(dish =>
      dish.id === id ? { ...dish, isActive: !dish.isActive, status: !dish.isActive ? 'visible' : 'inactivo' } : dish
    ));
  };

  return (
    <div className="p-8 bg-[#F9FAFB] min-h-screen font-sans">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Platos</h1>
          <p className="text-gray-600 max-w-2xl">
            Administra los detalles de tus platillos, asigna precios en Soles y controla su visibilidad en el menú digital.
          </p>
        </div>
        <button className="bg-[#22C55E] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
          <MdAdd size={24} />
          <span>Nuevo Platillo</span>
        </button>
      </div>

      {/* --- Barra de Búsqueda --- */}
      <div className="mb-8 relative">
        <MdSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={22} />
        <input
          type="text"
          placeholder="Buscar platillo por nombre..."
          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/50 shadow-sm"
        />
      </div>

      {/* --- Lista de Platos --- */}
      <div className="space-y-4">
        {dishes.map((dish) => (
          <div key={dish.id} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between shadow-sm">

            {/* Lado Izquierdo: Icono, Imagen y Detalles */}
            <div className="flex items-center gap-4 flex-1">
              <div className="text-gray-300 cursor-grab hover:text-gray-500">
                <MdDragIndicator size={24} />
              </div>

              {/* Imagen del Platillo */}
              <img src={dish.image} alt={dish.name} className="w-16 h-16 rounded-lg object-cover border border-gray-100" />

              {/* Detalles del Platillo */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg text-gray-900">{dish.name}</h3>
                  <span className={`px-2 py-0.5 text-xs font-bold rounded-full uppercase ${dish.status === 'visible' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                    {dish.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-1">{dish.description}</p>
                <p className="font-bold text-gray-900 text-lg">Precio: {dish.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-8 ml-4">
              {/* Interruptor de Activación (Toggle Switch) */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => toggleDishActive(dish.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${dish.isActive ? 'bg-[#22C55E]' : 'bg-gray-300'
                    }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${dish.isActive ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                </button>
                <span className={`text-xs font-medium mt-1 ${dish.isActive ? 'text-green-600' : 'text-gray-400'}`}>
                  {dish.isActive ? 'Activo' : 'Inactivo'}
                </span>
              </div>

              {/* Botón de Editar */}
              <button className="flex items-center gap-2 text-gray-700 font-semibold border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <MdEdit size={18} />
                <span>Editar</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishesPage;