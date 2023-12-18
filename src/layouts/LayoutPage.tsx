import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { motion } from 'framer-motion';

import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SpinnerBigSun from '../components/UI/spinner-big-sun/SpinnerBigSun';

export default function LayoutPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* theme1 */}
        <ThemeContext.Provider value="">
          <Header />
          <main className="flex flex-col grow h-full min-h-screen">
            <Suspense fallback={<SpinnerBigSun />}>
              <Outlet />
            </Suspense>
          </main>
          <Footer />
        </ThemeContext.Provider>
      </motion.div>
    </>
  );
}
