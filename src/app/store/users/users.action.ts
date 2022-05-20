import { createAction, props } from '@ngrx/store';
import { User } from '../user.model';

export enum UsersTypes {
  Set = '[Users] Set',
  Load = '[Users] Load',
}

export const Set = createAction(UsersTypes.Set, props<{ users: User[] }>());
export const Load = createAction(UsersTypes.Load);
