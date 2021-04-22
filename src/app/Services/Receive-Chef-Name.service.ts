




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPropertyBaseCity } from '../model/IPropertyBaseCity';

@Injectable({
  providedIn: 'root'
})
export class ReceiveChefNameService {

  url = 'http://localhost:52137/api/City';
constructor(private http : HttpClient) { }
propertiesArray?: Array<IPropertyBaseCity> ;

getAllProperties () : Observable<IPropertyBaseCity[]> {
     return  this.http.get<IPropertyBaseCity[]>(this.url);



      }




}





