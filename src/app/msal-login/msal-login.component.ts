import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';

@Component({
  selector: 'app-msal-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './msal-login.component.html',
  styleUrls: ['./msal-login.component.css'],
})
export class MsalLoginComponent {
  title = 'MSal-Login';

  constructor(private msalService: MsalService){
  }

  Login(){
    this.msalService.loginPopup().subscribe((Response: AuthenticationResult)=>{
      this.msalService.instance.setActiveAccount(Response.account);
    }) 
  }

  Logout(){
    this.msalService.logout();
  }

  IsLoggedIn(): boolean{
    return this.msalService.instance.getActiveAccount() != null;
  }
}
