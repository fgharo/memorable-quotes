import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DroppyService {
  private droppyServiceUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient, private loc: Location) { }

  public upload(formData) {
    return this.httpClient.post<any>(this.droppyServiceUrl + 'image/', formData, {
      reportProgress: true,
      observe: 'events',
      responseType: 'text'
    });
  }
}
