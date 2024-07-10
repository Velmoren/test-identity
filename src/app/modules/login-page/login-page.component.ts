import { ChangeDetectionStrategy, Component } from '@angular/core';
import { loginPending, UserModel } from 'mf-auth-lib';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mf-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  public model: UserModel = {
    login: '',
    password: ''
  }

  constructor(private _store: Store) {
  }

  loginForm() {
    this._store.dispatch(loginPending({user: structuredClone(this.model)}))
  }
}
