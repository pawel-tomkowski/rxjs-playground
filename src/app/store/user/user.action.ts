import { createAction, props } from '@ngrx/store';
import { User, UserDetails } from '../user.model';

export enum UserTypes {
  Set = '[User] Set',
  Load = '[User] Load',
}

export const Set = createAction(UserTypes.Set, props<{ user: UserDetails }>());
export const Load = createAction(UserTypes.Load, props<{ id: string }>());
