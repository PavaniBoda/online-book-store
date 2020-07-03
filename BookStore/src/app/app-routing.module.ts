import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyordersComponent } from './myorders/myorders.component';
import { CartComponent } from './cart/cart.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'orders', component: MyordersComponent},
  { path: 'cart', component: CartComponent},
  { path: 'cart/:id', component: CartComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: 'home/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
