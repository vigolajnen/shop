import { phoneWithoutFormatting } from '../../utils';
import { OrderCheck } from '../icons';
import { useFormData } from './context';

export default function FormCompleted({ item }: any) {
  const { data } = useFormData();

  const customer = {
    first_name: data.firstName,
    last_name: data.lastName,
    middle_name: '',
    birth_day: data.birth_day,
    phone: phoneWithoutFormatting(data.phone),
    email: data.email,
  };

  const products = [
    {
      name: item.product.product_name,
      price: item.product.product_price,
      price_id: data.club_id,
    },
    {
      name: item.subscription.product_name,
      price: item.subscription.product_price,
      price_id: data.club_id,
    },
  ];

  const allDataForm = {
    customer: customer,
    products: products,
    recurrentable: true,
  };

  // console.log('all', data);
  console.log(allDataForm);

  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <h2>Переход к оплате!</h2>
      <OrderCheck className='w-20 h-20' />

      {/* <pre>{JSON.stringify(data)}</pre> */}
      {/* <code>{JSON.stringify(allDataForm)}</code> */}
    </div>
  );
}
