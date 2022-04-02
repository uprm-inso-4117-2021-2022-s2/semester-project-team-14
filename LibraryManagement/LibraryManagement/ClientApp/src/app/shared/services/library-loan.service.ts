import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterlibraryLoan } from '../../interfaces/interlibraryLoan';

@Injectable({
  providedIn: 'root'
})
export class LibraryLoanService {


  rootURL: string = '/api';

  constructor(
    private http: HttpClient,
  ) { }

  async getLoan(id: number) {
    return await this.http.get<InterlibraryLoan>(this.rootURL + '/interlibraryloan/' + id.toString()).toPromise().then((result) => {
      return result;
    }).catch(error => { throw error });
  }
}
