import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import * as Yup from 'yup';
import 'yup-phone-lite';

import './styles.css';

import { subscriptionData } from '../tariffs/data/constants';
import CustomLabelFields from '../../UI/custom-fields/CustomLabelFields';
import { CustomSelectFields } from '../../UI/custom-fields/CustomSelectFields';
import { CustomInputTooltip } from '../../UI/custom-fields/CustomInputTooltip';
import { CustomInputCheckbox } from '../../UI/custom-fields/CustomInputCheckbox';
import { CustomInputPhone } from '../../UI/custom-fields/CustomInputPhone';

export default function FormStepFormik({ item }: any) {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    birth_day: '',
    phone: '',
    email: '',
    club_id: '',
  });

  const phoneWithoutFormatting = (str: string) => {
    return str
      .replace(/[^0-9]/g, '')
      .slice(1)
      .trim();
  };

  const dataTariff = {
    customer: {
      first_name: data.first_name,
      last_name: data.last_name,
      birth_day: data.birth_day,
      phone: phoneWithoutFormatting(data.phone),
      email: data.email,
    },
    products: [
      {
        name: item.product.product_name,
        price: item.product.product_price,
        product_id: data.club_id,
      },
      {
        name: subscriptionData.name,
        price: subscriptionData.price,
        product_id: '',
      },
    ],
    recurrentable: true,
  };

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = () => {
    console.log('form submitted', dataTariff);
  };

  const handelNextStep = (newData: any, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest();
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handelPrevStep = (newData: any) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const stepOneValidationScheme = Yup.object({
    first_name: Yup.string().required('Введите ваше имя'),
    phone: Yup.string()
      .phone('RU', 'Укажите номер телефона')
      .min(11, 'Укажите корректный номер телефона')
      .required('Укажите номер телефона'),
  });

  const StepOne = (props: any) => {
    const handelonSubmit = (values: any) => {
      props.next(values);
    };
    return (
      <>
        <Formik
          validationSchema={stepOneValidationScheme}
          initialValues={props.data}
          onSubmit={handelonSubmit}
        >
          {() => (
            <Form>
              <div className='mb-2 flex flex-col w-full relative'>
                <CustomLabelFields htmlFor='first_name'>Имя</CustomLabelFields>
                <Field
                  id='first_name'
                  name='first_name'
                  placeholder='Имя'
                  className='block flex-1 border-2 border-mischka-300 rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                />
                <ErrorMessage name='first_name'>
                  {(msg) => (
                    <small className='absolute top-0 right-0 text-mexican-red-500'>
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>
              <div className='mb-2 flex flex-col w-full relative'>
                <CustomInputPhone
                  label='Номер телефон'
                  name='phone'
                  type='tel'
                  placeholder='Введите ваш телефон'
                />
                <ErrorMessage name='phone'>
                  {(msg) => (
                    <small className='absolute top-0 right-0 text-mexican-red-500'>
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>
              <button
                type='submit'
                className='btn w-full rounded-3xl bg-curious-blue-500 text-white font-bold block p-4 mt-6 my-4 mx-1 grow'
              >
                Далее
              </button>

              <CustomInputCheckbox
                type='checkbox'
                name='isCheck'
                label='Я ознакомлен(-на) и согласен(-на) с условиями'
              />
            </Form>
          )}
        </Formik>
      </>
    );
  };

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const stepTwoValidationScheme = Yup.object({
    firstName: Yup.string().trim().min(2, 'Укажите ваше имя'),
    // .required('Заполните поле'),
    phone: Yup.string()
      .phone('RU')
      .min(11, 'Пожалуйста укажите корректный номер телефона'),
    // .required('Пожалуйста укажите корректный номер телефона'),
    last_name: Yup.string()
      .trim()
      .min(2, 'Укажите вашу фамилию')
      .required('Заполните поле'),
    email: Yup.string().matches(emailRegex, 'Укажите вашу почту').email(),
    birthDay: Yup.date()
      .nullable()
      .max(
        new Date(Date.now() - 441504000000),
        'Услуга не может быть оказана лицам моложе 14 лет',
      ),
    isCheck: Yup.bool()
      .oneOf([true], 'Вам необходимо принять условия')
      .required('Заполните поле'),
    club_id: Yup.string().required('Выберите адрес клуба'),
  });

  const StepTwo = (props: any) => {
    const handelonSubmit = (values: any) => {
      props.next(values, true);
    };
    return (
      <>
        <Formik
          validationSchema={stepTwoValidationScheme}
          initialValues={props.data}
          onSubmit={handelonSubmit}
        >
          {({ values, isSubmitting, isValid  }) => (
            <Form className='flex flex-wrap grow w-full'>
              <div className='mb-2 px-2 flex flex-col w-full sm:w-1/2 relative'>
                <CustomLabelFields htmlFor='first_name'>Имя</CustomLabelFields>
                <Field
                  id='first_name'
                  name='first_name'
                  className='block flex-1 border-2 border-mischka-300 rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  value={props.data.first_name}
                  readOnly
                />
                <ErrorMessage name='first_name'>
                  {(msg) => (
                    <small className='absolute top-0 right-0 text-mexican-red-500'>
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>

              <div className='mb-2 px-2 flex flex-col w-full sm:w-1/2 relative'>
                <CustomLabelFields htmlFor='last_name'>
                  Фамилия
                </CustomLabelFields>
                <Field
                  id='last_name'
                  name='last_name'
                  placeholder='Фамилия'
                  className='block flex-1 border-2 border-mischka-300 rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                />
                <ErrorMessage name='last_name'>
                  {(msg) => (
                    <small className='absolute top-0 right-0 text-mexican-red-500'>
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>
              <div className='mb-2 px-2 flex flex-col w-full relative'>
                <CustomLabelFields htmlFor='phone'>
                  Номер телефона
                </CustomLabelFields>
                <Field
                  type='tel'
                  id='phone'
                  name='phone'
                  className='block flex-1 border-2 border-mischka-300 rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  value={props.data.phone}
                  readOnly
                />
                <ErrorMessage name='phone'>
                  {(msg) => (
                    <small className='absolute top-0 right-0 text-mexican-red-500'>
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>

              <div className='relative flex flex-col w-full '>
                <CustomSelectFields
                  label='Выберете клуб'
                  name='club_id'
                  placeholder='Выберите клуб'
                >
                  <option disabled value=''>
                    Выберете клуб
                  </option>
                  {item &&
                    [...item.clubs].map((club) => (
                      <option value={club.id} key={club.address}>
                        {club.address}
                      </option>
                    ))}
                </CustomSelectFields>

                <ErrorMessage name='club_id'>
                  {(msg) => (
                    <small className='absolute top-0 right-0 text-mexican-red-500'>
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>
              <div className='mb-2 px-2 flex flex-col w-full relative'>
                <CustomInputTooltip
                  label='Дата рождения'
                  name='birth_day'
                  type='date'
                  id='customer_birth_day'
                  textTooltip='Услуга не может быть оказана лицам моложе 14 лет'
                  placeholder='Дата рождения'
                  min='1900-01-01'
                  max='2009-01-01'
                />

                <ErrorMessage name='birth_day'>
                  {(msg) => (
                    <small className='absolute top-0 right-0 text-mexican-red-500'>
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>

              <div className='mb-1 px-2 flex flex-col w-full relative'>
                <CustomLabelFields htmlFor='email'>Email</CustomLabelFields>
                <Field
                  name='email'
                  type='email'
                  id='email'
                  placeholder='email'
                  className='block flex-1 border-2 border-mischka-300 rounded-md bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                />

                <ErrorMessage name='email'>
                  {(msg) => (
                    <small className='absolute top-0 right-0 text-mexican-red-500'>
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>

              <div className='flex justify-between w-full'>
                {/* <button
                  type='button'
                  onClick={() => props.prev(values)}
                  className='btn rounded-3xl bg-curious-blue-500 text-white font-bold w-full sm:w-1/2 inline-block p-4 my-4 mx-1 grow'
                >
                  назад
                </button> */}
                <button
                  type='submit'
                  disabled={!isValid || isSubmitting}
                  className='btn rounded-3xl bg-curious-blue-500 text-center text-white font-bold w-full  p-4 my-4 mx-1 grow'
                >
                  Далее
                </button>
              </div>

              <CustomInputCheckbox
                type='checkbox'
                name='isCheck'
                label='Я ознакомлен(-на) и согласен(-на) с условиями'
              />
            </Form>
          )}
        </Formik>
      </>
    );
  };

  const steps = [
    <StepOne data={data} next={handelNextStep} />,
    <StepTwo data={data} next={handelNextStep} prev={handelPrevStep} />,
  ];

  return (
    <div>
      <Stepper activeStep={currentStep}>
        <Step label='' />
        <Step label='' />
        <Step label='' />
      </Stepper>

      <div className='mt-6 mb-3 sm:my-4 font-bold text-2xl sm:text-4xl text-center'>
        Оформить абонемент
      </div>
      {steps[currentStep]}
    </div>
  );
}
