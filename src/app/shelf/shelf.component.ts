import { Component, OnInit } from '@angular/core';

import { Book } from '../book';

import { CartService } from '../cart.service';
import { BookService } from '../book.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  books: Book[];
  selectedBooks: Book[] = [];
  selectedUserName: string;
  selectedUserId: number;
  CartBooks: Book[];


  constructor(
    private bookService: BookService,
    private cartService: CartService,
    private userService: UserService) { }

  LoanBook(book) {

    this.CheckCartBooks();

    if (book.loanedTo !== this.selectedUserId) {
      if (this.CartBooks.filter(item => item.bookId == book.bookId).length == 0) {
        this.bookService.LoanBook(book, this.selectedUserId)
          .subscribe(
            data => {
              this.getBooks();
            }, error => {
              console.log('LoanBook() error', error);
            }
          );
      } else {
        alert('Already added in a cart.');
      }
    } else {
      alert('Already added in a cart.');
    }

    //this.cartService.AddBookToCart(book, this.selectedUserId);
  }

  CheckCartBooks(){
    this.cartService.LoadCartForUser().subscribe(
      books => {
        this.CartBooks = books.filter(b => b.loanedTo == this.selectedUserId)
      }
    );
  }

  ngOnInit() {
    this.getBooks();
    this.selectedUserId = this.userService.currentUserId;
    this.selectedUserName = this.userService.selectedUserName;
    this.CheckCartBooks();
  }

  getBooks() {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

}
