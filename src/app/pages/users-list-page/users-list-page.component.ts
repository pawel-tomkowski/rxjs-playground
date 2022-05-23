import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/store/user.model';
import { UsersService } from 'src/app/store/users/users.service';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss'],
})
export class UsersListPageComponent implements OnDestroy {
  users$: Observable<User[]>;
  selectedPage$: Observable<number>;
  totalPages$: Observable<number>;

  resultsLength = 0;

  displayedColumns: string[] = ['first_name', 'last_name', 'actions'];
  takeUntilSubject$ = new Subject();

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {
    this.users$ = this.usersService.users$;
    this.selectedPage$ = this.usersService.selectedPage$;
    this.totalPages$ = this.usersService.totalPages$;
    this.selectedPage$
      .pipe(takeUntil(this.takeUntilSubject$))
      .subscribe((page) => {
        this.usersService.loadUsers(page);
      });
  }

  changePage(page: number) {
    this.usersService.loadUsers(page);
  }

  navigateToDetailsClick(id: string) {
    this.router.navigateByUrl('user-details/' + id);
  }

  ngOnDestroy(): void {
    this.takeUntilSubject$.next(true);
  }
}
