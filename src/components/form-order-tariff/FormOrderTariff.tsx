import React from 'react';
import { useLocation, useParams } from 'react-router';
import { listTariffs } from '../tariffs/data/dataSam';
import { listTariffs as listTariffsSpb } from '../tariffs/data/dataSpb';
import { ROUTES } from '../../utils/routes';
import FormStepFormik from '../form-step-formik/FormStepFormik';

// data - нужно получать из хранилища по конкретному городу
export default function FormOrderTariff() {

  const { id } = useParams();
  const location = useLocation();
  const tariffListSam = listTariffs;
  const tariffListSpb = listTariffsSpb;
  let dataItem: any = [];
  const item = () => {
    if (location.pathname.includes(ROUTES.SPB)) {
      return (dataItem = [...tariffListSpb].find(
        (item) => item.id === Number(id),
      ));
    }
    return (dataItem = [...tariffListSam].find(
      (item) => item.id === Number(id),
    ));
  };
  item();

  return (
    <div>
      {/* <StepperForm /> */}
      <FormStepFormik item={dataItem} />
      <div>{dataItem.product.product_price}</div>
    </div>
  );
}
