import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BookCopy } from '../../../interfaces/bookCopy';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book!: BookCopy;

  books: BookCopy[] = [];
  dataSource: MatTableDataSource<BookCopy> = new MatTableDataSource<BookCopy>();

  columns: string[] = [
    "title",
    "author",
    "isbn",
    "rating",
    "category"
  ];

  constructor() { }

  ngOnInit(): void {
    this.books.push(this.book);
    this.dataSource = new MatTableDataSource(this.books);
  }

}
