import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { User } from '../user';
import { Book } from '../book';

import { BookService } from '../book.service';
import { UserService } from '../user.service';

import { empty } from 'rxjs';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';




@Component({
    selector: 'app-home',
    templateUrl : './Home.component.html',
    styleUrls: ['./Home.component.css']
})

export class HomeComponent implements OnInit {

    @Output() captureCurrentUser = new EventEmitter<string>();

    @Output() valueChange = new EventEmitter();

   
    currentLoggedInuser:string;

    users: User[];
    selectedUserId: number;
    constructor(private bookService: BookService ,
                private userService: UserService,
                private cartService: CartService,
                private router: Router) {
        this.users = userService.USERS;
        console.log(JSON.stringify(this.users));
    }
    ngOnInit() {
        this.setUserId(null);
        this.cartService.selectedBooks = null;
        this.getUsersInfo();
        if (this.selectedUserId == undefined) {

        }
    }
    getUsersInfo(): void {
        this.userService.getUsers().subscribe(users => { this.users = users; });
    }

    setUserId(userId: number): void {
        this.userService.emitChange(' Guest ');
        this.userService.setUser(userId);
        if(userId) {
              this.userService.emitChange(this.userService.selectedUserName);
              this.router.navigateByUrl('/shelf');
        }
    }

}
