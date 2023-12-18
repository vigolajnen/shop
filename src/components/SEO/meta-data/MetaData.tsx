import { FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface MetaDataProps {
  title: string;
  description: string;
}

const MetaData: FC<MetaDataProps> = ({ title, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaData;
