import { useContext, useEffect, useRef, useState } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import HeaderCity from './HeaderCity';
import Logo from '../../images/icons/logo.svg?react';

export default function Header() {
  const theme = useContext(ThemeContext);
  const TEXT = 'рядом с домом';
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [sticky, setSticky] = useState<{ isSticky: boolean; offset: number }>({
    isSticky: false,
    offset: 0,
  });

  const handleScroll = (elTopOffset: number, elHeight: number): void => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    const header = headerRef.current?.getBoundingClientRect();
    const handleScrollEvent = (): void => {
      handleScroll(header?.top || 0, header?.height || 0);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header
      id="sticky-header"
      className={`bg-header-1 text-header-2 font-bold px-4 lg:px-6 transition-all  ${
        sticky.isSticky ? 'sticky top-0 z-50 shadow-lg py-4' : 'relative py-2.5'
      }`}
      ref={headerRef}
    >
      <nav className="container mx-auto w-full max-w-screen-xl">
        <div className="flex flex-wrap justify-between w-full items-center mx-auto">
          <Logo width={160} height={27} className="w-28 sm:w-auto h-auto" />

          <HeaderCity />
          <div className="hidden sm:flex">{TEXT}</div>
        </div>
      </nav>
    </header>
  );
}
