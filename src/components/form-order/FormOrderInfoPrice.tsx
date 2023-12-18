import { ErrorBoundary } from 'react-error-boundary';
import { ITariff } from '../../models';

export default function FormOrderInfoPrice({ data }: { data: ITariff }) {
  const priceTariff = data.price;
  // const priceRecurrent =
  //   data && !!data.clubs[0] ? data.clubs[0].recurrent.price : null;
  const priceRecurrent = data.clubs[0].recurrent.price;
  const total = +priceTariff! + +priceRecurrent!;
  return (
    <ErrorBoundary
      fallback={<div>Something went wrong FormOrderInfoPrice</div>}
    >
      <div className="p-2">
        <ul className="p-4 mb-4 bg-gray-200 rounded-md">
          <li className="py-2 flex justify-between items-center">
            <span>Стоимость тарифа</span>
            <span>
              <b>{priceTariff}</b> <small>₽</small>
            </span>
          </li>
          <li className="py-2 flex justify-between items-center">
            <span>Первоначальный платеж</span>
            <span>
              <b>{priceRecurrent}</b> <small>₽</small>
            </span>
          </li>
          <li className="py-2 flex justify-between items-center">
            <span>
              <b>Итого:</b>
              <br />к оплате за первый месяц
            </span>
            <span>
              <b>{total}</b> <small>₽</small>
            </span>
          </li>
        </ul>
        <p className="text-sm text-center">
          Ежемесячное списание Подписки со второго месяца будет равно стоимости
          Вашего тарифа {priceTariff} ₽
        </p>
      </div>
    </ErrorBoundary>
  );
}
