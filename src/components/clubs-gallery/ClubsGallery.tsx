import { FC } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import ClubsGalleryZone from './ClubsGalleryZone';
import Title from '../UI/title/Title';

interface IClubsGallery {
  dataMain: string[];
  dataPool: string[];
  dataGym: string[];
  dataSpa: string[];
  dataGroup: string[];
}

const ClubsGallery: FC<IClubsGallery> = ({
  dataMain,
  dataPool,
  dataGym,
  dataSpa,
  dataGroup,
}) => {
  const matches = useMediaQuery('(min-width: 567px)');
  return (
    <section className="overflow-hidden md:py-16 px-4 pt-16 pb-10 bg-gray-100">
      <div className="container max-w-screen-xl mx-auto">
        <Title as="h3" styles="">
          Клубы fitness house
        </Title>
        {matches ? (
          Boolean(dataMain) && [...dataMain].length > 0 ? (
            <ClubsGalleryZone zone="main" data={dataMain} />
          ) : null
        ) : (
          <div className="-mt-9 md:mt-0 text-left">
            {Boolean(dataPool) && [...dataPool].length > 0 ? (
              <ClubsGalleryZone zone="pool" data={dataPool}>
                <div className="py-4 grow text-md font-semibold">
                  <span className="text-primary">Просторный бассейн </span>
                  для спортивного и расслабленного плавания
                </div>
              </ClubsGalleryZone>
            ) : null}

            {Boolean(dataGym) && [...dataGym].length > 0 ? (
              <ClubsGalleryZone zone="gym" data={dataGym}>
                <div className="py-4 grow font-semibold text-base">
                  Профессионально оборудованный и
                  <span className="text-primary">
                    {' '}
                    современный тренажёрный зал{' '}
                  </span>
                </div>
              </ClubsGalleryZone>
            ) : null}

            {Boolean(dataSpa) && [...dataSpa].length > 0 ? (
              <ClubsGalleryZone zone="spa" data={dataSpa}>
                <div className="py-4 grow text-md font-semibold">
                  <span className="text-primary">Спа-комплекс </span>
                  <br />
                  финская, русская, турецкая, инфракрасная сауны и соляная
                  комната
                </div>
              </ClubsGalleryZone>
            ) : null}

            {Boolean(dataGroup) && [...dataGroup].length > 0 ? (
              <ClubsGalleryZone zone="group" data={dataGroup}>
                <div className="py-4 grow text-md font-semibold">
                  Разнообразные групповые уроки
                  <br />
                  <span className="text-primary">
                    растяжка, гимнастика, силовые, аквааэробика
                  </span>
                </div>
              </ClubsGalleryZone>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClubsGallery;
