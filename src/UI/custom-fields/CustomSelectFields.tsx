import React, {
  ClassAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
} from 'react';
import { FieldHookConfig, useField } from 'formik';

interface ICustomSelectFields extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CustomSelectFields = ({
  label,
  ...props
}: ICustomSelectFields &
  SelectHTMLAttributes<HTMLSelectElement> &
  ClassAttributes<HTMLSelectElement> &
  FieldHookConfig<string>): JSX.Element => {
  const [field, meta] = useField(props);

  const inputStyle = (style: string): string => {
    if (meta.touched && meta.error) {
      return (style = `is-invalid ` + style);
    } else if (meta.touched && !meta.error) {
      return (style = `is-valid ` + style);
    } else {
      return style;
    }
  };

  
                  
  return (
    <>
      <label className='mb-2 block px-2 w-full text-sm  leading-6 text-gray-900'>
        <span className='mb-1 block font-bold'>{label}</span>
        <select
          {...field}
          {...props}
          className={inputStyle('block h-10 w-full p-2 flex-1 border-2 border-mischka-300 rounded-md bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6')}
        />
        {/* {meta.touched && meta.error ? (
          <p className='is-invalid'>{meta.error}</p>
        ) : null} */}
      </label>
    </>
  );
};

export { CustomSelectFields };
