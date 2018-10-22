import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShelfComponent } from './shelf/shelf.component';
import { HomeComponent } from './Home/Home.component';
import { RegisterComponent } from './register/register.component';
import { IntroductionComponent } from './introduction/introduction.component';



const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shelf', component: ShelfComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'introduction', component: IntroductionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
