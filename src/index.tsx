import React from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import { store } from './store/store';

import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import 'swiper/css';
import './index.css';

import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter basename='/shop'>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </BrowserRouter>,
);
