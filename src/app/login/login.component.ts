import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private data: LoginService) { }
  username: string;
  password: string;

  getUsername(form: NgForm) {
    if(form.invalid) return;
    this.username = form.value.username,
    this.password = form.value.password;
    this.currentUser();
    this.login(this.username, this.password)
}
login(user,password): void {
  if (user == 'admin' && password == 'admin') {
    this.router.navigate(["admin"]);
  } else {
    this.router.navigate(["user"]);
  }
}
  ngOnInit() {
    this.data.currentUser.subscribe(username => this.username = username)
  }

  currentUser(): void {
    this.data.setUserName(this.username);
  }
  
}