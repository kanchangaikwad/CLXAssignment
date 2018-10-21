import { Injectable } from '@angular/core';
import { Book } from './book';
import { Books } from './mockBooks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Http, RequestMethod, RequestOptions } from '@angular/http';
import { map, catchError, tap } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';




@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseURLBooks = 'http://localhost:10642/api/books/';
  BOOKS: Book[];
  constructor(private messageService: MessageService, private http: Http, private httpClient: HttpClient) {
    this.getBooks().subscribe(b => this.BOOKS = b);

  }

  getBooks(): Observable<Book[]> {
    const data = this.httpClient.get<Book[]>(this.baseURLBooks + 'GetBooks');
    // console.log(data);
    return data;
  }

  LoanBook(book: Book, userId: number): Observable<any> {
    book.loanedTo = userId;
   return this.httpClient.put(this.baseURLBooks + 'loanbook', book);
  }


 ReturnBook(book: Book): Observable<any> {
    book.loanedTo = null;
    return this.http.put(this.baseURLBooks + 'returnbook', book);

  }

}
