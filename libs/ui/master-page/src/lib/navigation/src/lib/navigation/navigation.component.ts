import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/Material/material.module';
import { RouterLink } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'lib-navigation',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.menuIsColapsed = true;     
      }else{
        this.menuIsColapsed = true; 
      }
    });
  }
  menuIsColapsed = true;

  ToggleMenu(): void {
    this.menuIsColapsed = !this.menuIsColapsed;
    console.log(this.menuIsColapsed);
  }
}
