import { AddUserService } from './../../Services/Add-User.service';
import { User } from './../../model/User';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {


  registrationForm1 : FormGroup = new FormGroup({});  // restaurateur
  registrationForm2 : FormGroup = new FormGroup({});  // particulier
  RadioForm : FormGroup = new FormGroup({});

   objPostUser : User = new User();
   newUser : User = new User();


  constructor(private fb : FormBuilder, private addUserService : AddUserService , private router: Router,) {

    this.registrationForm1 = this.fb.group({

      firstName1 : [''],
      lastName1 : [''],
      password1 : ['' ],
      confirmPassword1 : [''],
      email1 : [''],
          Phone1 : [''],
          Adresse1: [ ' '],
          ZIP1 : [''],

     RadioForm  : this.fb.group({
       Radio1 : [''],
       Radio2 : ['']

     })

    });



   this.registrationForm2 = this.fb.group({
       firstName2 : ['', Validators.required],
       lastName2 : [''],
       password2 : [''],
       confirmPassword2 : [''],
       email2 : [''],
           Phone2 : [''],
           Adresse2: [ ' '],
           ZIP2 : [''],


   })

  }







  FillUserData () : User
  {

    this.newUser.name = this.firstName1.value;

    this.newUser.lastName = this.lastName1.value;

    this.newUser.zipCode = this.ZipCode1.value;



    return this.newUser;

  }




  ngOnInit()  {



  }

  get firstName1()
  {
    return this.registrationForm1.get('firstName1') as FormControl;
  }
  get lastName1()
  {
    return this.registrationForm1.get('lastName1') as FormControl;
  }


   get ZipCode1()
   {
     return this.registrationForm1.get('ZIP1') as FormControl;
   }

   get email1()
   {
     return this.registrationForm1.get('email1') as FormControl;
   }

   get gender()
   {
     return this.RadioForm.get('Radio1') as FormControl;
   }

   get Adresse1 ()
   {
     return this.registrationForm1.get('Adress1') as FormControl;
   }
  onSubmit()
  {


       this.addUserService.AddNewUser(this.FillUserData()).subscribe
        (
            data => {
              this.objPostUser = data;

              console.log(this.objPostUser);

            }

        )


       this.router.navigate(['/User-login']);

  }





}


