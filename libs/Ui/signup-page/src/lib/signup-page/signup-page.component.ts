import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from 'libs/Login/signup-form/src/lib/signup-form/signup-form.component';

@Component({
  selector: 'lib-signup-page',
  standalone: true,
  imports: [CommonModule, SignUpFormComponent],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignUpPageComponent {}
