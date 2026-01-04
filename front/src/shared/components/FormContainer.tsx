import React from 'react';
import type { FormContainerProps } from '../interfaces/FormContainerProps';



const FormContainer: React.FC<FormContainerProps> = ({
  title,
  subtitle,
  children,
  onSubmit
}) => {
  return (
    <div className="max-w-md mx-auto w-full">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        <p className="text-gray-500 text-lg">{subtitle}</p>
      </div>

      <form className="space-y-6" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default FormContainer;
