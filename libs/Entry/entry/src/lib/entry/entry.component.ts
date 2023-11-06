import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'lib-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  @Input() workerProfilePic = "https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg"
  @Input() entryFileImage = "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg"
  @Input() workerName = 'worker PH';
  @Input() projectName = 'project PH';
  @Input() crewManager =  'crewManager PH';
  @Input() description:string | null = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ab libero quae totam quam pariatur vitae officiis aliquid molestiae voluptate voluptatum, saepe eum! Repellendus maiores voluptatibus, exercitationem unde at assumenda.';

  HasFileImage(): boolean {
    return this.entryFileImage != "";
  }
}
