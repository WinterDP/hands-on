import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'libs/Footer/footer/src/lib/footer/footer.component';
import { NavigationComponent } from 'libs/Navigation/navigation/src/lib/navigation/navigation.component';
import { MaterialModule } from 'src/app/Material/material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-master-page',
  template: `
    <lib-navigation></lib-navigation>
    <h1>Master Page</h1>
    <router-outlet></router-outlet>
    <lib-footer></lib-footer>
  `,
  standalone: true,
  imports: [CommonModule, FooterComponent, NavigationComponent, MaterialModule, RouterModule],
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css'],
})
export class MasterPageComponent {}
