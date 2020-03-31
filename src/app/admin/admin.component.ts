import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
username: string;

  constructor(private router: Router, private data: LoginService) { }
  ngOnInit() {
    this.data.currentUser.subscribe(username => this.username = username)
  }

  addNewBook(): void {
    this.router.navigate(["addbook"]);
  }

}