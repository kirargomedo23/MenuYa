import React from 'react';
import { RiLeafFill } from 'react-icons/ri';

const Logo: React.FC<any> = () => {

    return (
        <div className="flex items-center gap-3 font-bold z-10 relative">
            <div className={`bg-primary-lighter text-primary-dark rounded-full flex items-center justify-center shadow-lg shadow-green-900/20 p-1 text-lg`}>
            </div>
            <RiLeafFill size={20} />
            <span className='tracking-tight text-xl'>  MenuLink</span>
        </div>
    );
};

export default Logo;
