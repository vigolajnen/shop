import { FC, useState, lazy, useContext } from 'react';
import { Step, Stepper } from 'react-form-stepper';

import { useMultyStepForm } from '../../hooks/useMultyStepForm';

const StepOne = lazy(() => import('./StepOne'));
const StepTwo = lazy(() => import('./StepTwo'));
const StepThree = lazy(() => import('./StepThree'));

import './styles.css';
import { CityContext } from '../../context/CityContext';
import { ROUTERS } from '../../utils/routes';

interface IFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birth_day: string;
  club_id: string;
  isCheck: boolean;
}

const initialState: IFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  birth_day: '',
  club_id: '',
  isCheck: false,
};

const FormOrder: FC<any> = ({ item }) => {
  // const pageCity = useContext(CityContext);
  // console.log('pageCity', item);
  // if (pageCity === ROUTERS.spb.name) {
  //   // item.isPremier = 'Ford';
  // }
  console.log(item);
  const [data, setData] = useState<IFormData>(initialState);
  const { currentStepIndex, next, step, steps } = useMultyStepForm([
    <StepOne next={() => next()} setData={setData} item={item} key={0} />,
    <StepTwo next={() => next()} data={data} item={item} key={1} />,
    <StepThree key={2} />,
  ]);

  return (
    <div className={`formStepper w-full pt-12 pb-4 sm:py-10 md:py-0`}>
      <Stepper activeStep={currentStepIndex}>
        {[...steps].map((el: any) => (
          <Step label="" key={el} />
        ))}
      </Stepper>

      {step}
    </div>
  );
};

export default FormOrder;
