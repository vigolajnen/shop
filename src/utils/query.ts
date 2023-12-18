// 1 раз объявляем базовый урл
import { BASE_URL } from './constants';
// export const BASE_URL = 'https://norma.nomoreparties.space/api/';

// создаем функцию проверки ответа на `ok`
export const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  // не забываем выкидывать ошибку, чтобы она попала в `catch`
  // return Promise.reject(`Ошибка ${res.status}`);
  return Promise.reject(`${res.status}`);
};

// создаем функцию проверки на `success`
export const checkSuccess = (res: any) => {
  if (res && res.success) {
    return res;
  }
  // не забываем выкидывать ошибку, чтобы она попала в `catch`
  return Promise.reject(`Ответ не success: ${res}`);
};

// создаем универсальную фукнцию запроса с проверкой ответа и `success`
// В вызов приходит `endpoint`(часть урла, которая идет после базового) и опции
export const generalRequest = async (
  endpoint: string,
  options?: any,
): Promise<any> => {
  // а также в ней базовый урл сразу прописывается, чтобы не дублировать в каждом запросе
  return await fetch(`${BASE_URL}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
};

export const orderRequest = (endpoint: string, options?: any) => {
  let url;
  if (window.location.hostname === 'localhost') {
    url = 'http://127.0.0.1:8000/payments/' + endpoint + '/';
  } else {
    url = window.location.origin + '/payments/' + endpoint + '/';
  }
  return fetch(url, options).then(checkResponse).then(checkSuccess);
};

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const requestOptions = (data: any) => {
  return {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow',
  };
};
