import { Component, OnInit } from '@angular/core';
import {UsersService } from '../users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name;
  email;
  password;
  address;
  city;
  constructor(private us: UsersService) { }
 
  ngOnInit() {
  }
  addData() {
    this.us.addData(this.name,this.email,this.password,this.address,this.city,);
    // console.log(this.name)
}
 
}