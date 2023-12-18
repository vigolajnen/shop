export const TEXT_ERROR_MESSAGE = 'Заполните поле';

export const classNameInput =
  'block h-11 w-full flex-1 font-normal border-2 border-mako-100 focus:border-mako-500 rounded-md transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6';
export const classNameInputCheck =
  'block h-4 w-4 flex-1 outline-none font-normal border-2 border-mako-100 focus:border-mako-500 rounded-md transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6';

const customer = (
  data: { firstName: string; phone: string },
  values: { lastName: string; birth_day: string; email: string },
) => {
  return {
    first_name: data.firstName,
    last_name: values.lastName,
    middle_name: '',
    birth_day: values.birth_day,
    phone: phoneWithoutFormatting(data.phone),
    email: values.email,
  };
};

const products = (
  data: { phone: string },
  values: {
    club_id: string;
    product_name: string;
    product_price: number;
    product_id: string;
  },
  item: { title: string; price: number },
) => {
  console.log(values, data);
  return [
    {
      name: item.title,
      price: item.price,
      price_id: values.club_id,
    },
    {
      name: values.product_name,
      price: values.product_price,
      price_id: values.product_id,
    },
  ];
};

export const orderData = (
  data: { firstName: string; phone: string },
  values: {
    lastName: string;
    birth_day: string;
    email: string;
    club_id: string;
    product_name: string;
    product_price: number;
    product_id: string;
  },
  item: { title: string; price: number },
) => {
  return {
    customer: customer(data, values),
    products: products(data, values, item),
    recurrentable: true,
  };
};

export const nowAgeUser = (val: string): number => {
  var now: Date = new Date(); //Текущя дата
  var today: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
  // var dob = new Date(1988, 6, 26); //Дата рождения
  var dob: Date = new Date(val);
  var dobnow: Date = new Date(
    today.getFullYear(),
    dob.getMonth(),
    dob.getDate(),
  ); //ДР в текущем году
  var age: number; //Возраст

  //Возраст = текущий год - год рождения
  age = today.getFullYear() - dob.getFullYear();
  //Если ДР в этом году ещё предстоит, то вычитаем из age один год
  if (today < dobnow) {
    age = age - 1;
  }

  return age;
};

export const maxValueDate = (): string => {
  const nowDate: string = new Date().toLocaleDateString(); //Текущя дата
  const m: string = nowDate.slice(3, 5);
  const d: string = nowDate.slice(0, 2);

  const y: number = new Date().getFullYear() - 14; // 14 лет сегодня
  const result: string = y + '-' + m + '-' + d;

  return result;
};

export const phoneWithoutFormatting = (str: string): string => {
  return str
    .replace(/[^0-9]/g, '')
    .slice(1)
    .trim();
};

// количество одинаковых цифр в строке
const orderedCount = (text: string): Array<[string, number]> => {
  return Array.from(
    text.split('').reduce((acc: Map<string, number>, el: string) => {
      acc.set(el, (acc.get(el) || 0) + 1);
      return acc;
    }, new Map()),
  );
};

export const checkPhone = (phone: string): boolean => {
  const tel: string = phone.replace(/[^+\d]/g, '').slice(2);
  const num: number = tel.length;

  return num === 10 && orderedCount(tel)[0][1] < 10;
};

export const getDataCity = (data: Array<any>, cityName: string): any => {
  return data && [...data].filter(el => el.city === cityName)[0];
};

export const getDataCityClubs = (arr: any) => {
  return (
    !!arr &&
    [...arr.clubs].map(el => {
      return {
        name: el.name,
        address: el.address,
      };
    })
  );
};

export const getDataCityClubsTariff = (
  clubs: Array<any>,
  type: string,
): Array<any> => {
  return clubs
    .map(club => {
      let flag: boolean = false;
      let idProduct: string = '';
      let recurrent: any = {};
      club.products.map((p: any) => {
        if (p.product_type === type) {
          flag = !flag;
          idProduct = p.product_id;
        }
        if (p.product_type === 'subscription_recurrent') {
          recurrent = {
            id: p.product_id,
            name: p.product_name,
            price: p.product_price,
          };
        }
      });
      return flag
        ? {
            id: idProduct,
            recurrent: recurrent,
            name: club.name,
            address: club.address,
            isPool: club.isPool,
          }
        : null;
    })
    .filter(el => el !== null);
};
export const getDataSpbClubsTariff = (
  clubs: Array<any>,
  type: string,
): Array<any> => {
  return clubs
    .map(club => {
      let flag: boolean = false;
      let idProduct: string = '';
      let recurrent: any = {};

      club.products.map((p: any) => {
        if (p.product_type === type) {
          flag = !flag;
          idProduct = p.product_id;
        }
        if (p.product_type === 'subscription_recurrent') {
          recurrent = {
            id: p.product_id,
            name: p.product_name,
            price: p.product_price,
          };
        }
      });
      return flag
        ? club.name.toLocaleLowerCase() === 'Салово'.toLocaleLowerCase() ||
          club.name.toLocaleLowerCase() === 'Охта Молл'.toLocaleLowerCase()
          ? {
              id: idProduct,
              recurrent: recurrent,
              name: club.name,
              address: club.address,
              isPool: club.isPool,
              isPremier: true,
            }
          : {
              id: idProduct,
              recurrent: recurrent,
              name: club.name,
              address: club.address,
              isPool: club.isPool,
              isPremier: false,
            }
        : null;
    })
    .filter(el => el !== null);
};

export const getIdVal = (arr: Array<any>, type: string): string => {
  const el: any =
    Boolean(arr) && [...arr].filter(el => el.product_type === type);
  return el.length > 0 ? el[0].product_id : '';
};

export const getPriceVal = (arr: Array<any>): number => {
  const el: any =
    Boolean(arr) &&
    [...arr].filter(el => el.product_type === 'subscription_recurrent');
  return el.length > 0 ? el[0].product_price : '';
};

export const isNotFilledTel = (v: string) => {
  return v && v.indexOf('_') === -1 && checkPhone(v)
    ? undefined
    : 'Phone number is required.';
};

export const isCheckBirthDay = (v: string): boolean => {
  return nowAgeUser(v) >= 14;
};
