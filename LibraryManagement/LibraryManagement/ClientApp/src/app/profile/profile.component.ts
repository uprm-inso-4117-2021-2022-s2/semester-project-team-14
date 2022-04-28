import { Component, OnInit } from '@angular/core';
import { BookCollection } from '../interfaces/bookCollection';
import { InterlibraryLoan } from '../interfaces/interlibraryLoan';
import { User } from '../interfaces/user';
import { AuthenticationService } from '../shared/services/authentication.service';
import { BookCollectionService } from '../shared/services/book-collection.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  //TEMP:
  currentUser: User = {
    id: 0,
    name: "Mock User",
    email: "mockuser@abc.com",
    book_collection_id: 0,
    accountType: "patron",
    photoURL: ""
  }

  userLoaded: boolean = false;

  constructor(
    private authService: AuthenticationService, private router:Router
  ){ }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit() {
    //TODO: get user info from service when we have the database

    this.loadUser();

  }

  loadUser() {
    this.authService.getCurrentUser(1).then(currUser => {
      if (currUser) {
        this.currentUser = currUser;
        console.log(this.currentUser);
        this.userLoaded = true;
      }
    });

}
}
