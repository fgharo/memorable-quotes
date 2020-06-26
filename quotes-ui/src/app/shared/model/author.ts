import { ApproximateDate } from './approximate-date';
import { Image } from './image';

export class Author {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  primaryProfession: string;
  image: Image;
  birth: ApproximateDate;
  death: ApproximateDate;

  constructor(form: any, imageName: string){
    if(form.get('firstName').value){
      this.firstName = form.get('firstName').value;
    }else{
      this.firstName = "Unknown";
    }
    if(form.get('lastName').value){
      this.lastName = form.get('lastName').value;
    }else{
      this.lastName = "Unknown";
    }
    if(form.get('birthDate').value){
      let dateParts = form.get('birthDate').value.split('-');
      this.birth = new ApproximateDate(dateParts[0], dateParts[1], dateParts[2]);
    }
    if(form.get('deathDate').value){
      let dateParts = form.get('birthDate').value.split('-');
      this.death = new ApproximateDate(dateParts[0], dateParts[1], dateParts[2]);
    }
    this.image = new Image();
    this.image.fileName = imageName;
  }
}
