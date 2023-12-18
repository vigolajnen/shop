import { FC } from 'react';
import IconError from '../../images/icons/icon-error.svg?react';

interface ErrorMessageProps {
  error?: Error | any;
  resetErrorBoundary?: () => void;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error, resetErrorBoundary }) => {
  console.log(error);
  return (
    <div
      role="alert"
      className="error-mess z-50 fixed bottom-3 left-3 right-3 w-auto rounded-md bg-red-200/90 text-red-600 p-4 flex items-center gap-5"
    >
      <IconError width={50} height={50} />
      <h2 className="font-bold text-xl my-2">Ошибка</h2>
      <pre>{error?.message.toString()}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorMessage;
