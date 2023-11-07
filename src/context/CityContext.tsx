import { createContext } from 'react';

export const valuesCity = {
  
  city: 'ВЫБЕРИТЕ ГОРОД',
  clubs: [
    {
      address: '',
      name: '',
    },
  ],
  timer: {
    endDate: '',
    startDate: '',
  },
};

export const CityContext = createContext(valuesCity);
