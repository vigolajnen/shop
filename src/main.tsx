import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { BASE_NAME } from './utils/constants.ts';
import App from './components/app/App.tsx';
import { setupStore } from './store/store.ts';

const store = setupStore();

import './index.css';
// <React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter basename={BASE_NAME}>
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </Provider>,
);
