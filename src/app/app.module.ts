import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { SpinnerInterceptor } from './core/providers/spinner.interceptor';
import { StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { authInterceptor } from './shared/services/authinterceptor';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { userProfileReducer } from './routes/home/routes/profile/store/reducers';

import * as userProfileEffects from './routes/home/routes/profile/store/effects';


import { UserProfileService } from './routes/home/routes/profile/services.ts/user-profile.service';
import { PostService } from './shared/services/posts.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    EffectsModule.forRoot([userProfileEffects]),
    StoreModule.forRoot(
      { router: routerReducer, userProfile: userProfileReducer },
      {}
    ),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideHttpClient(withInterceptors([authInterceptor])),
    UserProfileService,
    PostService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
