import { Component, OnInit } from '@angular/core';
import { AuthFacade } from './core/layout/auth-layout/store/auth/auth-facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authFacade: AuthFacade) {}
  title = 'social_face';

  ngOnInit() {
    this.authFacade.getCurrentUser();
  }
}
