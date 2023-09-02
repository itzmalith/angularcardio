import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegComponent } from './components/reg/reg.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' }, 
  {path:'login',component:LoginComponent},
  {path:'register' ,component:RegComponent},
  {path:'home' ,component:HomeComponent},
  {path:'intro' ,component:IntroComponent},
  {path:'logout' , component:Navbar2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
