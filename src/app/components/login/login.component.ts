import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { AuthServiceService } from 'src/app/core/srevices/auth-service.service';
import { StorageService } from 'src/app/core/srevices/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthServiceService,
    private storage: StorageService
  ) {}

  public onSubmit(loginForm: NgForm): void {
    this.storage.setData('user', loginForm.value);
    this.authService.isAuth(loginForm.value);
    console.log(this.authService.isAuth(loginForm.value));
  }
}
