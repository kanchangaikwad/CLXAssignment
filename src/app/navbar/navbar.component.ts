import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() loggedinUser: string;
  @Input() cartcount: number;

  constructor() { }

  ngOnInit() {
  }


  setLoggedinUser(data) {
    console.log(data);
  }
}
