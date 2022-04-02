import { BookCopy } from "./bookCopy";
import { User } from "./user";

export interface InterlibraryLoan {
  id: number;
  bookId: number;
  borrowedDate: Date;
  returnDate: Date;
  returned: boolean;
  borrowerId: number;
}
