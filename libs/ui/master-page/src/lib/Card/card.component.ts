import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCard();
  }

  onCardFetch() {
    this.fetchCard();
  }

  private fetchCard() {
    this.http.get('http://localhost:5212/api/entries').subscribe((res: any) => {
      console.log(res);
    });
  }
}
