import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BookStore';
  flag = true;
  public href: string = "";

  cartBooksLength = 0;

  constructor( private router: Router, private activatedRoute: ActivatedRoute){}
  ngOnInit(): void{
    localStorage.clear();
    
  }
}
