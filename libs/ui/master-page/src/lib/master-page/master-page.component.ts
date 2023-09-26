import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'libs/ui/master-page/src/lib/footer/src/lib/footer/footer.component';
import { NavigationComponent } from 'libs/ui/master-page/src/lib//navigation/src/lib/navigation/navigation.component';

@Component({
  selector: 'lib-master-page',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavigationComponent],
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css'],
})
export class MasterPageComponent {}
