import { Component ,OnInit } from '@angular/core';
import {AppserviceService} from '../../appservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailValue: string | any;
  passwordValue: string | any;
  passwordMatchFound:boolean |undefined;
  showDangerAlert: boolean = false;

  loginData : any |undefined = {
    email: '',
    password: ''
  };


  constructor(private service : AppserviceService , private router: Router){

  }
  ngOnInit(): void {

  }
  
  login() {
    console.log(this.loginData);
    
    this.service.login(this.loginData).subscribe(
      (response) => {
        console.log('Login successful', response);

    
        this.passwordMatchFound = true; 
        if (this.passwordValue !== 'correctPassword') {
          this.showDangerAlert = true;
        } else {
          this.showDangerAlert = false; 
        }
        this.router.navigate(['/home'])
      },

      (error) => {
        console.error('Login failed', error);
        this.passwordMatchFound = false;
          if (this.passwordValue !== 'correctPassword') {
            this.showDangerAlert = true;
          } else {
            this.showDangerAlert = false; 
          }
      }
      
    );

  }



  // onSubmit() {
    
  //   this.service.getALLData().subscribe((res) => {
  //     for (let i = 0; i < res.data.length; i++) {
  //       const userData = res.data[i];
  //       const userEmail = userData.email;
  //       const userPassword = userData.password;

  //       if (userEmail === this.emailValue && userPassword === this.passwordValue) {
  //         this.passwordMatchFound = true; 
  //       }
  //       else{
  //         this.passwordMatchFound = false;

  //       }

  //     }
  //     if (this.passwordValue !== 'correctPassword') {
  //       this.showDangerAlert = true;
  //     } else {
  //       this.showDangerAlert = false; 
        
  //   }});
  // }
  

}
