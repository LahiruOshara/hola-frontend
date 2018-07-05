import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent} from 'src/app/sign-in/sign-in.component';
import {HomeComponent} from './home/home.component';
import { RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
