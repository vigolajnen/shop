import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Tooltip } from 'react-tooltip';
import { ErrorBoundary } from 'react-error-boundary';

import { useFormData } from '../../context/FormContext';

import {
  TEXT_ERROR_MESSAGE,
  classNameInput,
  isCheckBirthDay,
  maxValueDate,
  orderData,
} from '../../utils/form';
import { orderRequest, requestOptions } from '../../utils/query';

import LinkCheck from './LinkCheck';
import FormOrderInfoPrice from './FormOrderInfoPrice';
import CustomLabelFields from '../UI/custom-fields/CustomLabelFields';
import ErrorMessage from '../error-message/ErrorMessage';

import IconInformation from '../../images/icons/icon-information.svg?react';

export default function StepTwo({ data, item }: any) {
  // const pageCity = useContext(CityContext);
  // const samaraClubsName = [
  //   {
  //     name: 'Монте Роза',
  //     place: '(IT-парк «Монте Роза»)',
  //   },
  //   {
  //     name: 'Гудок',
  //     place: '(ТРЦ «Гудок»)',
  //   },
  //   {
  //     name: 'Амбар',
  //     place: '(ТК «Амбар»)',
  //   },
  //   {
  //     name: 'Шипка',
  //     place: '(Шипка)',
  //   },
  // ];
  const [isSubmit, setIsSubmit] = useState(false);
  const maxDate = maxValueDate().toString();
  const TEXT_TOOLTIP_BIRTH_DAY =
    'Услуга не может быть оказана лицам моложе 14 лет';
  const { setFormValues } = useFormData();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: 'all' });

  const onSubmit = (values: any) => {
    setFormValues(values);
    setIsSubmit(true);
    // next();
    const allDataForm = orderData(data, values, item);
    console.log(allDataForm);

    // 'orders'
    orderRequest('orders', requestOptions(allDataForm))
      .then((result: any) => {
        if (result.pay_url) {
          window.location = result.pay_url;
        }
      })
      .catch((error: any) => console.log('error', error));
  };

  return (
    <>
      <div className="mt-6 mb-3 sm:my-4 font-bold text-2xl sm:text-4xl text-center">
        Оформить абонемент
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap grow w-full"
      >
        <div className="mb-2 px-2 flex flex-col w-full sm:w-1/2 relative">
          <CustomLabelFields label="Имя">
            <input
              className={classNameInput}
              placeholder="Имя"
              type="text"
              id="firstName"
              value={data.firstName}
              readOnly
            />
          </CustomLabelFields>
        </div>
        <div className="mb-2 px-2 flex flex-col w-full sm:w-1/2 relative">
          <CustomLabelFields label="Фамилия">
            <>
              <input
                className={classNameInput}
                placeholder="Фамилия"
                type="text"
                id="lastName"
                {...register('lastName', {
                  required: true,
                })}
              />

              {errors.lastName && (
                <small className="absolute top-0 right-0 text-md text-red-500">
                  {TEXT_ERROR_MESSAGE}
                </small>
              )}
            </>
          </CustomLabelFields>
        </div>
        <div className="mb-2 px-2 flex flex-col w-full relative">
          <CustomLabelFields label="Номер телефона">
            <input
              className={classNameInput}
              placeholder="Номер телефона"
              type="tel"
              id="phone"
              value={data.phone}
              readOnly
            />
          </CustomLabelFields>
        </div>
        <div className="relative flex flex-col w-full mb-2 px-2">
          <CustomLabelFields label="Выберете клуб">
            <select
              className="block h-11 w-full p-2 flex-1 border-2 border-mako-100 rounded-md transparent bg-white-50 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              {...register('club_id', {
                required: true,
              })}
            >
              <option disabled value="">
                Выберете клуб
              </option>
              {[...item.clubs].map(el => (
                <option value={el.id} key={el.address}>
                  {el.address}
                </option>
              ))}
            </select>
          </CustomLabelFields>
        </div>
        <div className="mb-2 px-2 flex flex-col w-full relative">
          <CustomLabelFields label="Дата рождения">
            <>
              <div className="relative inline-flex flex-col ml-1 items-center group">
                <button
                  data-tooltip-id="form-tooltip"
                  className="button px-2"
                  aria-label="Информация по первоначальному платежу"
                >
                  <IconInformation width={18} height={18} />
                </button>
                <Tooltip
                  id="form-tooltip"
                  place="top"
                  variant="warning"
                  content={TEXT_TOOLTIP_BIRTH_DAY}
                  opacity={1}
                  style={{
                    maxWidth: '250px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backgroundColor: '#117bb8',
                    fontSize: '1rem',
                    lineHeight: 'normal',
                  }}
                />
              </div>
              <input
                className={classNameInput}
                type="date"
                id="customer_birth_day"
                min="1900-01-01"
                max={maxDate}
                {...register('birth_day', {
                  required: true,
                  validate: {
                    inputBirthDayRequired: isCheckBirthDay,
                  },
                })}
              />

              {errors.birth_day && (
                <small className="absolute top-0 right-0 text-md text-red-500">
                  {TEXT_ERROR_MESSAGE}
                </small>
              )}
            </>
          </CustomLabelFields>
        </div>
        <div className="mb-1 px-2 flex flex-col w-full relative">
          <CustomLabelFields label="Email">
            <>
              <input
                className={classNameInput}
                placeholder="Email"
                type="text"
                id="email"
                {...register('email', {
                  required: true,
                })}
              />

              {errors.email && (
                <small className="absolute top-0 right-0 text-md text-red-500">
                  {TEXT_ERROR_MESSAGE}
                </small>
              )}
            </>
          </CustomLabelFields>
        </div>

        {[...item.clubs].map(el => (
          <div key={el.recurrent.id}>
            <input
              type="hidden"
              value={el.recurrent.name}
              {...register('product_name')}
            />
            <input
              type="hidden"
              value={el.recurrent.price}
              {...register('product_price')}
            />
            <input
              type="hidden"
              value={el.recurrent.id}
              {...register('product_id')}
            />
          </div>
        ))}

        <FormOrderInfoPrice data={item} />

        <ErrorBoundary fallback={<ErrorMessage />}>
          {isSubmit ? (
            <button
              type="submit"
              disabled
              className="btn w-full rounded-3xl bg-primary text-white hover:bg-white hover:text-primary hover:border-primary border-2 font-bold block p-4 my-2 mx-1 grow"
            >
              Далее
            </button>
          ) : (
            <button
              type="submit"
              className="btn w-full rounded-3xl bg-primary text-white hover:bg-white hover:text-primary hover:border-primary border-2 font-bold block p-4 my-2 mx-1 grow"
            >
              Далее
            </button>
          )}
        </ErrorBoundary>
        <div>
          <div className="relative flex flex-col gap-x-3 max-w-screen-sm">
            <label className="flex gap-x-3 pb-3 xl:pb-5">
              <span className="flex h-6 items-center">
                <input
                  className={classNameInput}
                  type="checkbox"
                  value={data.isCheck}
                  checked
                  readOnly
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
}
