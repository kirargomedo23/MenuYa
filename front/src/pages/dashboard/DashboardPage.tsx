 
import {  
  XAxis,  
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  MdRemoveRedEye, 
  MdTouchApp, 
  MdShoppingBag, 
  MdQrCode2,
  MdKeyboardArrowDown,
  MdCalendarToday
} from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';

import type { StatCardProps } from '../../shared/interfaces/StatCardProps';

 
const data = [
  { name: 'Lun', traffic: 100 },
  { name: 'Mar', traffic: 150 },
  { name: 'Mié', traffic: 120 },
  { name: 'Jue', traffic: 130 },
  { name: 'Vie', traffic: 180 },
  { name: 'Sáb', traffic: 140 },
  { name: 'Dom', traffic: 110 },
];


const StatCard: React.FC<StatCardProps> = ({ title, value, percentage, icon: Icon, isNegative }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-start">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-gray-900 mb-2">{value}</h3>
      <div className={`flex items-center text-sm font-bold ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
        <span>{isNegative ? '↘' : '↗'} {percentage}</span>
      </div>
    </div>
    <div className="bg-gray-50 p-3 rounded-xl text-gray-300">
      <Icon size={28} />
    </div>
  </div>
);

const DashboardPage = () => {
  return (
    <div className="p-8 bg-[#F9FAFB] min-h-screen font-sans"> 
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Resumen General</h1>
          <p className="text-gray-500">Bienvenido de nuevo. Así está rindiendo tu Linktree hoy.</p>
        </div>
         
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-gray-700 font-semibold shadow-sm hover:bg-gray-50 transition-colors">
          <MdCalendarToday className="text-gray-400" />
          <span>Últimos 7 días</span>
          <MdKeyboardArrowDown size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Grid de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Visitas Totales" 
          value="1,245" 
          percentage="+15%" 
          icon={MdRemoveRedEye} 
        />
        <StatCard 
          title="Clics en Menú" 
          value="863" 
          percentage="+8%" 
          icon={MdTouchApp} 
        />
        <StatCard 
          title="Pedidos Generados" 
          value="12.5%" 
          percentage="+2%" 
          icon={MdShoppingBag} 
        />
        <StatCard 
          title="Escaneos QR" 
          value="340" 
          percentage="-5%" 
          icon={MdQrCode2} 
          isNegative={true}
        />
      </div>
 
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Tráfico Semanal</h2>
              <p className="text-sm text-gray-500">Comparativa con la semana anterior</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <FiMoreHorizontal size={24} />
            </button>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94A3B8', fontSize: 12}} 
                  dy={10}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="traffic" 
                  stroke="#22C55E" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorTraffic)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Columna Derecha: Estado */}
        <div className="flex flex-col justify-end">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-8 bg-gray-300 rounded-sm"></div> {/* Placeholder para el icono de perfil */}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                   <div className="w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Estado Linktree</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <span className="text-green-500 font-bold">•</span> En línea <span className="mx-1">v2.4</span>
                </p>
              </div>
            </div>
            {/* Barra de estado visual */}
            <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
               <div className="h-full w-2/3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;