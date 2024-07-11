import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthModule } from 'mf-auth-lib';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      AuthModule,
      StoreModule.forRoot({}),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([]),
    ),
    {provide: APP_BASE_HREF, useValue: '/test-identity/'}
  ]
};
