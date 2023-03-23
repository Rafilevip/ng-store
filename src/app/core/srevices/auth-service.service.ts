import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  public isAuth(user: User) {
    if (this.storage.getData('user').email == user.email) {
      return true;
    }
    return false;
  }
}
