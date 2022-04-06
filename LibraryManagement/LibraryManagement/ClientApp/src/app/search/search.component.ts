import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookCollection } from '../interfaces/bookCollection';
import { BookCopy } from '../interfaces/bookCopy';
import { InterlibraryLoan } from '../interfaces/interlibraryLoan';
import { User } from '../interfaces/user';
import { BookService } from '../shared/services/book.service';
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
  
  bookLoaded: boolean = false;
  defaultPageSize = 5
  allBooks: BookCopy[] = []
  totalBooksFound: number = 0;


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
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.loadBooks();
  }

  reloadData() {
    this.totalBooksFound = this.dataSource.filteredData.length;
    this.currentBooks = this.dataSource.filteredData.slice(Math.max(Math.min(0, this.dataSource.filteredData.length), 0), Math.min(this.defaultPageSize, this.dataSource.filteredData.length));
  }

  loadBooks() {
    this.bookService.getBooks().then(currBooks => {
      if (currBooks) {
        this.allBooks = currBooks;
        this.totalBooksFound = currBooks.length;
        this.bookLoaded = true;

        this.dataSource = new MatTableDataSource(this.allBooks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;

        this.reloadData();
      }
    });
  }

  filterData($event : any) {
    this.dataSource.filter = $event.target.value;
    this.reloadData();
  }

  handlePaginator($event: PageEvent): void {


    const lowConstraint = Math.max(Math.min(($event.pageIndex * $event.pageSize), this.dataSource.filteredData.length - 1), 0); 
    const upperConstraint = Math.min(($event.pageIndex * $event.pageSize) + $event.pageSize, this.dataSource.filteredData.length); 

    console.log(lowConstraint);
    console.log(upperConstraint);
    this.currentBooks = this.dataSource.filteredData.slice(lowConstraint, upperConstraint);
}
}
