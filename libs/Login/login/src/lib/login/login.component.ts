import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  get Email(){
    return this.loginForm.get('email')!;
  }

  get Password(){
    return this.loginForm.get('password')!;
  }

  Login():void {
    if (this.loginForm.invalid)
      return;

    // It should search in backend if the user already exists
    this.CheckifUserExists();
  }
  CheckifUserExists() {
    //
  }

  constructor(){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
}
