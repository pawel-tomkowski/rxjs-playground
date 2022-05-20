import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { User } from '../user.model';
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
      switchMap((action: { selectedPage: number }) => {
        return this.usersApiService.getUsers(action.selectedPage).pipe(
          map(
            (response: { data: User[]; page: number; total_pages: number }) => {
              return UsersActions.Set({
                data: response.data,
                page: response.page,
                totalPages: response.total_pages,
              });
            }
          ),
          catchError(() => of(UsersActions.Set(null)))
        );
      })
    )
  );
}
