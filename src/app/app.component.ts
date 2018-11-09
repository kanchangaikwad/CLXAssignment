import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from './user.service';
import 'hammerjs';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  title = 'CLXBookShelf';
  LoggedinUser = '';
  loggedinUser:string= '';
  badgeCount: number;
  constructor(private userService: UserService,
              private cartService: CartService) {
              this.badgeCount = cartService.badgeBooksCount;
               this.LoggedinUser = this.userService.selectedUserName;
  }

  ngOnInit() {
    this.LoggedinUser = this.userService.selectedUserName;
    this.badgeCount = this.cartService.badgeBooksCount;

    console.log(this.LoggedinUser);
  }

}
