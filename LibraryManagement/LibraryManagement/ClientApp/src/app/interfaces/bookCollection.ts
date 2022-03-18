import { BookCopy } from "./bookCopy";

export interface BookCollection {
  currentlyBorrowed: BookCopy[];
  wishlist: BookCopy[];
  returned: BookCopy[];
}
