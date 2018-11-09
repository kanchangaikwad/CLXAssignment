import { Injectable, EventEmitter, Output } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of, Subject } from 'rxjs';
import { Users } from './mockUsers';
import { catchError } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  USERS: User[] = [];
  currentUserId: number;
  selectedUserObj: User;
  selectedUserName: string;
  baseURLUser = 'http://localhost:10642/api/user/';



  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
      this.emitChangeSource.next(change);
  }


  constructor(private http: HttpClient,
              private router: Router) {
    this.getUsers().subscribe(u => this.USERS = u);

  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURLUser + 'GetUsers');
  }

  setUser(usrId: number): void {
    if (usrId) {
    this.currentUserId = usrId;
    this.selectedUserObj = this.USERS.find(u => u.userId == usrId);
    this.selectedUserName = this.selectedUserObj.firstName;
   
  }  else {
    this.currentUserId = null;
    this.selectedUserObj = null;
    this.selectedUserName = null;
  }

  }



  getSelectedUserName(id: number): string {

    const currUser = this.USERS.find(u => u.userId == id);
    if (currUser != null || currUser != undefined ) {
    console.log(currUser.firstName);
    this.selectedUserName = currUser.firstName;
    console.log('users:' + JSON.stringify(this.USERS));
    return this.selectedUserName;
    }
  }


  registerUser(user: User): void {
    // book.loanedTo = parseInt(userId.toString());
    console.log(user);
    this.http.post(this.baseURLUser + 'adduser', user).subscribe(
      data => {
          console.log('registerUser() PUT Request is successful', data);
          this.router.navigateByUrl('/home');
      }, error => {
          console.log('registerUser() Error', error);
      });
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
