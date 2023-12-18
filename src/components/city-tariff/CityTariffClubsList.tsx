import { FC } from 'react';

// interface ICityTariffClubsList {
//   city?: string;
//   type: string;
//   data: string[];
// }

const CityTariffClubsList: FC<any> = ({ data, type, city }) => {
  const clubs = data?.clubs;
  type = data?.type;

  return (
    <div className="mb-2">
      {type === 'morning' ? (
        <>
          <div className="font-bold  opacity-60">
            Тариф дает возможность посещать 1 клуб до 17:00
          </div>
          {city !== 'spb' && (
            <ul className="pl-4 mt-2">
              {Boolean(data) && clubs.length > 0
                ? clubs.map(
                    (el: any, index: number) =>
                      el.morningID !== '' && (
                        <li key={index} className="list-disc">
                          {el.address}
                        </li>
                      ),
                  )
                : null}
            </ul>
          )}

          {city === 'spb' && <p>tooltip</p>}
        </>
      ) : type === 'full' ? (
        <>
          <div className="font-bold  opacity-60">
            Тариф дает возможность посещать 1 клуб
          </div>

          {city !== 'spb' && (
            <ul className="pl-4 mt-2">
              {Boolean(data) && clubs.length > 0
                ? clubs.map(
                    (el: any, index: number) =>
                      el.fullID !== '' && (
                        <li key={index} className="list-disc">
                          {el.address}
                        </li>
                      ),
                  )
                : null}
            </ul>
          )}

          {city === 'spb' && <p>tooltip</p>}
        </>
      ) : type === 'mc_full' ? (
        <>
          <div className="font-bold  opacity-60">
            Тариф дает возможность посещать все клубы
          </div>
          {city !== 'spb' && (
            <ul className="pl-4 mt-2">
              {Boolean(data) && clubs.length > 0
                ? clubs.map(
                    (el: any, index: number) =>
                      el.mcID !== '' && (
                        <li key={index} className="list-disc">
                          {el.address}
                        </li>
                      ),
                  )
                : null}
            </ul>
          )}

          {city === 'spb' && <p>tooltip</p>}
        </>
      ) : null}
    </div>
  );
};

export default CityTariffClubsList;
