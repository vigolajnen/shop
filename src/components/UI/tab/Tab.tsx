import { FC, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { getFilterActive } from '../../../store/reducers/city.slice';

interface TabProps {
  data: { name: string; content: React.ReactNode }[];
  active: number;
  setActive: (index: number) => void;
}

const Tab: FC<TabProps> = props => {
  const dispatch = useDispatch();

  const { data, active, setActive } = props;
  const ref = useRef(null);

  return (
    <>
      <div className="tabs max-w-screen-md mx-auto flex justify-center p-1 mb-10 border-2 border-white rounded-3xl text-white bg-slate-800">
        {data.map((d, i) => {
          return (
            <button
              key={i}
              ref={ref}
              className={`tab grow btn p-2 rounded-3xl text-xs md:text-base ${
                i == active ? 'active bg-primary' : ''
              }`}
              onClick={() => {
                setActive(i);
                dispatch(getFilterActive(i));
              }}
            >
              {d.name}
            </button>
          );
        })}
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {/* {data[active]?.content?.props?.count > 0 ? null : (
          <div className="font-bold text-base text-white">
            нет данных по тарифам
          </div>
        )} */}
        {data[active] && <div className="content">{data[active].content}</div>}
      </motion.div>
    </>
  );
};

export default Tab;
