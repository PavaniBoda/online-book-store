import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  orderedBooks:Array<Book>;


  constructor() { }

  ngOnInit(): void {
    
    let orderedBookres = localStorage.getItem('checkout');
    if(orderedBookres !== null || orderedBookres!== undefined) {
      this.orderedBooks = JSON.parse(orderedBookres);
    }
    console.log('order',this.orderedBooks)
  }

}
