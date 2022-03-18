import { InterlibraryLoan } from "./interlibraryLoan";

export interface BookCopy {
  id: string;
  name: string;
  author: string;
  isbn: string;
  status: string;
  history: InterlibraryLoan[];
  rating: string;
  category: string;
}
