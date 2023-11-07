import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'libs/Login/login/src/lib/login/login.component'

@Component({
  selector: 'lib-login-page',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {}
