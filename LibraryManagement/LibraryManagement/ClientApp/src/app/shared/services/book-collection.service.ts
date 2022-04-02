import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookCollection } from '../../interfaces/bookCollection';

@Injectable({
  providedIn: 'root'
})
export class BookCollectionService {


  rootURL: string = '/api';

  constructor(
    private http: HttpClient,
  ) { }

  async getBookCollection(id: number) {
    return await this.http.get<BookCollection>(this.rootURL + '/bookcollection/' + id.toString()).toPromise().then((result) => {
      return result;
    }).catch(error => { throw error });
  }
}
