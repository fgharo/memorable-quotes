import { ApproximateDate } from './approximate-date';
import { Image } from './image';

export interface Author {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  primaryProfession: string;
  image: Image;
  birth: ApproximateDate;
  death: ApproximateDate;
}
