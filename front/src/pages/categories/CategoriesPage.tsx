
import { MdSearch, MdAdd, MdDragIndicator, MdEdit, MdDeleteOutline, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { IoRestaurantOutline } from 'react-icons/io5';


const categoriesData = [
  {
    id: 1,
    name: 'Entrantes',
    subtitle: 'Visible en menú principal',
    status: 'Activo',
    items: 8,
    image: 'https://placehold.co/48x48/png?text=E',
  },
  {
    id: 2,
    name: 'Platos Fuertes',
    subtitle: 'Destacado',
    status: 'Activo',
    items: 15,
    image: 'https://placehold.co/48x48/png?text=PF',
  },
  {
    id: 3,
    name: 'Bebidas',
    subtitle: 'Con alcohol y sin alcohol',
    status: 'Activo',
    items: 10,
    image: 'https://placehold.co/48x48/png?text=B',
  },
  {
    id: 4,
    name: 'Postres',
    subtitle: 'Temporada de verano',
    status: 'Inactivo',
    items: 4,
    image: 'https://placehold.co/48x48/png?text=P',
  },
  {
    id: 5,
    name: 'Promociones',
    subtitle: 'Especiales fin de semana',
    status: 'Activo',
    items: 2,
    image: 'https://placehold.co/48x48/png?text=Pro',
  },
];

const CategoriesPage = () => {
  return (
    <div className="p-8 bg-[#F9FAFB] min-h-screen font-sans">

      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Categorías del Menú</h1>
          <p className="text-gray-500">
            Organiza las secciones de tu carta digital. Arrastra las categorías para cambiar el orden en que las ven tus clientes.
          </p>
        </div>
        {/* Botón de Añadir Nueva Categoría */}
        <button className="bg-[#22C55E] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
          <MdAdd size={24} />
          <span>Añadir Nueva</span>
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        {/* Campo de Búsqueda */}
        <div className="relative flex-1">
          <MdSearch className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar categoría..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/*   Total Categorías */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center gap-4 flex-1 shadow-sm">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">TOTAL CATEGORÍAS</p>
            <p className="text-3xl font-bold text-gray-900">8</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg ml-auto">
            <BiSolidCategoryAlt className="text-blue-600" size={24} />
          </div>
        </div>

        {/*   Platos Activos */}
        <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center gap-4 flex-1 shadow-sm">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">PLATOS ACTIVOS</p>
            <p className="text-3xl font-bold text-gray-900">42</p>
          </div>
          <div className="bg-green-100 p-3 rounded-lg ml-auto">
            <IoRestaurantOutline className="text-green-600" size={24} />
          </div>
        </div>
      </div>


      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {/* Encabezado de la Tabla */}
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-500 uppercase tracking-wider">
          <div className="col-span-1"></div>
          <div className="col-span-4">NOMBRE DE CATEGORÍA</div>
          <div className="col-span-2">ESTADO</div>
          <div className="col-span-2">PLATOS</div>
          <div className="col-span-3 text-right">ACCIONES</div>
        </div>

        {/* Filas de la Tabla */}
        <div>
          {categoriesData.map((category) => (
            <div key={category.id} className="grid grid-cols-12 gap-4 p-4 items-center border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors group">
              <div className="col-span-1 text-gray-400 cursor-grab hover:text-gray-600">
                <MdDragIndicator size={20} />
              </div>

              {/* Información de la Categoría */}
              <div className="col-span-4 flex items-center gap-3">
                <img src={category.image} alt={category.name} className="w-12 h-12 rounded-lg object-cover border border-gray-200" />
                <div>
                  <p className="font-bold text-gray-900">{category.name}</p>
                  <p className="text-sm text-gray-500">{category.subtitle}</p>
                </div>
              </div>

              {/* Estado */}
              <div className="col-span-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                  ${category.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  <span className={`w-1.5 h-1.5 mr-1.5 rounded-full ${category.status === 'Activo' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                  {category.status}
                </span>
              </div>

              {/* Cantidad de Platos y Barra de Progreso Visual */}
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{category.items}</span>
                  <span className="text-sm text-gray-500">items</span>
                </div>
                <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden mt-2">
                  <div
                    className={`h-full ${category.status === 'Activo' ? 'bg-green-500' : 'bg-gray-300'}`}
                    style={{ width: `${(category.items / 20) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="col-span-3 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="cursor-pointer text-gray-500 hover:text-gray-700 flex items-center gap-1 text-sm font-medium transition-colors">
                  <MdEdit size={18} />
                  Editar
                </button>
                <button className="cursor-pointer text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-medium transition-colors">
                  <MdDeleteOutline size={18} />
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Paginación del Pie de Página --- */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          Mostrando <span className="font-medium text-gray-900">1–5</span> de <span className="font-medium text-gray-900">8</span> categorías
        </p>
        <div className="flex gap-2">
          <button className="p-2 border border-gray-300 bg-white rounded-md text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            <MdChevronLeft size={20} />
          </button>
          <button className="p-2 border border-gray-300 bg-white rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
            <MdChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;