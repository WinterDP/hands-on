import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginModel } from 'shared/models/Login/login-model.model';
import { LoginHandlerService } from 'services/Login/login-handler/login-handler-service.service';

@Component({
  selector: 'lib-signup-form',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm !: FormGroup;

  newSignUpUser : LoginModel = {
    "username": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": ""
  };
  signUpUsers : LoginModel[] = [];
  UserAreadyExists = false;

  // GETTERs
  get Username(){
    return this.signUpForm.get('username')!;
  }

  get FirstName(){
    return this.signUpForm.get('firstName')!;
  }

  get LastName(){
    return this.signUpForm.get('lastName')!;
  }

  get Email(){
    return this.signUpForm.get('email')!;
  }

  get Password(){
    return this.signUpForm.get('password')!;
  }

  get RepeatPassword(){
    return this.signUpForm.get('repeatPassword')!;
  }

  public get SignUpUsers(): LoginModel[]{
    return this.signUpUsers;
  }

  // METHODS

  SignUp(){
    if(this.signUpForm.invalid || (this.Password.value !== this.RepeatPassword.value))
      return;

    //if(this.CheckIfUserAlreadyExists())
      //return;

    // This will be improved when the backend is updated

    // prepare User for the backend injection
    this.newSignUpUser.username = this.Username.value;
    this.newSignUpUser.firstName = this.FirstName.value;
    this.newSignUpUser.lastName = this.LastName.value;
    this.newSignUpUser.password = this.Password.value;
    this.newSignUpUser.email = this.Email.value;

    this.loginHandlerService.Register(this.newSignUpUser)

    this.newSignUpUser = {
      "username": "",
      "firstName": "",
      "lastName": "",
      "email": "",
      "password": ""
    };
    //this.router.navigate(['/login']);
  }

  CheckIfUserAlreadyExists():boolean {
    const userExistis = this.signUpUsers.find(user => user.email === this.Email.value || user.email === this.Username.value);
    this.UserAreadyExists = userExistis != null; 
    return this.UserAreadyExists;
  }

  constructor(private router: Router, private loginHandlerService:LoginHandlerService){}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required]),
    });

    // Will receive sign up accounts from the backend
    const localData = localStorage.getItem('signUpUsers');

    if (localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }

  }

}
