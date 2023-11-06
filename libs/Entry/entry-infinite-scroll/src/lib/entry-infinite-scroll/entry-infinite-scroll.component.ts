import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import {EntryInfinityScrollService} from 'services/EntryInfiniteScroll/entry-infinity-scroll.service'
import { EntryComponent } from 'libs/Entry/entry/src/lib/entry/entry.component';
import { EntryModel } from 'shared/models/entry/entry-model.model'
import { delay } from 'rxjs';

@Component({
  selector: 'lib-entry-infinite-scroll',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule, EntryComponent],
  templateUrl: './entry-infinite-scroll.component.html',
  styleUrls: ['./entry-infinite-scroll.component.css'],
})
export class EntryInfiniteScrollComponent implements OnInit {
  entries: EntryModel[] = [];
  entriesInPage: EntryModel[] = [];
  items:string[]=[];
  isLoading=false;
  currentPage=1;
  itemsPerPage=5;
  loadedItems = 0;

  toggleLoading = ()=>this.isLoading=!this.isLoading;

   // it will be called when this component gets initialized.
  loadData= ()=>{
    this.entryInfinityScrollService.LoadEntries().subscribe({
      next: resp => {
        this.entries = resp.result;
      },
        error: error => {
        console.log(error);
      },
      complete: () => {
        this.appendData();
      }
    })
  }
    
    // this method will be called on scrolling the page
  appendData= ()=>{
    this.toggleLoading();
    setTimeout(()=>{ 
      if (this.itemsPerPage*this.currentPage > this.entries.length) {
        this.entriesInPage = this.entries;
      }else{
        for (let index = this.loadedItems; index < this.itemsPerPage*this.currentPage; index++) {
          this.entriesInPage.push(this.entries[index])
        }
        this.loadedItems+= this.itemsPerPage;
      }
      console.log(this.isLoading);
      this.toggleLoading();
     }, 500)
  }

  onScroll= ()=>{
    this.currentPage++;
    this.appendData();
  }

    
  constructor(private entryInfinityScrollService:EntryInfinityScrollService) {}

  ngOnInit(){
    this.loadData();
  }
}