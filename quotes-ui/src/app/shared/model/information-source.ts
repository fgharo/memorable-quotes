import { ApproximateDate } from './approximate-date';

export class InformationSource {
  _id: string;
  type: string;
  title: string;
  numberOfPages: number;
  originDate: ApproximateDate;

  constructor(form: any){
    if(form.get('type').value){
      this.type = form.get('type').value;
    }else{
      this.type = "Unknown Type";
    }
    if(form.get('title').value){
      this.title = form.get('title').value;
    }else{
      this.title = "Unknown Title";
    }
    // year month day
    if(form.get('originDate').value){
      let dateParts = form.get('originDate').value.split('-');
      this.originDate = new ApproximateDate(dateParts[0], dateParts[1], dateParts[2]);
    }
  }
}
