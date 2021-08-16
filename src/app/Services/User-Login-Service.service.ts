import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {

  url = "http://localhost:52137/api/User/AddUser";

constructor(private http : HttpClient) { }

NewUserSave(newUser : User) : Observable<any>
{

       const headers = { 'content-type' : 'application/json'}
        const body = JSON.stringify(newUser);

      console.log(body);

      console.log(newUser);
      return this.http.post<any>(this.url , body,{'headers':headers})
      //  console.log(newUser);
      //  return this.http.post<User>(this.url, newUser);
}

}
