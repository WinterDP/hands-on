import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntryModel } from 'shared/models/entry/entry-model.model'


@Injectable({
  providedIn: 'root'
})
export class EntryInfinityScrollService{

  private entries:EntryModel[] = [];
  private totalItems=15;
  private apiURL = 'http://localhost:3000/';
  

  LoadEntryes():void{
    // adicionar modulo de entry e alterar retorno
    //this.http.get<T>(this.apiURL)
    this.http.get<EntryModel[]>(this.apiURL).subscribe((resp => {
        this.entries = resp
        this.totalItems = this.entries.length
    }));
  }

  getItems(page=1,itemsPerPage=10):Observable<string[]>{
    // Deve criar uma lista de objetos http app-entry 
    const startIndex=(page-1)*itemsPerPage;
    const endIndex=startIndex+itemsPerPage;
    const items:string[]=[];
    for(let i=startIndex;i<endIndex;i++){
      if(i<this.totalItems){
        items.push(`Item ${i+1}`);
      }
    }
    return of(items).pipe(delay(500));
  }

  constructor(private http:HttpClient) {
  }
}
