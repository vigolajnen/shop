import { FC, useEffect, useState } from 'react';

export interface IHeaderCitySelectionProps {
  city: string;
  onClickLinkNo: () => void;
}

const HeaderCitySelection: FC<IHeaderCitySelectionProps> = ({
  city,
  onClickLinkNo,
}) => {
  const [open, setOpen] = useState(false);
  const localStorageCity: string | null = localStorage.getItem('city');

  const onHandleClickLinkYes = () => {
    setOpen(false);
    localStorage.setItem('city', city);
  };
  const onHandleClickLinkNo = () => {
    setOpen(false);
    onClickLinkNo();
  };

  useEffect(() => {
    localStorageCity === null && setOpen(true);
  }, [localStorageCity]);
  return (
    <>
      {open && (
        <div className="flex flex-col justify-center gap-4 w-max z-10 absolute top-5 left-1/2 -translate-x-1/2 p-4 md:px-8 md:py-5 shadow-xl rounded-lg bg-white uppercase text-center text-secondary font-bold">
          <h3 className="col-span-2 text-sm text-center">Ваш город {city}?</h3>

          <div className="grid grid-cols-2 gap-4 w-full text-sm">
            <button
              className="uppercase p-2 py-3 md:p-4 mb-2 ml-auto text-center border-2 border-secondary rounded-lg bg-secondary hover:bg-white text-white hover:text-secondary w-20 md:w-24"
              onClick={onHandleClickLinkYes}
            >
              Да
            </button>
            <button
              className="uppercase p-2 py-3 md:p-4 mb-2 text-center border-2 border-secondary rounded-lg hover:bg-secondary hover:text-white w-20 md:w-24"
              onClick={onHandleClickLinkNo}
            >
              Нет
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderCitySelection;
