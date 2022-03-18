import { Component, Input, OnInit } from '@angular/core';
import { BookCollection } from '../../interfaces/bookCollection';
import { BookCopy } from '../../interfaces/bookCopy';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {

  @Input() collection!: BookCollection;

  borrowed: BookCopy[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
