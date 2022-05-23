import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.action';
import { User, UserDetails } from '../user.model';
const initialState: UserDetails = null;

export const UserReducer = createReducer(
  initialState,
  on(UserActions.Set, (state, payload) => {
    return payload.user;
  })
);

export default function reducer(
  state: UserDetails,
  action: Action
): UserDetails {
  return UserReducer(state, action);
}
