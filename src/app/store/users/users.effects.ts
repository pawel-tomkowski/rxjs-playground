import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UsersApiService } from '../users-api.service';
import * as UsersActions from './users.action';
import { UsersTypes } from './users.action';

@Injectable()
export class UsersEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly usersApiService: UsersApiService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersTypes.Load),
      switchMap((action) => {
        return this.usersApiService.getUsers().pipe(
          map((response) => {
            console.log(action);
            console.log(response);
            return UsersActions.Set(null);
          }),
          catchError(() => of(UsersActions.Set(null)))
        );
      })
    )
  );
}
