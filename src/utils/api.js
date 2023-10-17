// проверка ответа
const checkResponse = res => {
  console.log(res);
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = res => {
  if (res) {
    return res;
  }
  // if (res && res.success) {
  //   return res;
  // }
  return Promise.reject(`Ответ не success: ${res}`);
};

export const generalRequest = (endpoint, options) => {
  let url;
  if (window.location.hostname === 'localhost') {
    url = 'http://127.0.0.1:8000/payments/' + endpoint + '/';
  } else {
    url = window.location.origin + '/payments/' + endpoint + '/';
  }
  return fetch(url, options).then(checkResponse).then(checkSuccess);
};

let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const requestOptions = data => {
  return {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow',
  };
};
