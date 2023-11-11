import { Injectable, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from 'shared/models/Login/login-model.model';

@Injectable({
  providedIn: 'root'
})
export class LoginHandlerService {
  private apiURL = 'http://localhost:5275/';
  

  Register(loginModel:LoginModel):void{
    console.log(JSON.stringify(loginModel));
    this.http.post(this.apiURL + 'api/Auth/Register',JSON.stringify( loginModel),{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }}).subscribe(
      resp => {
        console.log(resp);
      },
      error => {
        console.log(error);
      }
    );
  }

  Login(){
    //
  }

  constructor(private http:HttpClient) { }
}
