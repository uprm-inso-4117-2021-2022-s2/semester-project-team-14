import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookCollection } from '../interfaces/bookCollection';
import { BookCopy } from '../interfaces/bookCopy';
import { InterlibraryLoan } from '../interfaces/interlibraryLoan';
import { User } from '../interfaces/user';
import { AuthenticationService } from '../shared/services/authentication.service';
import { BookCollectionService } from '../shared/services/book-collection.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  displayedColumns = ['id','title','author','status','rating','category','isbn','history']
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  
  // bookLoaded: boolean = false;

  //TEMP:
  currentBooks: BookCopy[] = [{
    id: 0,
    title: "Pain",
    author: "Elsaid",
    status: "Borrowed",
    rating: "R",
    category: "horror",
    isbn: "",
    history: 1
  },
  {
    id: 1,
    title: "Pain",
    author: "Elsaid",
    status: "Borrowed",
    rating: "R",
    category: "horror",
    isbn: "",
    history: 1},
  {id: 2,
    title: "Pain",
    author: "Elsaid",
    status: "Borrowed",
    rating: "R",
    category: "horror",
    isbn: "",
    history: 1},
      
  {
    id: 3,
    title: "Pain",
    author: "Elsaid",
    status: "Borrowed",
    rating: "R",
    category: "horror",
    isbn: "",
    history: 1}
  ]


  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.dataSource =  new MatTableDataSource(this.currentBooks);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort;

    // this.loadBooks();

  }

  // loadBooks() {
  //   this.authService.getBooks(1).then(currBook => {
  //     if (currBook) {
  //       this.currentBooks = currBook;
  //       console.log(this.currentBooks);
  //       this.bookLoaded = true;
  //     }
  //   });


  filterData($event : any) {
    this.dataSource.filter = $event.target.value;
  }
}
