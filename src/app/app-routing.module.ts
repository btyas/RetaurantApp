import { CategoryListComponent } from './Categories/Category-List/Category-List.component';
import { HeroComponent } from './hero/Hero/Hero.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './User/Login/Login.component';
import { RegisterComponent } from './User/Register/Register.component';

const routes: Routes = [

  {   path : '' ,                      component: HeroComponent },
  {  path :    'List-Categories',  component : CategoryListComponent},
  {   path : 'User-Register',          component: RegisterComponent },
  {    path : 'User-login',            component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
