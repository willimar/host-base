import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  getErrors(): any[] {
    const result: any[] = [];
    this.accountService.errorMessages.forEach(item => {
      result.push(item);
    });

    return result;
  }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }

}
