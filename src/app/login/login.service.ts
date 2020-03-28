import {BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private nameSource = new BehaviorSubject<string>("");
  currentUser = this.nameSource.asObservable();

  constructor() { }

  setUserName(username: string){
    this.nameSource.next(username);
  }
}