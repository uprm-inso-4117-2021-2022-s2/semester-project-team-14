import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  rootURL: string = '/api';

  constructor(
    private http: HttpClient,
  ) { }

  async getCurrentUser(userId: number) {
    return await this.http.get<User>(this.rootURL + '/user/' + userId.toString()).toPromise().then((result) => {
      return result;
    }).catch(error => { throw error });
  }


}
