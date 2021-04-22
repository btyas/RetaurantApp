import { IUserInterface } from './../model/IUserInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  url = "http://localhost:52137/api/Cuisinier/AddCuisinier";

constructor(private http : HttpClient) { }

AddNewUser (newUser : User) : Observable<any>
{
      const headers = { 'content-type' : 'application/json'}
      const body = JSON.stringify(newUser);


      return this.http.post(this.url , body,{'headers':headers , observe: 'response'});

   // return this.http.post(this.url, newUser);

}


}
