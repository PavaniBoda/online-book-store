import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BOOKS } from '../mock-book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  books = BOOKS;
  selectedBook: Book;
  cartBooks: any;
  addToCart(bookId) {
    let book = this.books.find(book => {
      return book.id === +bookId;
    });
    let cartData = [];
    let bookData = localStorage.getItem("cart");
    if(bookData !== null) {
      cartData = JSON.parse(bookData);
    }
    if(!book.isAdded) {
      cartData.push(book);
      this.cartBooks=cartData;
      localStorage.setItem('cart',JSON.stringify(cartData));
      book.isAdded = true;
      alert("Added to cart");
    }
    else {
      alert("Already Added to cart")
    }
  }
  BuyNow(id) {

  }

  constructor( private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let bookId:number = this.activatedRoute.snapshot.params['id'];
    this.books.map(book=>  {
      
      if(book.id == bookId) {
        console.log(typeof(book.id));
        console.log(typeof(bookId));
        this.selectedBook=book;
        console.log("test",book)
        return book;
      }


    })

  }
}
