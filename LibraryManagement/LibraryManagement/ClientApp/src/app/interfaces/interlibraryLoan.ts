import { BookCopy } from "./bookCopy";
import { User } from "./user";

export interface InterlibraryLoan {
  bookId: string;
  borrowedDate: Date;
  returnDate: Date;
  returned: boolean;
  borrowerId: string;
}
