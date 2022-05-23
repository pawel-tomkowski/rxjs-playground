import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, UserDetails } from '../user.model';
import { Load } from './user.action';
import { USER } from './user.const';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$ = this.store.select(USER);

  constructor(private store: Store<{ user: UserDetails }>) {}

  loadUser(id: string) {
    this.store.dispatch(Load({ id }));
  }
}
