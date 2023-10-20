// import { generalRequest } from '../../utils';
// import { orderData } from '../../utils/order';
import { OrderCheck } from '../icons';
// import { useFormData } from './context';

export default function FormCompleted({ item }) {
  // const { data } = useFormData();
  // const allDataForm = orderData(data, item);
  // console.log(allDataForm);


  return (
    <div className='flex flex-col justify-center items-center p-4'>

      <OrderCheck className='w-32 h-32 p-4' />

    </div>
  );
}
