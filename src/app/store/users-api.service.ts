import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private readonly httpClient: HttpClient) {}

  getUsers(page = 1) {
    return this.httpClient.get(ApiConfig.USERS, {
      params: {
        page,
      },
    });
  }

  getUserById(id: string) {
    return this.httpClient.get(ApiConfig.USERS + `/${id}`);
  }
}

export enum ApiConfig {
  USERS = 'https://reqres.in/api/users',
}
