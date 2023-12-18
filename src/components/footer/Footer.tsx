import Logo from '../../images/icons/logo.svg?react';

export default function Footer() {
  const documentLinks = [
    {
      name: 'Cоглашение на обработку персональных данных',
      url: 'https://market.fitnesshouse.ru/storage/documents/legal_information.pdf',
    },
    {
      name: 'Правила техники безопасности',
      url: 'https://market.fitnesshouse.ru/storage/documents/pravila_tehniki_bezopasnosti.pdf',
    },
    {
      name: 'Договор Оферты',
      url: 'https://market.fitnesshouse.ru/documentation',
    },
  ];
  return (
    <footer className="bg-primary py-10 pt-16 px-4 lg:px-6 footer">
      <div className="container mx-auto max-w-screen-xl">
        <div className=" border-b border-white flex flex-wrap items-baseline md:gap-5">
          <Logo
            width={160}
            height={27}
            className="w-48 max-w-full text-white mr-10"
          />

          <div className="w-full p-4 text-left text-white text-sm">
            Все размещенные на сайте сведения носят информационный характер и ни
            при каких условиях не являются офертой по смыслу ст. 435 ГК РФ и не
            являются публичной офертой по смыслу ст. 437 ГК РФ, если иное прямо
            не указано.
          </div>
        </div>

        <div className="p-4 w-full flex flex-wrap gap-3 justify-between text-sm text-left lg:text-center">
          {documentLinks.map((el, index) => (
            <a
              href={el.url}
              key={index}
              className="w-full sm:w-1/2 md:w-1/5 text-white p-2"
              target="_blank"
              rel="noreferrer"
            >
              {el.name}
            </a>
          ))}
          <div className=" sm:w-1/2 md:w-1/5 text-white">
            <div>© 2007 - 2023.</div>
            <div>Все права защищены.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
