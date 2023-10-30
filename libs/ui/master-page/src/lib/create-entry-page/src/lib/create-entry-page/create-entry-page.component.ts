import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { CreateEntryService } from 'services/create-entry-service/create-entry-service.service'

@Component({
  selector: 'lib-create-entry-page',
  standalone: true,
  imports: [CommonModule, CreateEntryPageComponent, FormsModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-entry-page.component.html',
  styleUrls: ['./create-entry-page.component.css'],
})
export class CreateEntryPageComponent implements OnInit {
  public entryForm!: FormGroup;

  SubmitEntry():void{
    console.log("enviou para requisição");
    this.createEntryService.PostEntry(this.entryForm.value);
  }

  ngOnInit(): void {
    this.entryForm = new FormGroup({
      createdDate: new FormControl(''),
      updatedDate: new FormControl(''),
      description: new FormControl(''),
      files: new FormControl(''),
    });
  }

  constructor(
    private createEntryService: CreateEntryService
  ) {  }
  
}
