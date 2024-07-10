import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ButtonModule } from 'myrta-ui';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoginPageRoutingModule,
    StoreModule.forFeature('login', {}),
    EffectsModule.forFeature([]),
    ButtonModule
  ]
})
export class LoginPageModule { }
