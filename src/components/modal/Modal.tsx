import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';

import { useModal } from '../../hooks/useModal';

import { IModalProps } from '../../types';

import './styles.css';

export default function Modal({
  onClose,
  children,
  title,
  classBodyScroll,
}: IModalProps) {
  const modalRoot = document.getElementById('modals');
  let navigate = useNavigate();
  const { closeModal } = useModal();
  const handelClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleClickEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        closeModal();
      }
    };

    function onClose() {
      navigate(-1);
      closeModal();
    }

    window.addEventListener('keydown', handleClickEscape);
    return () => {
      window.removeEventListener('keydown', handleClickEscape);
    };
  }, [onClose, closeModal, navigate]);

  return createPortal(
    <>
      <div
        className='justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none'
        onClick={onClose}
      >
        <div
          className={`mx-2 my-auto h-auto w-full md:max-w-xl ${classBodyScroll}`}
          onClick={handelClick}
          role='document'
        >
          {/* max-h-screen  */}
          <div className='overflow-y-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='absolute top-0 right-0 flex items-start justify-between p-0 border-0 border-solid border-blueGray-200 rounded-t'>
              <div className='text-3xl font-semibold'>{title}</div>
              <button
                type='button'
                className='close relative z-10 btn text-curious-blue-500 hover:text-curious-blue-800 w-10 h-12 text-blue overflow-hidden'
                data-dismiss='modal'
                aria-label='Close'
                onClick={onClose}
              >
                <span aria-hidden='true' className="text-4xl block">&times;</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>,
    modalRoot!,
  );
}
