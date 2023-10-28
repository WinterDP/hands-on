import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import {EntryInfinityScrollService} from 'services/EntryInfiniteScroll/entry-infinity-scroll.service'
import { EntryComponent } from 'src/app/Entry/entry.component';

@Component({
  selector: 'app-entry-infinite-scroll',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule, EntryComponent],
  templateUrl: './entry-infinite-scroll.component.html',
  styleUrls: ['./entry-infinite-scroll.component.css'],
})
export class EntryInfiniteScrollComponent implements OnInit {
  items:string[]=[];
  isLoading=false;
  currentPage=1;
  itemsPerPage=10;

  toggleLoading = ()=>this.isLoading=!this.isLoading;

   // it will be called when this component gets initialized.
  loadData= ()=>{
    this.toggleLoading();
    this.entryInfinityScrollService.getItems(this.currentPage,this.itemsPerPage).subscribe({
      next:response=>this.items = response,
      error:err=>console.log(err),
      complete:()=>this.toggleLoading()
    })
    
  }
    
    // this method will be called on scrolling the page
  appendData= ()=>{
    this.toggleLoading();
    this.entryInfinityScrollService.getItems(this.currentPage,this.itemsPerPage).subscribe({
      next:response=>this.items = [...this.items,...response],
      error:err=>console.log(err),
      complete:()=>this.toggleLoading()
    })
  }

  onScroll= ()=>{
    this.currentPage++;
    this.appendData();
    console.log(this.currentPage);
  }

    
  constructor(private entryInfinityScrollService:EntryInfinityScrollService) {}

  ngOnInit(){
    this.loadData();
  }
}
