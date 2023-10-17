import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/Material/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-navigation',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {}
