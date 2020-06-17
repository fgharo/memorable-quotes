import { ApproximateDate } from './approximate-date';

export interface InformationSource {
  _id: string;
  type: string;
  title: string;
  numberOfPages: number;
  originDate: ApproximateDate;
}
