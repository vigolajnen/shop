import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { CITIES_ROUTERS } from '../../utils';
import HeaderCitySelection from './HeaderCitySelection';

import styles from './styles.module.css';

export interface ICity {
  url: string;
  name: string;
}

export default function HeaderCity() {
  const localStorageCity: string | null = localStorage.getItem('city');
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [nameCity, setNameCity] = useState('Самара');

  const onClickPoint = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    const str: string = e.currentTarget.innerText.toLowerCase();
    setIsOpen(false);
    setNameCity(str[0].toUpperCase() + str.slice(1));
    localStorageCity === null && localStorage.setItem('city', str);
  };

  const city: ICity | undefined = CITIES_ROUTERS.find(
    (el: ICity) => el.url.slice(1, 4) === location.pathname.slice(1, 4),
  );

  useEffect(() => {
    city && setNameCity(city.name);
  }, [location, city]);

  return (
    <>
      <HeaderCitySelection
        city={nameCity}
        onClickLinkNo={() => setIsOpen(true)}
      />

      <div className={`${styles.menu} relative font-bold`}>
        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className={`${styles.button} sm:text-md focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg pr-0 sm:px-5 py-2.5 text-center inline-flex items-center`}
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {nameCity}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdownHover"
          className={`${
            !isOpen ? 'hidden' : ''
          } z-20 overflow-y-auto max-h-[500px] text-secondary-950 absolute top-100 right-0 bg-white p-4 pt-6 rounded-lg shadow w-64 m-2 text-center uppercase`}
        >
          {/* <h3>Выберите город</h3> */}
          <ul
            className=" text-sm relative"
            aria-labelledby="dropdownHoverButton"
          >
            {CITIES_ROUTERS.length > 0 &&
              [...CITIES_ROUTERS].map((city, index) => (
                <li key={index} className="hover:text-black">
                  <NavLink
                    to={city.url}
                    className="block p-1 text-left text-secondary-800 hover:text-black"
                    onClick={onClickPoint}
                  >
                    {city.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
