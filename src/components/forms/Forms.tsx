import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import { useMultyStepForm } from '../../hooks/useMultiStepForm';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import FormCompleted from './FormCompleted';
// import { useFormData } from './context';

import './styles.css';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birth_day: string;
  club_id: string;
  isCheck: boolean;
};

const initialState: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  birth_day: '',
  club_id: '',
  isCheck: false,
};

export default function Forms({ item }: any) {
  // const { setFormValues } = useFormData();
  const [data, setData] = useState<FormData>(initialState);

  const onSubmit = () => {
    next();
  };
  const { currentStepIndex, next, step, steps } = useMultyStepForm([
    <StepOne next={onSubmit} setData={setData} />,
    <StepTwo next={onSubmit} data={data} item={item} />,
    <FormCompleted item={item}  />,
  ]);
  return (
    <div className='w-full pt-6 pb-4 sm:py-10 md:py-0'>
      <Stepper activeStep={currentStepIndex}>
        {[...steps].map((el, index) => (
          <Step label='' key={index} />
        ))}
      </Stepper>

      {step}
    </div>
  );
}
