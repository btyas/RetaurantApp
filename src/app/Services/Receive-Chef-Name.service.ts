import { PropertyBaseCity } from 'src/app/Interfaces/PropertyBaseCity';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiveChefNameService {

constructor(private http : HttpClient) { }


getAllCities()
{
    return this.http.get("http://localhost:52137/api/City");



}

}
