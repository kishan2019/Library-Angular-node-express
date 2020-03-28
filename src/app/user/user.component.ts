import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;

  constructor( private data: LoginService) { }


ngOnInit(){
  this.data.currentUser.subscribe(username => this.username = username)
 }
 
}