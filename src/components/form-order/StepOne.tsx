import { FC } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { ErrorBoundary } from 'react-error-boundary';

import { useFormData } from '../../context/FormContext';
import {
  TEXT_ERROR_MESSAGE,
  classNameInput,
  classNameInputCheck,
  isNotFilledTel,
} from '../../utils/form.ts';

import ErrorMessage from '../error-message/ErrorMessage';
import CustomLabelFields from '../UI/custom-fields/CustomLabelFields';
import LinkCheck from './LinkCheck';

interface StepOneProps {
  next: () => void;
  setData: (data: any) => void;
  item: any;
}

const StepOne: FC<StepOneProps> = ({ next, setData, item }) => {
  console.log(item);
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'all' });

  const onSubmit = (values: any) => {
    setFormValues(values);
    setData(values);
    console.log(values);

    // fetch('', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify(values),
    //   redirect: 'follow',
    // })
    //   .then(checkResponse)
    //   .then(checkSuccess);

    next();
  };
  return (
    <>
      <div className="mt-6 mb-3 sm:my-4 font-bold text-2xl sm:text-4xl text-center">
        Оформить абонемент
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col grow w-full mt-6"
      >
        <div className="mb-2 px-2 flex flex-col w-full">
          <CustomLabelFields label="Имя">
            <>
              <input
                className={classNameInput}
                placeholder="Имя"
                type="text"
                id="firstName"
                {...register('firstName', {
                  required: true,
                })}
              />

              {errors.firstName && (
                <small className="absolute top-0 right-0 text-md text-red-500">
                  {TEXT_ERROR_MESSAGE}
                </small>
              )}
            </>
          </CustomLabelFields>
        </div>

        <div className="mb-2 px-2 flex flex-col w-full">
          <CustomLabelFields label="Номер телефона">
            <>
              <InputMask
                id="phone"
                type="tel"
                className={classNameInput}
                mask="+7(999) 999-99-99"
                alwaysShowMask={true}
                {...register('phone', {
                  validate: {
                    inputTelRequired: isNotFilledTel,
                  },
                })}
              />
              {errors.phone && (
                <small className="absolute top-0 right-0 text-md text-red-500">
                  {TEXT_ERROR_MESSAGE}
                </small>
              )}
            </>
          </CustomLabelFields>
        </div>
        <ErrorBoundary fallback={<ErrorMessage />}>
          <button
            type="submit"
            className="btn w-full rounded-3xl bg-primary text-white hover:bg-white hover:text-primary hover:border-primary border-2 font-bold block p-4 mt-6 my-4 mx-1 grow"
          >
            Далее
          </button>
        </ErrorBoundary>

        <div>
          <div className="relative flex flex-col gap-x-3 max-w-screen-sm">
            <label className="flex gap-x-3 pb-3 xl:pb-5">
              <span className="flex h-6 items-center">
                <input
                  className={classNameInputCheck}
                  type="checkbox"
                  {...register('isCheck', {
                    required: true,
                  })}
                />
              </span>
              <LinkCheck />
            </label>

            {errors.isCheck && (
              <small className="absolute bottom-0 right-0 text-md text-red-500">
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
