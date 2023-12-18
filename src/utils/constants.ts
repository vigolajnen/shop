export let VERSION: string = import.meta.env.REACT_APP_VERSION;
export let BASE_NAME: string = import.meta.env.REACT_APP_BASENAME;

export let BASE_URL: string = import.meta.env.REACT_APP_BASE_URL;
export let BASE_URL_PROD_URL: string = import.meta.env.REACT_APP_PROD_URL;

if (import.meta.env.REACT_APP_VERSION === 'prod') {
  BASE_URL = BASE_URL_PROD_URL;
}
