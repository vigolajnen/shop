import React, { ClassAttributes, InputHTMLAttributes } from 'react';
import { FieldHookConfig, useField } from 'formik';

interface ICustomInputCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomInputCheckbox = ({
  label,
  ...props
}: ICustomInputCheckbox &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  const inputStyle = (style: string) => {
    if (meta.touched && meta.error) {
      return (style = `is-invalid ` + style);
    } else if (meta.touched && !meta.error) {
      return (style = `is-valid ` + style);
    } else {
      return style;
    }
  };
  return (
    <div className='relative flex flex-col gap-x-3 max-w-screen-sm'>
      <div className='flex gap-x-3'>
        <div className='flex h-6 items-center'>
          <input
            {...field}
            {...props}
            className='h-4 w-4 rounded border-mischka-300 text-indigo-600 focus:ring-indigo-600'
          />
        </div>
        <div className='text-sm leading-6'>
          <label className='font-medium text-gray-900'>
            {label}{' '}
            <a
              className='text-picton-blue-500'
              href='https://market.fitnesshouse.ru/documentation'
              target='_blank'
              rel='noreferrer'
            >
              Договора Оферты,
            </a>{' '}
            <a
              className='text-picton-blue-500'
              href='https://market.fitnesshouse.ru/storage/documents/pravila_cluba.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Правилами Клуба
            </a>{' '}
            <span>и даю своё согласие на</span>{' '}
            <a
              className='text-picton-blue-500'
              href='https://market.fitnesshouse.ru/storage/documents/legal_information.pdf'
              target='_blank'
              rel='noreferrer'
            >
              обработку персональных данных.
            </a>
          </label>
        </div>
      </div>

      {meta.touched && meta.error ? (
        <small className='absolute bottom-0 right-0 text-mexican-red-500'>{meta.error}</small>
      ) : null}
    </div>
  );
};

export { CustomInputCheckbox };
