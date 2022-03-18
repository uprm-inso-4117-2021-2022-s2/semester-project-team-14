import { BookCopy } from "./bookCopy";
import { User } from "./user";

export interface InterlibraryLoan {
  book: BookCopy;
  borrowedDate: Date;
  returnDate: Date;
  returned: boolean;
  borrower: User;
}
