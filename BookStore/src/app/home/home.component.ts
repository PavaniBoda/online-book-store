import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books = BOOKS;
  selectedBook: Book;
  
  constructor() {
    console.log("constructor")
   }

  ngOnInit(): void { 
    console.log("n") 
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
 


}
