import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User, UserDetails } from 'src/app/store/user.model';
import { UserService } from 'src/app/store/user/user.service';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss'],
})
export class UserDetailsPageComponent implements OnInit {
  user$: Observable<UserDetails>;
  constructor(
    private readonly userService: UserService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userService.loadUser(params['id']);
    });
    this.user$ = this.userService.user$;
  }
}
