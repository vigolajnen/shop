import { ElementType } from 'react';

export interface IPromoData {
  data: any;
}

export interface ITimerProps {
  title?: string;
  startDate?: Date;
  endDate: string;
}

export interface IClubServicesProps {
  title?: string;
  data: any;
}

export interface IAdvantagesProps {
  title?: string;
  data: any;
}

export interface ITariffsProps {
  title?: string;
}

export interface ITariffItemProps {
  data: any;
  onClick: () => void;
}

export interface ITariffItemHeaderProps {
  type: string;
  mc: Boolean;
}

export interface ITariffClubsInfoProps {
  type: string;
  mc: Boolean;
  clubs: any;
}

export interface IFaqProps {
  title?: string;
  data: any;
}

export interface IFaqAccordionProps {
  data: any;
}

export interface IClubsGalleryProps {
  title?: string;
  data?: any;
}

export interface IFooterPageProps {
  data?: any;
}

export interface IClubsAddressProps {
  data?: any;
}

export interface ISectionProps {
  styleWrapper?: string;
  styleInner?: string;
  children?: any;
  id?: string;
}

export interface ISectionTitleProps {
  children: string | JSX.Element | JSX.Element[];
  styles?: string;
  as?: ElementType;
}

export interface ICarouselBaseProps {
  data?: any;
}

export interface ICarouselPromoProps {
  styles?: string;
  onClick?: any;
}

export interface IModalContentProps {
  // children?: JSX.Element | null;
  children?: any;
}

export interface IModalProps {
  onClose: () => void;
  children?: JSX.Element;
  title?: string;
  classBodyScroll?: string;
}

export interface ICustomLabelFieldsProps {
  children?: JSX.Element | string;
  htmlFor?: string;
  label?: string;
}

export interface ICarouselPictureItem {
  srcPic: string;
  altPic?: string;
  srcsetXL?: string;
  srcsetSM?: string;
  srcsetXS?: string;
}

export interface ICarouselPicture {
  dataPic: Array<ICarouselPictureItem>;
  sliderId: string;
}

export interface ICarouselData {
  data: any;
  sliderId: string;
  count?: number;
}

export interface ICarouselBaseSwiperProps {
  count?: number;
  wrapperClass?: string;
  sliderId: string;
  data: any;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
      spaceBetween?: number;
      freeMode?: boolean;
    };
  };
  children: React.ReactNode;
}
