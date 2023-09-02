import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
  constructor(private router: Router) {}
  logout() {
    // Add any additional logout logic here if needed.
  
    // Navigate to the desired URL (e.g., http://localhost:4200/login).
    this.router.navigate(['/intro']); 
  }

}
