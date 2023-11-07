import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-signup-form',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  public signUpForm !: FormGroup;

  SignUp(){
    // singup form
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required]),
    });
  }

  get email(){
    return this.signUpForm.get('email')!;
  }

  get password(){
    return this.signUpForm.get('password')!;
  }

  get repeatPassword(){
    return this.signUpForm.get('repeatPassword')!;
  }

}
