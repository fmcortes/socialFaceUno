import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { LoginRequestInterface } from "src/app/core/types/login-request.interface";
import { authActions } from "./actions";

@Injectable()
export class AuthFacade {
  constructor(private store: Store){}

  login(request: LoginRequestInterface) {
    console.warn('Im loggin in', request);
    this.store.dispatch(authActions.login({request}));
  }

}