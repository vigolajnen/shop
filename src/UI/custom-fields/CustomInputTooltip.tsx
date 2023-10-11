import React, { ClassAttributes, InputHTMLAttributes } from 'react';
import { FieldHookConfig, useField } from 'formik';
import SvgTooltip from '../../components/icons/Tooltip';

interface ICustomInputTooltip extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  textTooltip?: string;
  id?: string;
}

const CustomInputTooltip = ({
  label,
  textTooltip,
  id,
  ...props
}: ICustomInputTooltip &
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
    <>
      <div className='form__item mb-1 w-full'>
        <div className='flex px-2 text-sm font-bold leading-6 text-gray-900'>
          <label className='mb-1' htmlFor={id}>
            <span className='text-sm font-bold'>{label}</span>
          </label>
          <div className='relative inline-flex flex-col ml-1 mt-0 items-center group'>
            <SvgTooltip width={18} height={18} />
            <div className='absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex'>
              <span className='relative font-medium z-10 p-2 text-md leading-none text-white whitespace-no-wrap bg-curious-blue-500 shadow-lg rounded-md w-60 max-w-full text-center'>
                {textTooltip}
              </span>
            </div>
          </div>
        </div>
        <input
          {...field}
          {...props}
          id={id}
          className={inputStyle(
            'form-control h-10 w-full block flex-1 border-2 border-mischka-300 rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6',
          )}
        />
        <span className='hidden'>{textTooltip}</span>
      </div>

      {meta.touched && meta.error ? (
        <small className='absolute top-0 right-0 text-rose-500'>
          {meta.error}
        </small>
      ) : null}
    </>
  );
};

export { CustomInputTooltip };
