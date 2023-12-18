import { FC } from 'react';
import IconError from '../../images/icons/icon-error.svg?react';

interface ErrorMessageProps {
  error?: Error | any;
  resetErrorBoundary?: () => void;
}

const ErrorMessageModal: FC<ErrorMessageProps> = ({
  error,
  resetErrorBoundary,
}) => {
  console.log(error);
  return (
    <div
      role="alert"
      className="w-full text-center mx-auto text-red-600 p-4 flex-coll justify-center items-center gap-10"
    >
      <IconError width={50} height={50} className="mx-auto" />
      <h2 className="font-bold text-xl my-2">Ошибка</h2>
      <pre style={{ color: 'red' }}>{error.message.toString()}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorMessageModal;
