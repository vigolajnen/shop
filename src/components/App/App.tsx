import { useEffect, useState } from 'react';

import AppRoutes from '../../app-routes/AppRoutes';
import SpinnerBigSun from '../UI/spinner-big-sun/SpinnerBigSun';

import { useGetPriceCitiesQuery } from '../../store/reducers/pro.api';
import { BASE_URL, VERSION } from '../../utils/constants';

import './App.css';

function App() {
  const [allPrice, setAllPrice] = useState([]);
  const {
    isLoading,
    isError,
    data: price,
  } = useGetPriceCitiesQuery('', {
    refetchOnFocus: true,
    pollingInterval: 36000000,
  });

  useEffect(() => {
    console.log(
      BASE_URL,
      VERSION,
      import.meta.env.MODE,
      import.meta.env.PROD,
      import.meta.env.DEV,
    );
    setAllPrice(price);
  }, [price]);

  return (
    <>
      {isLoading && (
        <div className="min-h-screen h-full bg-primary flex flex-col justify-center items-center">
          <SpinnerBigSun />
        </div>
      )}
      {/* {isError && <Error />} */}
      {/* {allPrice && <AppRoutes />} */}
      {!isLoading && isError && <AppRoutes />}
      {allPrice && <AppRoutes />}
    </>
  );
}

export default App;
