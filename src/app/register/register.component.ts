import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  contactNo: new FormControl(''),
  address: new FormControl(''),
});


 submitted = false;
  user: User;
  firstName: any;
  lastName: any;
  contactNo: any;
  address: any;
  constructor( private formmuilder: FormBuilder,
               private userService: UserService,
               private notificationService: NotificationService) { }

  ngOnInit() {
    this.registerForm = this.formmuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      contactNo: ['', Validators.required],
      address: ['']
  });
}

get f() {return this.registerForm.controls; }

onSubmit() {
   const result: User = Object.assign({}, this.registerForm.value);
   this.registerUser(result);
    this.clearForm();
    this.notificationService.showSuccess('Registered successfuly, now you can select your name from the list', 'Success', 5000);

}

  registerUser(user: User): void {
      this.userService.registerUser(user);
  }

  clearForm() {
   this.registerForm.reset();
  }
}
