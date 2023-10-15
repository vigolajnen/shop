import React from 'react';
import { useFormData } from './context';
import { useForm } from 'react-hook-form';

import CustomLabelFields from '../UI/custom-fields/CustomLabelFields';
import { TEXT_ERROR_MESSAGE, classNameInput } from './StepOne';
import LinkCheck from './LinkCheck';

export default function StepTwo({ next, data, item }: any) {
  const { setFormValues } = useFormData();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'all' });

  
  const onSubmit = (values: any) => {
    // console.log(values);
    setFormValues(values);
    next();
  };
  return (
    <>
      <div className='mt-6 mb-3 sm:my-4 font-bold text-2xl sm:text-4xl text-center'>
        Оформить абонемент
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-wrap grow w-full'
      >
        <div className='mb-2 px-2 flex flex-col w-full sm:w-1/2 relative'>
          <CustomLabelFields label='Имя'>
            <input
              className={classNameInput}
              placeholder='Имя'
              type='text'
              id='firstName'
              value={data.firstName}
              readOnly
            />
          </CustomLabelFields>
        </div>

        <div className='mb-2 px-2 flex flex-col w-full sm:w-1/2 relative'>
          <CustomLabelFields label='Фамилия'>
            <>
              <input
                className={classNameInput}
                placeholder='Фамилия'
                type='text'
                id='lastName'
                {...register('lastName', {
                  required: true,
                })}
              />

              {errors.lastName && (
                <small className='absolute top-0 right-0 text-md text-mexican-red-700'>
                  {TEXT_ERROR_MESSAGE}
                </small>
              )}
            </>
          </CustomLabelFields>
        </div>

        <div className='mb-2 px-2 flex flex-col w-full relative'>
          <CustomLabelFields label='Номер телефона'>
            <input
              className={classNameInput}
              placeholder='Номер телефона'
              type='tel'
              id='phone'
              value={data.phone}
              readOnly
            />
          </CustomLabelFields>
        </div>
        {item && (
          <div
            className={`${
              item.mc ? 'hidden' : ''
            } relative flex flex-col w-full`}
          >
            <CustomLabelFields label='Выберете клуб'>
              <select
                className='block h-10 w-full p-2 flex-1 border-2 border-mischka-300 rounded-md bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                {...register('club_id', {
                  required: true,
                })}
              >
                <option disabled value=''>
                  Выберете клуб
                </option>
                {[...item.clubsForm].map((club) => (
                  <option value={club.id} key={club.address}>
                    {club.address}
                  </option>
                ))}
              </select>
            </CustomLabelFields>
          </div>
        )}

        <div className='mb-2 px-2 flex flex-col w-full relative'>
          <CustomLabelFields label='Дата рождения'>
            <>
              <input
                className={classNameInput}
                type='date'
                id='customer_birth_day'
                min='1900-01-01'
                max='2009-01-01'
                {...register('birth_day', {
                  required: true,
                })}
              />

              {errors.birth_day && (
                <small className='absolute top-0 right-0 text-md text-mexican-red-700'>
                  {TEXT_ERROR_MESSAGE}
                </small>
              )}
            </>
          </CustomLabelFields>
        </div>

        <div className='mb-1 px-2 flex flex-col w-full relative'>
          <CustomLabelFields label='Email'>
            <>
              <input
                className={classNameInput}
                placeholder='Email'
                type='text'
                id='email'
                {...register('email', {
                  required: true,
                })}
              />

              {errors.email && (
                <small className='absolute top-0 right-0 text-md text-mexican-red-700'>
                  {TEXT_ERROR_MESSAGE}
                </small>
              )}
            </>
          </CustomLabelFields>
        </div>

        <button
          type='submit'
          className='btn w-full rounded-3xl bg-curious-blue-500 text-white hover:bg-white-50 hover:text-curious-blue-500 hover:border-curious-blue-500 border-2 font-bold block p-4 my-2 mx-1 grow'
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
}
