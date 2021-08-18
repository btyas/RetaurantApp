import { UserLoginServiceService } from './../../Services/User-Login-Service.service';
import { UserLogin } from './../../model/UserLogin';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

   newLoginUser :  UserLogin = new UserLogin();

   LoginForm : FormGroup;



  constructor(private fb : FormBuilder, private loginService : UserLoginServiceService) {

    this.LoginForm = this.fb.group({

      emailLogin: [''],
      PasswordLogin: ['']




  } );
   }

  ngOnInit() {
  }
  get email()
  {
    return this.LoginForm.get('emailLogin') as FormControl;
  }

 get Password(){
   return this.LoginForm.get('PasswordLogin') as FormControl;
 }
  FillUserLogin()
  {
         this.newLoginUser.email = this.email.value;
         this.newLoginUser.password = this.email.value;

         return this.newLoginUser;
  }




  onSubmit()
  {
      this.loginService.NewLoginUser(this.FillUserLogin()).subscribe(

        res => {
          console.log(res);
        }
      )
  }

}
