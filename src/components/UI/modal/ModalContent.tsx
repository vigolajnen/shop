import { FC, ReactNode } from 'react';

import styles from './styles.module.css';

interface IModalContentProps {
  children: ReactNode;
}

const ModalContent: FC<IModalContentProps> = ({ children }) => {
  return (
    <div
      className={`${styles.modalContent} scrollBar overflow-y-auto h-full w-full relative flex-auto`}
    >
      {children}
    </div>
  );
};

export default ModalContent;
