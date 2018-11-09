import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUserName: string;
  constructor(private userService: UserService) {
    userService.changeEmitted$.subscribe(
      data => {
         // console.log(text);
         this.currentUserName = data;
      });
   }

  ngOnInit() {
  }

}
