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
  show = 14;

  increaseShow(){
    this.show +=5;
  }
  
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
