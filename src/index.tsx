import React from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';

import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import 'swiper/css';
import './index.css';

import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    {/* basename='/shop' */}
    <BrowserRouter >
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>,
);
