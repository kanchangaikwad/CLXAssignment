import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
 test : string;
  user: User;
  firstName: any;
  lastName: any;
  contactNo: any;
  address: any;
  constructor( private formmuilder: FormBuilder,
               private userService: UserService) { }

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
  // TODO: Use EventEmitter with form value
  const result: User = Object.assign({}, this.registerForm.value);
  console.log('Enter value : ' + JSON.stringify(result));
  this.registerUser(result);
  this.clearForm();

}

  registerUser(user: User): void {
      this.userService.registerUser(user);
  }

  clearForm() {
   this.registerForm.reset();
  }
}
