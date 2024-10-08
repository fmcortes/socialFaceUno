import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { authGuard } from './core/providers/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./routes/auth/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./routes/auth/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./routes/auth/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
    ],
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./routes/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'profile/:slug',
        loadChildren: () =>
          import('./routes/home/routes/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'posts/:slug',
        loadChildren: () =>
          import('./routes/home/routes/posts/posts.module').then(
            (m) => m.PostsModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./routes/home/routes/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'friends',
        loadChildren: () =>
          import('./routes/home/routes/friends/friends.module').then(
            (m) => m.FriendsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
