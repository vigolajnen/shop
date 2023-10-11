import React from 'react';

export default function CustomInputFields({ ...props }) {
  return (
    <input
      {...props}
      className='block flex-1 border-2 border-blue rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
    
    />
  );
}
