import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() reloadBookshelf = new EventEmitter();


  selectedBooks: Book[] = [];
  selectedUserName: string;
  selectedUserId: number;
  CartBooks: Book[];

  constructor( private bookService: BookService,
    private cartService: CartService,
    private userService: UserService) { }

  ngOnInit() {
     this.selectedUserId = this.userService.currentUserId;
    this.selectedUserName = this.userService.selectedUserName;
    this.CheckCartBooks();

  }


  LoanBook() {

    this.CheckCartBooks();

    if (this.book.loanedTo !== this.selectedUserId) {
      if (this.CartBooks.filter(item => item.bookId == this.book.bookId).length == 0) {
        this.bookService.LoanBook(this.book, this.selectedUserId)
          .subscribe(
            data => {
              //this.getBooks();
              this.reloadBookshelf.emit();
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
}