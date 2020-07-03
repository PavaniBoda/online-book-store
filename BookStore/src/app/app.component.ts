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
    //console.log(this.activatedRoute.snapshot.url); // array of states
    //console.log(this.activatedRoute.snapshot.url[0].path);
    console.log(window.location.pathname)
    //this.router.events.pipe(
      //filter((event: Event) => event instanceof NavigationEnd)
     // )
    //.subscribe(event => console.log('this is what your looking for ', event.url));
  }
}
