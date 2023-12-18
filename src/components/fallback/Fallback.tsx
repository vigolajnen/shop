import './styles.css';
import IconError from '../../images/icons/icon-error.svg?react';

const Fallback = ({ error }: any) => {
  console.log(error.message);
  return (
    <section className="w-full text-center mx-auto text-red-600 p-4 flex-coll justify-center items-center gap-10">
      <header className="fallback__header">
        <IconError width={50} height={50} />
        <h3 className="text-lg my-4">Ошибка!</h3>
      </header>
      <div className="fallback__body">
        <p>
          <strong>Error:</strong> {error.message.toString()}
        </p>
      </div>
    </section>
  );
};

export default Fallback;
