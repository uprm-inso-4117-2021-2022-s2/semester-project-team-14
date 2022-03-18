import { Component, OnInit } from '@angular/core';
import { BookCollection } from '../interfaces/bookCollection';
import { InterlibraryLoan } from '../interfaces/interlibraryLoan';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  //TEMP:
  mockInterlibraryLoan: InterlibraryLoan = {
    bookId: "xx",
    borrowedDate: new Date(),
    returnDate: new Date(),
    returned: true,
    borrowerId: "xx",
}
  mockBookCollection: BookCollection = {
    currentlyBorrowed: [{
      id: "01",
      name: "BookName01",
      author: "AuthorName01",
      isbn: "x-xxxxxxx-x-X",
      status: "borrowed",
      history: [this.mockInterlibraryLoan],
      rating: "PG",
      category: "fiction"
    },
    {
      id: "02",
      name: "BookName02",
      author: "AuthorName02",
      isbn: "x-xxxxxxx-x-X",
      status: "borrowed",
      history: [this.mockInterlibraryLoan],
      rating: "PG",
      category: "fiction"
    }    ],
    wishlist: [{
      id: "03",
      name: "BookName03",
      author: "AuthorName03",
      isbn: "x-xxxxxxx-x-X",
      status: "available",
      history: [this.mockInterlibraryLoan],
      rating: "PG",
      category: "fiction"
    }],
    returned: [{
      id: "04",
      name: "BookName04",
      author: "AuthorName04",
      isbn: "x-xxxxxxx-x-X",
      status: "borrowed",
      history: [this.mockInterlibraryLoan],
      rating: "PG",
      category: "fiction"
    },
      {
      id: "05",
      name: "BookName05",
      author: "AuthorName05",
      isbn: "x-xxxxxxx-x-X",
      status: "borrowed",
      history: [this.mockInterlibraryLoan],
      rating: "PG",
      category: "fiction"
      },
      {
      id: "06",
      name: "BookName06",
      author: "AuthorName06",
      isbn: "x-xxxxxxx-x-X",
      status: "borrowed",
      history: [this.mockInterlibraryLoan],
      rating: "PG",
      category: "fiction"
      }    ]
  }

  //TEMP:
  currentUser = {
    id: "mock id",
    name: "Mock User",
    email: "mockuser@abc.com",
    bookCollection: this.mockBookCollection,
    accountType: "patron"
  }

  constructor() { }

  ngOnInit() {
    //TODO: get user info from service when we have the database

  }

}
