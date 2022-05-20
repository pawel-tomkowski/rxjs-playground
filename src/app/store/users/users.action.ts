import { createAction, props } from '@ngrx/store';
import { User } from '../user.model';
import { UsersState } from './users.reducer';

export enum UsersTypes {
  Set = '[Users] Set',
  Load = '[Users] Load',
}

export const Set = createAction(UsersTypes.Set, props<UsersState>());
export const Load = createAction(
  UsersTypes.Load,
  props<{ selectedPage: number }>()
);
