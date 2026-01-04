import React from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import type { InputFieldProps } from '../interfaces/InputFieldProps';

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    label,
    icon,
    showPasswordToggle,
    showPassword,
    onPasswordToggle,
    helpText,
    error,
    type = 'text',
    ...props
  }, ref) => {
    return (
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-semibold text-gray-700">
            {label}
          </label>
          {helpText && (
            <a href="#" className="text-sm text-primary hover:text-green-700 font-bold transition-colors">
              {helpText}
            </a>
          )}
        </div>
        <div className="relative">

          {icon && (
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={showPasswordToggle && showPassword ? 'text' : type}
            {...props}
            className={`
              w-full py-3.5 bg-gray-50 border rounded-xl 
              focus:bg-white focus:ring-2 focus:border-transparent 
              outline-none transition-all duration-200 
              font-medium text-gray-800 placeholder-gray-400
              ${icon ? 'pl-12' : 'pl-4'} 
              ${showPasswordToggle ? 'pr-12' : 'pr-4'}
              ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'}
            `}
          />


          {showPasswordToggle && onPasswordToggle && (
            <button
              type="button"
              onClick={onPasswordToggle}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors outline-none focus:text-gray-600"
            >
              {showPassword ? <MdVisibilityOff size={22} /> : <MdVisibility size={22} />}
            </button>
          )}
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
