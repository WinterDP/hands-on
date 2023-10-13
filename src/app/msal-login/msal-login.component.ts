import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';
import { MaterialModule } from 'src/app/Material/material.module';

@Component({
  selector: 'app-msal-login',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './msal-login.component.html',
  styleUrls: ['./msal-login.component.css'],
})
export class MsalLoginComponent implements OnInit {
  title = 'MSal-Login';

  constructor(private msalService: MsalService){
    this.IntializeMsalInstance()
  }

  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(
      res => {
        if(res != null && res.account != null) {
          this.msalService.instance.setActiveAccount(res.account);
        }
      }
    )
  }
  
  async IntializeMsalInstance(){
    await this.msalService.instance.initialize();
  }

  Login(){
    this.msalService.loginRedirect();
    console.log(this.msalService.instance.getActiveAccount()?.name)
    if (this.IsLoggedIn()) {
      console.log("Logado");
    }
  }

  Logout(){
    this.msalService.logoutRedirect();
  }

  IsLoggedIn(): boolean{
    return this.msalService.instance.getActiveAccount() != null;
  }
}
