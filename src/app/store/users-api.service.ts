import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private readonly httpClient: HttpClient) {}

  getUsers(page = 1) {
    return this.httpClient.get(ApiConfig.ALL_USERS, {
      params: {
        page,
      },
    });
  }
}

export enum ApiConfig {
  ALL_USERS = 'https://reqres.in/api/users',
}
