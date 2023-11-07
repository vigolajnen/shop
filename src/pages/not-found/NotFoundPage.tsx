import React from 'react';
// css
import styles from './not-found.module.css';
import HeaderPage from '../../components/header-page/HeaderPage';
import MetaData from '../../components/meta-data/MetaData';
import FooterPage from '../../components/footer-page/FooterPage';

export function NotFoundPage() {
  return (
    <>
      <MetaData
        title='Fitness House | Нет такой страницы.'
        description='Нет такой страницы.'
      />

      <div className="flex flex-col min-h-screen">
        <HeaderPage />

        <main className={styles.grid}>
          <h1 className={styles.center}>Нет такой страницы</h1>
        </main>

        <div className='overflow-hidden mt-auto mb-0'>
          <FooterPage />
        </div>
      </div>
    </>
  );
}
