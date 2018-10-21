import { Injectable } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedBooks: Book[];
  badgeBooksCount: number;
  constructor(private bookService: BookService,
    private userService: UserService) {
  }

  AddBookToCart(book: Book, userId: number): void {

    if ((book.loanedTo != userId) && (this.selectedBooks.filter( item => item.bookId == book.bookId).length > 0)) {
      book.loanedTo = userId;
      this.selectedBooks.push(book);
      this.badgeBooksCount = this.selectedBooks.length;
      console.log(this.selectedBooks.length);
    } else {
      alert('Already added in a cart.');
    }
  }

  LoadCartForUser(): Observable<Book[]> {
    return this.bookService.getBooks();
  }

  ReturnBookfromCart(book: Book): void {
    // const index: number = this.selectedBooks.indexOf(book);
    // console.log(JSON.stringify(book));    
    // if (index !== -1) {
    //   this.selectedBooks.splice(index, 1);
    // }


  }

}
