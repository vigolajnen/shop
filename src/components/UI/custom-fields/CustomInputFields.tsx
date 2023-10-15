import React from 'react';

export default function CustomInputFields({ ...props }) {
  return (
    <input
      {...props}
      className='block w-full flex-1 font-normal border-2 border-mako-100 focus:border-mako-500 rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
    
    />
  );
}
