import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { User, UserDetails } from '../user.model';
import { UsersApiService } from '../users-api.service';
import * as UserActions from './user.action';
import { UserTypes } from './user.action';

@Injectable()
export class UserEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly usersApiService: UsersApiService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserTypes.Load),
      switchMap((action: { id: string }) => {
        return this.usersApiService.getUserById(action.id).pipe(
          map((response: { data: UserDetails }) => {
            console.log(response.data);
            return UserActions.Set({
              user: response.data,
            });
          }),
          catchError(() => of(UserActions.Set(null)))
        );
      })
    )
  );
}
