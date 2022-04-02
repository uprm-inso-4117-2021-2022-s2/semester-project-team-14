import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookCopy } from '../../interfaces/bookCopy';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  rootURL: string = '/api';

  constructor(
    private http: HttpClient,
  ) { }

  async getBook(id: number) {
    return await this.http.get<BookCopy>(this.rootURL + '/book_copy/' + id.toString()).toPromise().then((result) => {
      return result;
    }).catch(error => { throw error });
  }
}
