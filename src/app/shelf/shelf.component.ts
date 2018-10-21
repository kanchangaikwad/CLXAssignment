import { Component, OnInit } from '@angular/core';

import { Book } from '../book';

import { CartService } from '../cart.service';
import { BookService } from '../book.service';
import { UserService } from '../user.service';
import { NotificationService } from '../notification.service';

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
  badgeCount: number = 0;


  constructor(
    private bookService: BookService,
    private cartService: CartService,
    private userService: UserService,
    private notificationService: NotificationService) { }

  CheckCartBooks() {
    if (this.selectedUserId > 0) {
      this.cartService.LoadCartForUser().subscribe(
        books => {
          this.CartBooks = books.filter(b => b.loanedTo == this.selectedUserId);
          this.badgeCount = this.CartBooks.length;
        }
      );
    }
  }

  ngOnInit() {

    this.getBooks();
    this.selectedUserId = this.userService.currentUserId;
    this.selectedUserName = this.userService.selectedUserName;
    if (!this.selectedUserName) {
      this.notificationService.showWarning('User not identified.', 'Alert !', 3000);
    }
    this.CheckCartBooks();
  }

  getBooks() {
    this.bookService.getBooks()
      .subscribe(books =>        {
        this.books = books;
        this.CheckCartBooks();
      } );
  }

}
