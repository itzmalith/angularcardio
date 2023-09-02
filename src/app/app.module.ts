import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RegComponent } from './components/reg/reg.component';
import { IntroComponent } from './components/intro/intro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { NgxTypedJsModule } from 'ngx-typed-js';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegComponent,
    IntroComponent,
    Navbar2Component,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxTypedJsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
