import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BOOKS } from '../mock-book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartData: Array<Book>;
  itemsprice: number = 0;
  tax: number = 0;
  deliveryCharge: number = 0;
  total: number = 0;
  showPayment: boolean = false;
  showCart: boolean = true;
  books = BOOKS;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.cartData);
    let bookId: number = this.activatedRoute.snapshot.params['id'];
    this.books.map(book => {
      if (book.id == bookId) {
        let cartData = [];
        let book1 = null;
        let bookData = localStorage.getItem("cart");
        if (bookData !== null) {
          cartData = JSON.parse(bookData);
          book1 = cartData.find(book => {
            return book.id === +bookId;
          });

        }
        if(book1==null){
          cartData.push(book);
        }
        
        localStorage.setItem('cart', JSON.stringify(cartData));
      }
    })
    let cartDataRes = localStorage.getItem("cart");
    if (cartDataRes !== null || cartDataRes !== undefined) {
      this.cartData = JSON.parse(cartDataRes);
      this.showPayment = true;
      (this.cartData || []).map(item => {
        return this.itemsprice = this.itemsprice + item.price;
        // return cost + item.price
      })
      console.log("price", this.itemsprice);
      this.tax = this.itemsprice * 5 / 100;
      this.deliveryCharge = this.itemsprice * 2 / 100;
      this.total = this.itemsprice + this.tax + this.deliveryCharge;
    } 
    console.log(this.cartData);
  }
  checkout() {
      this.cartData.map(item => {
        item.isAdded = false;
        item.purchased = true;
      })
      localStorage.setItem('checkout', JSON.stringify(this.cartData));
      localStorage.removeItem('cart');
      console.log("checkout", localStorage.getItem('checkout'));
    }
}

