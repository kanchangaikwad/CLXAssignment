import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CLXBookShelf';
  LoggedinUser = '';

  constructor(private userService: UserService) {
    this.LoggedinUser = this.userService.selectedUserName;
  }

  ngOnInit() {
    this.LoggedinUser = this.userService.selectedUserName;
    console.log(this.LoggedinUser);
  }

}
