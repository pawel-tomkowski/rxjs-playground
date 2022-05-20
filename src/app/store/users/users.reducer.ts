import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.action';
import { User } from '../user.model';
const initialState: UsersState = {
  data: [],
  totalPages: 999,
  page: 1,
};

export const UsersReducer = createReducer(
  initialState,
  on(UsersActions.Set, (state, payload) => {
    return payload;
  })
);

export default function reducer(state: UsersState, action: Action): UsersState {
  return UsersReducer(state, action);
}

export interface UsersState {
  data: User[];
  page: number;
  totalPages: number;
}
