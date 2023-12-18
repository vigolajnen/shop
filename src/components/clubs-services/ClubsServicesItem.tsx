import { FC } from 'react';
import { IList } from './data';

import styles from './styles.module.css';

interface ClubsServicesItemProps {
  data: IList;
}

const ClubsServicesItem: FC<ClubsServicesItemProps> = ({ data }) => {
  const { title, pic, description } = data;
  return (
    <div
      className={`${styles.item}   w-full rounded-4xl shadow-sm overflow-hidden`}
      key={title}
    >
      <div
        className={`${styles.itemInner} relative z-2 flex flex-wrap items-center h-44 md:h-32 w-full justify-center bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url(${pic})` }}
      >
        <h3
          className={`${styles.title} relative p-4 md:mt-10 text-white mx-auto text-center w-full`}
        >
          {title}
        </h3>
      </div>
      <div
        className={`${styles.text} w-100 h-36 bg-c-services-1 text-c-services-2 p-4 hidden sm:flex items-center mt-auto mb-0 justify-center`}
      >
        {description}
      </div>
    </div>
  );
};

export default ClubsServicesItem;
