import React, { FC, InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import { IMaskInput } from 'react-imask';

interface ICustomInputPhone extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const CustomInputPhone: FC<ICustomInputPhone> = ({
  label,
  ...props
}: any) => {
  const [field, meta] = useField(props);

  const phoneMask = '+{7}(000)000-00-00';

  const inputStyle = (style: string): string => {
    if (meta.touched && meta.error) {
      return `is-invalid ${style}`;
    } else if (meta.touched && !meta.error) {
      return `is-valid ${style}`;
    } else {
      return style;
    }
  };

  return (
    <label className='mb-2 block w-full leading-6 text-gray-900'>
      <span className='text-sm font-bold'>{label}</span>

      <IMaskInput
        {...field}
        mask={phoneMask}
        {...props}
        className={inputStyle(
          'block w-full flex-1 border-2 border-mischka-300 rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6',
        )}
      />
    </label>
  );
};
