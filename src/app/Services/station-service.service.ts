import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isation } from '../model/isation';
import { Station } from '../model/Station';

@Injectable({
  providedIn: 'root'
})
export class StationServiceService {

  url = "http://localhost:5000/api/Station/ListAvailibleStations";   
   // url to change for specific services
  urlSaveStation ="http://localhost:5000/api/Station/SaveStation";
  
  constructor(private http : HttpClient) { 
   

  }
  StationsProperties ?: Array<Isation>;

   getAllStationsProp() : Observable<Isation[]> {

    return this.http.get<Isation[]>(this.url);
   }


   SaveStation( st : Station) : Observable<Isation>
   {
     //const headers = { 'content-type' : 'application/json'}
    //const body = JSON.stringify(st);
    return this.http.post<Isation>(this.urlSaveStation, st);
   }
}
