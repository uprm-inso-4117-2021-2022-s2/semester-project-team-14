import { Component, Input, OnInit } from '@angular/core';
import { BookCollection } from '../../interfaces/bookCollection';
import { BookCopy } from '../../interfaces/bookCopy';
import { BookCollectionService } from '../../shared/services/book-collection.service';
import { BookService } from '../../shared/services/book.service';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {

  @Input() collectionId!: number;


  currentlyBorrowed: BookCopy[] = [];
  returned: BookCopy[] = [];
  wishlist: BookCopy[] = [];

  constructor(
    private bookCollectionService: BookCollectionService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  private loadBooks() {
    console.log(this.collectionId);
    return this.bookCollectionService.getBookCollection(this.collectionId).then(coll => {
        if (coll) {
          console.log(coll);
          for (let bookId of coll.currently_borrowed) {
            this.bookService.getBook(bookId).then(book => {
              if (book) {
                this.currentlyBorrowed.push(book);
              }
            });
          }

          for (let bookId of coll.returned) {
            this.bookService.getBook(bookId).then(book => {
              if (book) {
                this.returned.push(book);
              }
            });
          }

          for (let bookId of coll.wishlist) {
            this.bookService.getBook(bookId).then(book => {
              if (book) {
                this.wishlist.push(book);
              }
            });
          }
        }
      });
   }
}
