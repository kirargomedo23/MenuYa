import type { NavItemProps } from "../interfaces/NavItemProps";



const NavItem: React.FC<NavItemProps> = ({ icon, text, active, badge, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors group ${active
          ? 'bg-green-50 text-green-700 font-semibold'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{text}</span>
      </div>
      {badge && (
        <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}

export default NavItem;