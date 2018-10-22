import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';



import { AppComponent } from './app.component';
import { ShelfComponent } from './shelf/shelf.component';
import { HomeComponent } from './Home/Home.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';
import { BookComponent } from './book/book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    ShelfComponent,
    HomeComponent,
    CartComponent,
    RegisterComponent,
    BookComponent,
    NavbarComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatToolbarModule, MatButtonModule, MatIconModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
