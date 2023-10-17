import React, { FC } from 'react';
import { useFormData } from './context';
import { useForm } from 'react-hook-form';

import InputMask from 'react-input-mask';
import CustomLabelFields from '../UI/custom-fields/CustomLabelFields';
import LinkCheck from './LinkCheck';
import { checkPhone } from '../../utils';

// const isNotFilledTel = (v: string) =>
//   v && v.indexOf('_') === -1 ? undefined : 'Phone number is required.';

const isNotFilledTel = (v: string) => {
  return v && v.indexOf('_') === -1 && checkPhone(v) ? undefined : 'Phone number is required.';
};
  

export const TEXT_ERROR_MESSAGE = 'Заполните поле';

//css
export const classNameInput: string =
  'block h-11 w-full flex-1 font-normal border-2 border-mako-100 focus:border-mako-500 rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6';

interface StepOneProps {
  next: any;
  setData: (data: any) => void;
}

const StepOne: FC<StepOneProps> = ({ next, setData }) => {
  const { setFormValues } = useFormData();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'all' });

  const onSubmit = (values: any) => {
    setFormValues(values);
    setData(values);
    next();
  };
  return (
    <>
      <div className='mt-6 mb-3 sm:my-4 font-bold text-2xl sm:text-4xl text-center'>
        Оформить абонемент
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col grow w-full'
      >
        <div className='mb-2 px-2 flex flex-col w-full'>
          <CustomLabelFields label='Имя'>
            <>
              <input
                className={classNameInput}
                placeholder='Имя'
                type='text'
                id='firstName'
                {...register('firstName', {
                  required: true,
                })}
              />

              {errors.firstName && (
                <small className='absolute top-0 right-0 text-md text-mexican-red-700'>
                  {TEXT_ERROR_MESSAGE}
                </small>
              )}
            </>
          </CustomLabelFields>
        </div>

        <div className='mb-2 px-2 flex flex-col w-full'>
          <CustomLabelFields label='Номер телефона'>
            <>
              <InputMask
                id='phone'
                className={classNameInput}
                mask='+7(999) 999-99-99'
                placeholder='+7(999) 999-99-99'
                alwaysShowMask
                {...register('phone', {
                  validate: {
                    inputTelRequired: isNotFilledTel,
                  },
                })}
              />
              {errors.phone && (
                <small className='absolute top-0 right-0 text-md text-mexican-red-700'>
                  {TEXT_ERROR_MESSAGE}
                </small>
              )}
            </>
          </CustomLabelFields>
        </div>

        <button
          type='submit'
          className='btn w-full rounded-3xl bg-curious-blue-500 text-white hover:bg-white-50 hover:text-curious-blue-500 hover:border-curious-blue-500 border-2 font-bold block p-4 mt-6 my-4 mx-1 grow'
        >
          Далее
        </button>
        <div>
          <div className='relative flex flex-col gap-x-3 max-w-screen-sm'>
            <label className='flex gap-x-3 pb-3 xl:pb-5'>
              <span className='flex h-6 items-center'>
                <input
                  className={classNameInput}
                  type='checkbox'
                  {...register('isCheck', {
                    required: true,
                  })}
                />
              </span>
              <LinkCheck />
            </label>

            {errors.isCheck && (
              <small className='absolute bottom-0 right-0 text-md text-mexican-red-700'>
                {TEXT_ERROR_MESSAGE}
              </small>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default StepOne;
