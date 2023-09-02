import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppserviceService } from '../../appservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  user = {
    email: '',
    password: '',
    username: ''
  };

  errmsg: any;
  constructor(private service: AppserviceService, private router: Router) {
  }
  ngOnInit(): void {
  }
  userReg = new FormGroup({
    'email': new FormControl('', Validators.required),
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),

  })


  userSubmit() {
    if (this.userReg.valid) {
      console.log(this.userReg.value);

      this.service.signup(this.userReg.value).subscribe(
        (res) => {
        console.log(res, 'res===>');
        this.userReg.reset();
        this.router.navigate(['/login'])
        
      },
      (error) => {
        if (error.status === 409) {
          this.errmsg = 'This email already exists';
        } 
        else{
          this.errmsg = 'INCORRECT EMAIL FORMAT';  
          this.userReg.get('email')?.reset();
        }
      }
      )
    }
    else {
      this.errmsg = ' all fields required '
    }

  }
}