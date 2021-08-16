import { UserLoginServiceService } from './../../Services/User-Login-Service.service';

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm1 : FormGroup;
  newUser : User = new User();


  constructor(private route : Router, private fb : FormBuilder, private userService : UserLoginServiceService) {


    this.registerForm1 = this.fb.group({
      Name1: [''],
      LastName1: [''],
      email1: [''],
      Password1: [''],
      codePostale1 :   [''],
      ConfirmPassword1 : [''],
      adresse1  :   [''],
      Phone1 :  [''],
      Gender1 : ['']



  } );

  }

  ngOnInit() {

  }

  get Name1() {
        return this.registerForm1.get('Name1') as FormControl;
  }
  get LastName1()
  {
      return this.registerForm1.get('LastName1') as FormControl;
  }

  get email1()
  {
    return this.registerForm1.get('email1') as FormControl;
  }

 get Password1 (){
   return this.registerForm1.get('Password1') as FormControl;
 }

 get Gender1 ()
 {
   return this.registerForm1.get('Gender1') as FormControl;
 }

 get codePostale1()
 {
   return this.registerForm1.get('codePostale1') as FormControl;
 }

 get adresse1()
 {
   return this.registerForm1.get('adresse1') as FormControl;
 }

 get Phone1()
 {
   return this.registerForm1.get('Phone1') as FormControl;
 }

  FillUser()
  {
       this.newUser.Name = this.Name1.value;
       this.newUser.LastName = this.LastName1.value;
       this.newUser.email = this.email1.value;
       this.newUser.Phone = this.Phone1.value;
       this.newUser.Adresse = this.adresse1.value;

       this.newUser.Gender = 0
       this.newUser.CodePostalUser = this.codePostale1.value;

       this.newUser.Password = this.Password1.value;


       return this.newUser;


  }


  onSubmit()
  {

   this.userService.NewUserSave(this.FillUser()).subscribe(
      res => {
        console.log(res);
      }
   ) ;

   this.route.navigate(['/User-login']);


  }














}


