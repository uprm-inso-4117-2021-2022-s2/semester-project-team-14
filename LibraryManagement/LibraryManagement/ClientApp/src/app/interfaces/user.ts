import { BookCollection } from "./BookCollection";

export interface User {
  id: string;
  name: string;
  email: string;
  bookCollection: BookCollection;
  accountType: string;
}
