import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/store/user.model';
import { Load } from 'src/app/store/users/users.action';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.scss'],
})
export class UsersListPageComponent implements OnInit {
  constructor(private store: Store<{ users: User[] }>) {}

  ngOnInit(): void {
    this.store.dispatch(Load());
  }
}
