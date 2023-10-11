import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SvgLogo from '../icons/Logo';
import CitysHeader from '../cities-header/CitiesHeader';
import { ROUTES } from '../../utils/routes';

export default function HeaderPage() {
  const TEXT = 'рядом с домом';
  const listСities = ['Самара', 'Санкт-Петербург'];
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [cityName, setCityName] = useState(listСities[0]);
  const [sticky, setSticky] = useState<{ isSticky: boolean; offset: number }>({
    isSticky: false,
    offset: 0,
  });
  const headerRef = useRef<HTMLDivElement | null>(null);
  const classMenu =
    'grid gap-5 w-max z-10 absolute -bottom-36 left-1/2 -translate-x-1/2 p-4 shadow-xl rounded-lg bg-white uppercase text-center text-mako-800 font-bold';

  // handle scroll event
  const handleScroll = (elTopOffset: number, elHeight: number): void => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  const onClickLink = () => {
    setIsOpen(true);
  };

  const onChangeLocation = () => {
    setIsOpen(true);

    location.pathname !== ROUTES.SPB
      ? setCityName(listСities[1])
      : setCityName(listСities[0]);
  };

  useEffect(() => {
    location.pathname === ROUTES.SPB && setCityName(listСities[1]);
    setIsOpen(false);
  }, []);

  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current?.getBoundingClientRect();
    const handleScrollEvent = (): void => {
      handleScroll(header?.top || 0, header?.height || 0);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <header
      id='sticky-header'
      className={`bg-curious-blue-200 font-bold px-4 lg:px-6 transition-all  ${
        sticky.isSticky ? 'sticky top-0 z-50 shadow-lg py-4 bg-white-50' : 'relative py-2.5'
      }`}
      ref={headerRef}
    >
      <nav className='container mx-auto w-full max-w-screen-xl'>
        <div className='flex flex-wrap justify-between w-full items-center mx-auto'>
          <SvgLogo width={160} height={27} className="w-28 sm:w-30" />
          <CitysHeader />
          <div className='hidden sm:flex'>{TEXT}</div>
        </div>
      </nav>
      <div className={`${classMenu} ${isOpen ? 'hidden' : ''}`}>
        <h3 className='col-span-2 text-center'>Ваш город {cityName}?</h3>

        {cityName === listСities[0] ? (
          <NavLink
            to={ROUTES.HOME}
            className='col-span-1 inline-block p-4 mb-2 text-center border-2 border-mako-800 rounded-lg bg-mako-800 hover:bg-white-50 text-white-50 hover:text-mako-800'
            onClick={onClickLink}
          >
            Да
          </NavLink>
        ) : (
          <NavLink
            to={ROUTES.SPB}
            className='col-span-1 inline-block p-4 mb-2 text-center border-2 border-mako-800 rounded-lg bg-mako-800 hover:bg-white-50 text-white-50 hover:text-mako-800'
            onClick={onClickLink}
          >
            Да
          </NavLink>
        )}

        {cityName === listСities[0] ? (
          <NavLink
            to={ROUTES.SPB}
            className='col-span-1 inline-block p-4 mb-2 text-center border-2 border-mako-800 rounded-lg hover:bg-mako-800 hover:text-white-50'
            onClick={onChangeLocation}
          >
            Нет
          </NavLink>
        ) : (
          <NavLink
            to={ROUTES.HOME}
            className='col-span-1 inline-block p-4 mb-2 text-center border-2 border-mako-800 rounded-lg hover:bg-mako-800 hover:text-white-50'
            onClick={onChangeLocation}
          >
            Нет
          </NavLink>
        )}
      </div>
    </header>
  );
}
