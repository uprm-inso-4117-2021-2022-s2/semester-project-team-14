import { InterlibraryLoan } from "./interlibraryLoan";

export interface BookCopy {
  id: number;
  title: string;
  author: string;
  isbn: string;
  status: string;
  history: number;      //CHANGED FOR TESTING - DIEGO
  // history: InterlibraryLoan[];
  rating: string;
  category: string;
}
