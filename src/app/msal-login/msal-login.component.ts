import { Component } from '@angular/core';
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
export class MsalLoginComponent {
  title = 'MSal-Login';

  constructor(private msalService: MsalService){
    this.IntializeMsalInstance()
  }

  
  async IntializeMsalInstance(){
    await this.msalService.instance.initialize();
  }

  Login(){
    this.msalService.loginPopup().subscribe((Response: AuthenticationResult)=>{
      this.msalService.instance.setActiveAccount(Response.account);
    })
    console.log("Logado");
  }

  Logout(){
    this.msalService.logout();
  }

  IsLoggedIn(): boolean{
    return this.msalService.instance.getActiveAccount() != null;
  }
}
