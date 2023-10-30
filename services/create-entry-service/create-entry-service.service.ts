import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntryModel } from 'shared/models/entry/entry-model.model'

@Injectable({
  providedIn: 'root'
})
export class CreateEntryService {
  private apiURL = 'https://localhost:7203/';

  PostEntry(entry:any):void{
    console.log(entry);
    try {
      this.http.post(this.apiURL + 'api/Entry/',entry).subscribe(resp => {
        console.log(resp.toString);
        
      })
    } catch (error) {
      console.log(error);
    }
  }

  constructor(private http:HttpClient) { }
}
