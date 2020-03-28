import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userNameSource = new Subject<string>();
  user$ = this.userNameSource.asObservable();

  constructor() { }

  sendUserName(name: string){
    this.userNameSource.next(name);

  }
}
