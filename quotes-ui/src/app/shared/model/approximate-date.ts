export class ApproximateDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  known():boolean{
    return 0 < this.year  && 0 < this.month && 0 < this.day;
  }
}
