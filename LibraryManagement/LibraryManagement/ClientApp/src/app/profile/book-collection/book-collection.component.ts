import { Component, Input, OnInit } from '@angular/core';
import { BookCollection } from '../../interfaces/bookCollection';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent implements OnInit {

  @Input() collection!: BookCollection;

  constructor() { }

  ngOnInit(): void {
  }

}
