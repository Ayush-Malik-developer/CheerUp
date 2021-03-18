import { Injectable } from '@angular/core';
import { USERS } from '../shared/Users';
import { sign_up } from '../shared/signupform';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }

  getUser(email:string,password:string): sign_up {
    return USERS.filter((user) => ((user.email === email) && (user.password === password)))[0];
  }
}
