import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isation } from '../model/isation';

@Injectable({
  providedIn: 'root'
})
export class StationServiceService {

  url = 'http://localhost:52137/api/City';    // url to change for specific services
  constructor(private http : HttpClient) { 
   

  }
  StationsProperties ?: Array<Isation>;

   getAllStationsProp() : Observable<Isation[]> {

    return this.http.get<Isation[]>(this.url);
   }
}
