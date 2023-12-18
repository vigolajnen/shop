import { Link } from 'react-router-dom';

import MetaData from '../components/SEO/meta-data/MetaData';
import Logo from '../images/icons/logo.svg?react';

export default function NotFoundPage() {
  return (
    <>
      <MetaData
        title="Fitness House | Нет такой страницы."
        description="Нет такой страницы."
      />
      <div className="flex flex-col min-h-screen bg-primary p-4 text-white">
        <Logo
          width={160}
          height={27}
          className="w-48 max-w-full  px-4 mx-auto"
        />
        <main className="flex flex-col grow-1 my-auto justify-center container mx-auto ">
          <div className="pt-8 flex flex-col justify-center items-center align-middle text-center">
            <div className="text-8xl font-bold uppercase mb-4">404</div>
            <h1 className="text-4xl font-bold uppercase mb-4">
              Нет такой страницы
            </h1>
            <Link
              to="/"
              className="button p-4 my-4 font-bold uppercase text-white rounded-xl hover:bg-lemon-chiffon-200"
            >
              Вернуться на главную
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
