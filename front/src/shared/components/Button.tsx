import React from 'react';
import type { ButtonProps } from '../interfaces/ButtonProps';


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    icon,
    iconPosition = 'right',
    loading = false,
    children,
    disabled,
    ...props
  }, ref) => {
    const baseStyles = 'font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 outline-none focus:outline-none';

    const variantStyles = {
      primary: 'bg-primary hover:bg-green-600 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-0.5 active:translate-y-0',
      secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 shadow-md hover:shadow-lg',
      outline: 'border-2 border-primary text-primary hover:bg-green-50',
    };

    const sizeStyles = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-6 py-4 text-lg',
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${widthStyle}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        {...props}
      >
        {iconPosition === 'left' && icon && icon}
        {children}
        {iconPosition === 'right' && icon && icon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
