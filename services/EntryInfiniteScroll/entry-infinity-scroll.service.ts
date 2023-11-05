import { Injectable, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntriesGetModel, EntryModel } from 'shared/models/entry/entry-model.model'


@Injectable({
  providedIn: 'root'
})
export class EntryInfinityScrollService{
  private totalItems=150;
  private apiURL = 'https://localhost:7203/';
  
  LoadEntries():Observable<EntriesGetModel>{
    // adicionar modulo de entry e alterar retorno
    return this.http.get<EntriesGetModel>(this.apiURL + 'api/Entry')
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
