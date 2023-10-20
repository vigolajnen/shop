import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

export default function CitiesHeader() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState('Самара');

  const cities = [
    {
      id: 1,
      name: 'Санкт-Петербург',
      url: `${ROUTES.SPB}`,
    },
    {
      id: 2,
      name: 'Самара',
      url: `${ROUTES.HOME}`,
    },
  ];

  const classMenu =
    'z-10 absolute top-100 right-0 bg-white p-4 pt-6 rounded-lg shadow w-64 m-2 text-center uppercase';

  const onClickPoint = (e: any): void => {
    setIsOpen(false);
    setCity(e.target.innerText);
  };

  useEffect(() => {
    location.pathname === ROUTES.SPB
      ? setCity(cities[0].name)
      : setCity(cities[1].name);
  }, [location.pathname]);
  return (
    <div className='relative font-bold'>
      <button
        id='dropdownHoverButton'
        data-dropdown-toggle='dropdownHover'
        data-dropdown-trigger='hover'
        className='uppercase font-bold text-sm sm:text-md text-mako-950 bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg pr-0 sm:px-5 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent'
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {city}{' '}
        <svg
          className='w-2.5 h-2.5 ml-2.5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      <div
        id='dropdownHover'
        className={`${classMenu} ${!isOpen ? 'hidden' : ''}`}
      >
        <h3>Выберите город</h3>
        <ul
          className='py-2 mt-2 text-sm'
          aria-labelledby='dropdownHoverButton'
        >
          {[...cities].map((city) => (
            <li key={city.id}>
              <NavLink
                to={city.url}
                className='block p-4 mb-3 text-center text-mako-800 border-2 border-mako-800 rounded-lg hover:bg-mako-800 hover:text-white-50'
                onClick={onClickPoint}
              >
                {city.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
