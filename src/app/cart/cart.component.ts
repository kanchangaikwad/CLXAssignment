

import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { CartService } from '../cart.service';
import { BookService } from '../book.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedBooks: Book[];
  selectedUserName: string;
  selectedUserId: number;

  constructor(private bookService: BookService,
    private cartService: CartService,
    private userService: UserService) {
    this.selectedBooks = this.cartService.selectedBooks;
  }

  getSelectedBooks() {
    return this.selectedBooks;
  }

  BookReturn(book) {
    let response;
    this.bookService.ReturnBook(book)
      .subscribe(resp => {

        response = resp;
        this.cartService.LoadCartForUser().subscribe(
          books => {
            this.selectedBooks = books.filter(b => b.loanedTo == this.selectedUserId)
          }
        );
      });
  }

  ngOnInit() {
    this.selectedUserName = this.userService.selectedUserName;
    this.selectedUserId = this.userService.currentUserId;

    console.log(this.selectedUserId);
    console.log(this.selectedBooks);
    if (this.selectedUserId > 0) {
      this.cartService.LoadCartForUser().subscribe(
        books => {
          this.selectedBooks = books.filter(b => b.loanedTo == this.selectedUserId);
        }

      );
    }

  }

}
