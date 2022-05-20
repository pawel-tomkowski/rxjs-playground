import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, map } from 'rxjs';
import { User } from '../user.model';
import { Load } from './users.action';
import { USERS } from './users.conts';
import { UsersState } from './users.reducer';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users$ = this.store
    .select(USERS)
    .pipe(map((state: UsersState) => state.data));

  totalPages$ = this.store
    .select(USERS)
    .pipe(map((state: UsersState) => state.totalPages));

  selectedPage$ = this.store.select(USERS).pipe(
    map((state: UsersState) => state.page),
    distinctUntilChanged()
  );

  constructor(private store: Store<{ users: UsersState }>) {}

  loadUsers(selectedPage = 1) {
    this.store.dispatch(Load({ selectedPage }));
  }
}
