import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalLoginComponent } from 'src/app/msal-login/msal-login.component';

@Component({
  selector: 'lib-navigation',
  standalone: true,
  imports: [CommonModule, MsalLoginComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {}
