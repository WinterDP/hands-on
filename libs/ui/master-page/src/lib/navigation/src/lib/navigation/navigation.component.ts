import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/Material/material.module';

@Component({
  selector: 'lib-navigation',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {}
