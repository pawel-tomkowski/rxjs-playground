import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.action';
import { User } from '../user.model';
const initialState: User[] = [];

export const UsersReducer = createReducer(
  initialState,
  on(UsersActions.Set, (state, payload) => {
    return payload.users;
  })
);

export default function reducer(state: User[], action: Action): User[] {
  return UsersReducer(state, action);
}
