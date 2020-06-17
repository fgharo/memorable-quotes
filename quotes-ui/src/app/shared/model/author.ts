import { ApproximateDate } from './approximate-date';

export interface Author {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  primaryProfession: string;
  birth: ApproximateDate;
  death: ApproximateDate;
}
