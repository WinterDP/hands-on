import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  workerProfilePic = "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" 
  workerName = 'worker PH';
  projectName = 'project PH';
  crewManager =  'crewManager PH';
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab libero quae totam quam pariatur vitae officiis aliquid molestiae voluptate voluptatum, saepe eum! Repellendus maiores voluptatibus, exercitationem unde at assumenda.'

}
