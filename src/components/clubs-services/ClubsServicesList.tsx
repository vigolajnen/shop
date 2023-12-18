import ClubsServicesItem from './ClubsServicesItem';
import { CONTENT_LIST } from './data';
import styles from './styles.module.css';

export default function ClubsServicesList() {
  const data = CONTENT_LIST.filter(el => el.isPool === true)[0].list;
  const liClass = 'overflow-hidden shadow-sm';

  return (
    <ul className={`flex flex-wrap text-center justify-center gap-4 md:gap-6`}>
      {[...data].map(el => (
        <li
          className={`${styles.item} w-full sm:w-1/5 grow ${liClass}`}
          key={el.title}
        >
          <ClubsServicesItem data={el} />
        </li>
      ))}
    </ul>
  );
}
