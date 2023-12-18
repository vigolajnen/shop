import { FC, ReactNode, MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';

import { useModal } from '../../../hooks/useModal';

import Fallback from '../../fallback/Fallback';

interface IModalProps {
  onClose: () => void;
  children: ReactNode;
  title: string;
}

const Modal: FC<IModalProps> = ({ onClose, children, title }) => {
  const modalRoot = document.getElementById('modals');
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const handelClick = (e: MouseEvent<HTMLDivElement>) => {
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
        className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={onClose}
      >
        <div
          className={`mx-2 my-auto h-auto w-full md:max-w-xl`}
          onClick={handelClick}
          role="document"
        >
          {/* max-h-screen  */}
          <div className="overflow-y-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="absolute top-0 right-0 flex items-start justify-between p-0 border-0 border-solid border-blueGray-200 rounded-t">
              <div className="text-3xl font-semibold">{title}</div>
              <button
                type="button"
                className="close relative z-10 btn text-primary hover:text-curious-blue-800 w-10 h-12 text-blue overflow-hidden"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true" className="text-4xl block">
                  &times;
                </span>
              </button>
            </div>
            <ErrorBoundary FallbackComponent={Fallback}>
              {children}
            </ErrorBoundary>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>,
    modalRoot!,
  );
};

export default Modal;
