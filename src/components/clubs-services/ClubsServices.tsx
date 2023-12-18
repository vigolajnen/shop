import { useMediaQuery } from 'usehooks-ts';

import ClubsServicesCarousel from './ClubsServicesCarousel';
import ClubsServicesList from './ClubsServicesList';
import Title from '../UI/title/Title';

import styles from './styles.module.css';

export default function ClubsServices() {
  const matches = useMediaQuery('(min-width: 567px) and (max-width: 1200px)');
  return (
    <section className="relative md:py-16 px-4 py-16 bg-gray-100">
      <div className="container mx-auto max-w-screen-xl">
        <div className={`${styles.bgDecor}`}>
          <Title as="h2" align="center" styles="">
            В абонемент включено
          </Title>
          {matches ? <ClubsServicesCarousel /> : <ClubsServicesList />}
        </div>
      </div>
    </section>
  );
}
